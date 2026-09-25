import IndexLayout from "@/components/IndexLayout";
import { learnGuides } from "@/data/learn";

export const metadata = {
  title: "Short-Term Rental Learning Guides",
  description: "Practical STR guides on underwriting, operations, setup, and strategy, with checklists and clearly labeled illustrative examples.",
  alternates: { canonical: "https://bnbacceleratorreviews.com/learn" },
};

export default function LearnPage() {
  return (
    <IndexLayout
      title="Short-Term Rental Learning Guides"
      intro="Step-by-step frameworks and checklists for underwriting, setting up, operating, and scaling short-term rentals."
      basePath="/learn"
      items={learnGuides}
      groupBy={(g) => g.category}
    />
  );
}
