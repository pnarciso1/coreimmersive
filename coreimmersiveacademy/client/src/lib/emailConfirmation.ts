import emailjs from "@emailjs/browser";

import type { InquiryType } from "./inquiries";

const EMAILJS_PUBLIC_KEY = "nzC9LnQ4SH2WWK2PH";
const EMAILJS_SERVICE_ID = "service_uzjzqeh";
const EMAILJS_TEMPLATE_ID = "template_bb3fxb2";
const EMAILJS_MESSAGE_HTML = "We are out building great things and will get back to you soon.";

export function getEmailConfirmationFormType(type: InquiryType) {
  switch (type) {
    case "community":
      return "bringing a program to your community";
    case "mentor":
      return "becoming a Mentor";
    case "partner":
      return "partnering with Core Immersive";
    case "support":
      return "supporting our mission";
  }
}

export async function sendInquiryAutoReply({
  email,
  name,
  type,
}: {
  email: string;
  name: string;
  type: InquiryType;
}) {
  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
      to_name: name,
      to_email: email,
      form_type: getEmailConfirmationFormType(type),
      message_html: EMAILJS_MESSAGE_HTML,
    },
    { publicKey: EMAILJS_PUBLIC_KEY },
  );
}
