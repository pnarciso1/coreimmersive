import PageLayout, { MediaAsset, SectionTag, useReveal } from "@/components/PageLayout";
import { siteContent } from "@/content/siteContent";
import { sendInquiryAutoReply } from "@/lib/emailConfirmation";
import { type InquiryFormData, type InquiryType, submitInquiry } from "@/lib/inquiries";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const emptyForm: InquiryFormData = {
  fullName: "",
  email: "",
  organization: "",
  phone: "",
  organizationType: "",
  supportType: "",
  expertise: "",
  message: "",
};

function labelForInquiry(type: InquiryType) {
  switch (type) {
    case "partner":
      return "partnership inquiry";
    case "support":
      return "support inquiry";
    case "community":
      return "community inquiry";
    case "mentor":
      return "mentor interest";
  }
}

export default function GetInvolved() {
  const heroRef = useReveal();
  const optionsRef = useReveal();
  const [activeForm, setActiveForm] = useState<InquiryType | null>(null);
  const [formData, setFormData] = useState<InquiryFormData>(emptyForm);
  const [submitting, setSubmitting] = useState(false);

  const activeOption = siteContent.inquiryOptions.find((option) => option.id === activeForm);

  function updateField(field: keyof InquiryFormData, value: string) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!activeForm) {
      return;
    }

    setSubmitting(true);

    try {
      await submitInquiry(activeForm, formData);
      try {
        await sendInquiryAutoReply({
          email: formData.email.trim(),
          name: formData.fullName.trim(),
          type: activeForm,
        });
      } catch {}
      toast.success(`Thank you for your ${labelForInquiry(activeForm)}. We'll be in touch soon.`);
      setFormData(emptyForm);
      setActiveForm(null);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Please try again later.";
      toast.error(`Unable to submit right now. ${message}`);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <PageLayout>
      <section className="page-hero page-hero-soft page-hero-compact" ref={heroRef}>
        <div className="container page-hero-floating page-hero-copy-centered">
          <SectionTag>Get Involved</SectionTag>
          <h1 className="page-title reveal reveal-delay-1">{siteContent.pages.getInvolved.title}</h1>
          <p className="page-intro reveal reveal-delay-2">{siteContent.pages.getInvolved.intro}</p>
        </div>
      </section>

      <section className="get-involved-media-band page-media-band-compact" data-get-involved-media="band">
        <MediaAsset media={siteContent.pages.getInvolved.media} aspectRatio="21 / 8" className="get-involved-media-frame" priority />
      </section>

      <section className="site-section site-section-deep" ref={optionsRef}>
        <div className="container">
          <div className="feature-grid feature-grid-2">
            {siteContent.inquiryOptions.map((option, index) => (
              <button
                key={option.id}
                type="button"
                className={`feature-card feature-card-link reveal reveal-delay-${(index % 4) + 1} ${activeForm === option.id ? "feature-card-active" : ""}`}
                onClick={() => setActiveForm(activeForm === option.id ? null : option.id)}
              >
                <span className={`accent-pill accent-pill-${option.accent}`}>{option.eyebrow}</span>
                <h3>{option.title}</h3>
                <p>{option.description}</p>
                <span className="inline-link">
                  {activeForm === option.id ? "Close Form" : "Get Started"} <ArrowRight size={14} />
                </span>
              </button>
            ))}
          </div>

          {activeOption ? (
            <div className="form-surface reveal visible">
              <div className="form-surface-header">
                <div>
                  <SectionTag>{activeOption.eyebrow}</SectionTag>
                  <h2>{activeOption.title}</h2>
                  <p>{siteContent.pages.getInvolved.responseTime}</p>
                </div>
              </div>

              <form className="field-grid" onSubmit={handleSubmit}>
                <label className="field">
                  <span>Full Name</span>
                  <input value={formData.fullName} onChange={(event) => updateField("fullName", event.target.value)} required />
                </label>

                <label className="field">
                  <span>Email Address</span>
                  <input type="email" value={formData.email} onChange={(event) => updateField("email", event.target.value)} required />
                </label>

                <label className="field">
                  <span>Organization</span>
                  <input value={formData.organization} onChange={(event) => updateField("organization", event.target.value)} required={activeForm !== "mentor"} />
                </label>

                <label className="field">
                  <span>Phone Number</span>
                  <input value={formData.phone} onChange={(event) => updateField("phone", event.target.value)} />
                </label>

                {(activeForm === "partner" || activeForm === "community") && (
                  <label className="field">
                    <span>Organization Type</span>
                    <select value={formData.organizationType} onChange={(event) => updateField("organizationType", event.target.value)}>
                      <option value="">Select an option</option>
                      <option value="School / University">School / University</option>
                      <option value="Nonprofit">Nonprofit</option>
                      <option value="Healthcare Organization">Healthcare Organization</option>
                      <option value="Technology Company">Technology Company</option>
                      <option value="Community Organization">Community Organization</option>
                      <option value="Other">Other</option>
                    </select>
                  </label>
                )}

                {activeForm === "support" && (
                  <label className="field">
                    <span>Support Type</span>
                    <select value={formData.supportType} onChange={(event) => updateField("supportType", event.target.value)}>
                      <option value="">Select an option</option>
                      <option value="Individual Donation">Individual Donation</option>
                      <option value="Corporate Sponsorship">Corporate Sponsorship</option>
                      <option value="Foundation Grant">Foundation Grant</option>
                      <option value="Equipment Donation">Equipment Donation</option>
                      <option value="In-Kind Support">In-Kind Support</option>
                    </select>
                  </label>
                )}

                {activeForm === "mentor" && (
                  <label className="field">
                    <span>Area of Expertise</span>
                    <input value={formData.expertise} onChange={(event) => updateField("expertise", event.target.value)} required />
                  </label>
                )}

                <label className="field field-full">
                  <span>Message</span>
                  <textarea
                    value={formData.message}
                    onChange={(event) => updateField("message", event.target.value)}
                    rows={5}
                    required
                  />
                </label>

                <div className="field-full">
                  <button type="submit" className="btn-primary" disabled={submitting}>
                    {submitting ? "Submitting..." : "Submit"} <ArrowRight size={14} />
                  </button>
                </div>
              </form>
            </div>
          ) : null}
        </div>
      </section>

      <section className="site-section site-section-callout">
        <div className="container">
          <div className="cta-band">
            <div className="cta-copy">
              <SectionTag>Direct Contact</SectionTag>
              <h2 className="section-title reveal reveal-delay-1">Reach out directly.</h2>
              <div className="contact-list reveal reveal-delay-2">
                <a href={`mailto:${siteContent.contact.primaryEmail}`}>{siteContent.contact.primaryEmail}</a>
                <a href={`mailto:${siteContent.contact.secondaryEmail}`}>{siteContent.contact.secondaryEmail}</a>
                <span>{siteContent.contact.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
