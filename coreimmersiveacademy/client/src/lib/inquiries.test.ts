import { describe, expect, it } from "vitest";

import {
  buildInquiryRecord,
  getCollectionForInquiry,
  toFirestoreFields,
  type InquiryFormData,
  type InquiryType,
} from "./inquiries";

describe("getCollectionForInquiry", () => {
  it("maps redesigned inquiry flows onto the existing Firestore collections", () => {
    const expectations: Array<[InquiryType, string]> = [
      ["community", "join_requests"],
      ["mentor", "mentor_applications"],
      ["partner", "join_requests"],
      ["support", "donations"],
    ];

    expectations.forEach(([type, collection]) => {
      expect(getCollectionForInquiry(type)).toBe(collection);
    });
  });
});

describe("buildInquiryRecord", () => {
  it("builds a mentor application payload that matches the preserved backend shape", () => {
    const data: InquiryFormData = {
      fullName: "Ada Lovelace",
      email: "ada@example.com",
      organization: "Analytical Engine Society",
      phone: "555-0100",
      expertise: "AI Strategy",
      message: "I would like to mentor students building creative projects.",
    };

    expect(buildInquiryRecord("mentor", data)).toMatchObject({
      name: "Ada Lovelace",
      email: "ada@example.com",
      expertise: "AI Strategy",
      reason: "I would like to mentor students building creative projects.",
      inquiry_type: "mentor",
    });
  });

  it("builds a community inquiry as a join request without mentor-only fields", () => {
    const data: InquiryFormData = {
      fullName: "Jordan Rivers",
      email: "jordan@example.com",
      organization: "Northside Youth Center",
      phone: "",
      organizationType: "Community Organization",
      message: "We want to bring a program to our neighborhood.",
    };

    expect(buildInquiryRecord("community", data)).toMatchObject({
      name: "Jordan Rivers",
      email: "jordan@example.com",
      school_org: "Northside Youth Center",
      notes: "We want to bring a program to our neighborhood.",
      role: "community_partner",
      organization_type: "Community Organization",
      inquiry_type: "community",
    });

    expect(buildInquiryRecord("community", data)).not.toHaveProperty("expertise");
  });

  it("builds a partner inquiry using the join request shape instead of the donation shape", () => {
    const data: InquiryFormData = {
      fullName: "Jordan Rivers",
      email: "jordan@example.com",
      organization: "Northside Youth Center",
      phone: "555-0111",
      organizationType: "Community Organization",
      message: "We want to explore a partnership.",
    };

    expect(buildInquiryRecord("partner", data)).toMatchObject({
      name: "Jordan Rivers",
      email: "jordan@example.com",
      school_org: "Northside Youth Center",
      notes: "We want to explore a partnership.",
      role: "partner",
      organization_type: "Community Organization",
      inquiry_type: "partner",
    });

    expect(buildInquiryRecord("partner", data)).not.toHaveProperty("type");
  });

  it("includes the legacy timestamp field so existing admin tooling can keep working", () => {
    const data: InquiryFormData = {
      fullName: "Jordan Rivers",
      email: "jordan@example.com",
      organization: "Northside Youth Center",
      phone: "",
      message: "We want to bring a program to our neighborhood.",
    };

    expect(buildInquiryRecord("support", data)).toHaveProperty("timestamp");
    expect(buildInquiryRecord("support", data)).not.toHaveProperty("submitted_at_iso");
  });
});

describe("toFirestoreFields", () => {
  it("serializes plain values into Firestore REST field values", () => {
    expect(
      toFirestoreFields({
        name: "Core Immersive",
        amount: 12,
        active: true,
      }),
    ).toEqual({
      name: { stringValue: "Core Immersive" },
      amount: { integerValue: "12" },
      active: { booleanValue: true },
    });
  });
});
