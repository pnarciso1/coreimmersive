import { beforeEach, describe, expect, it, vi } from "vitest";

import { getEmailConfirmationFormType, sendInquiryAutoReply } from "./emailConfirmation";

const { sendMock } = vi.hoisted(() => ({
  sendMock: vi.fn(),
}));

vi.mock("@emailjs/browser", () => ({
  default: {
    send: sendMock,
  },
}));

describe("getEmailConfirmationFormType", () => {
  it("maps inquiry types to the legacy confirmation copy", () => {
    expect(getEmailConfirmationFormType("community")).toBe("bringing a program to your community");
    expect(getEmailConfirmationFormType("mentor")).toBe("becoming a Mentor");
    expect(getEmailConfirmationFormType("partner")).toBe("partnering with Core Immersive");
    expect(getEmailConfirmationFormType("support")).toBe("supporting our mission");
  });
});

describe("sendInquiryAutoReply", () => {
  beforeEach(() => {
    sendMock.mockReset();
    sendMock.mockResolvedValue({ status: 200, text: "OK" });
  });

  it("sends the legacy EmailJS confirmation with the expected template params", async () => {
    await sendInquiryAutoReply({
      email: "ada@example.com",
      name: "Ada Lovelace",
      type: "partner",
    });

    expect(sendMock).toHaveBeenCalledWith(
      "service_uzjzqeh",
      "template_bb3fxb2",
      {
        to_name: "Ada Lovelace",
        to_email: "ada@example.com",
        form_type: "partnering with Core Immersive",
        message_html: "We are out building great things and will get back to you soon.",
      },
      { publicKey: "nzC9LnQ4SH2WWK2PH" },
    );
  });
});
