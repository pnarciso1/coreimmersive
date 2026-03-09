import { initializeApp, getApps } from "firebase/app";
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";

export type InquiryType = "partner" | "support" | "community" | "mentor";

export interface InquiryFormData {
  fullName: string;
  email: string;
  organization: string;
  phone: string;
  organizationType?: string;
  supportType?: string;
  expertise?: string;
  message: string;
}

type FirestorePrimitive = string | number | boolean;
type InquiryRecordValue = FirestorePrimitive | typeof SERVER_TIMESTAMP_PLACEHOLDER;

const SERVER_TIMESTAMP_PLACEHOLDER = "__SERVER_TIMESTAMP__";
const firebaseConfig = {
  apiKey: "AIzaSyDcD7PTigv7FwNrVCmdA8BN534ok1XjIb4",
  authDomain: "coreimmersiveacademy.firebaseapp.com",
  projectId: "coreimmersiveacademy",
  storageBucket: "coreimmersiveacademy.firebasestorage.app",
  messagingSenderId: "1064567400780",
  appId: "1:1064567400780:web:42a57497a2f21ab50207e9",
  measurementId: "G-QQMJ8MMYSV",
};

const firebaseApp = getApps()[0] ?? initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

export function getCollectionForInquiry(type: InquiryType): string {
  switch (type) {
    case "community":
      return "join_requests";
    case "mentor":
      return "mentor_applications";
    case "partner":
    case "support":
      return "donations";
  }
}

export function buildInquiryRecord(type: InquiryType, data: InquiryFormData): Record<string, InquiryRecordValue> {
  const base = {
    name: data.fullName.trim(),
    email: data.email.trim(),
    organization: data.organization.trim(),
    phone: data.phone.trim(),
    inquiry_type: type,
    timestamp: SERVER_TIMESTAMP_PLACEHOLDER,
  };

  if (type === "mentor") {
    return compactRecord({
      ...base,
      expertise: data.expertise?.trim() ?? "",
      reason: data.message.trim(),
    });
  }

  if (type === "community") {
    return compactRecord({
      ...base,
      role: "community_partner",
      school_org: data.organization.trim(),
      organization_type: data.organizationType?.trim() ?? "",
      notes: data.message.trim(),
    });
  }

  return compactRecord({
    ...base,
    type: type === "partner" ? "partnership" : data.supportType?.trim() || "support",
    message: data.message.trim(),
    organization_type: data.organizationType?.trim() ?? "",
  });
}

export function toFirestoreFields(record: Record<string, FirestorePrimitive>) {
  return Object.fromEntries(
    Object.entries(record).map(([key, value]) => [key, serializeFirestoreValue(value)]),
  );
}

export async function submitInquiry(type: InquiryType, data: InquiryFormData) {
  const collectionName = getCollectionForInquiry(type);
  const record = buildInquiryRecord(type, data);
  return addDoc(collection(firestore, collectionName), materializeRecord(record));
}

function compactRecord(record: Record<string, InquiryRecordValue>) {
  return Object.fromEntries(
    Object.entries(record).filter(([, value]) => value !== ""),
  );
}

function materializeRecord(record: Record<string, InquiryRecordValue>) {
  return Object.fromEntries(
    Object.entries(record).map(([key, value]) => [
      key,
      value === SERVER_TIMESTAMP_PLACEHOLDER ? serverTimestamp() : value,
    ]),
  );
}

function serializeFirestoreValue(value: FirestorePrimitive) {
  if (typeof value === "boolean") {
    return { booleanValue: value };
  }

  if (typeof value === "number") {
    return Number.isInteger(value)
      ? { integerValue: String(value) }
      : { doubleValue: value };
  }

  return { stringValue: value };
}
