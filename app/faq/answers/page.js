import IndexLayout from "@/components/IndexLayout";
import { faqAnswers } from "@/data/faq-answers";

export const metadata = {
  title: "STR and BnB Accelerator Questions Answered",
  description: "Direct answers to common short-term rental and BnB Accelerator questions, with disclosures about what this company-owned site can and cannot say.",
  alternates: { canonical: "https://bnbacceleratorreviews.com/faq/answers" },
};

export default function FaqAnswersPage() {
  return (
    <IndexLayout
      title="Questions Answered"
      intro="Short, direct answers to common questions about short-term rental investing and BnB Accelerator."
      basePath="/faq"
      items={faqAnswers}
    />
  );
}
