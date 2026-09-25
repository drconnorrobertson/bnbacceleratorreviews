import IndexLayout from "@/components/IndexLayout";
import { allMarkets } from "@/data/markets";

export const metadata = {
  title: "Short-Term Rental Market Guides",
  description: "Educational guides to 40 short-term rental markets: demand drivers, seasonality, regulation basics, risks, and a deal checklist for each.",
  alternates: { canonical: "https://bnbacceleratorreviews.com/markets" },
};

export default function MarketsPage() {
  return (
    <IndexLayout
      title="Short-Term Rental Market Guides"
      intro="What drives demand, how seasonality works, what to check on regulations, and how to evaluate a deal in 40 STR markets."
      basePath="/markets"
      items={allMarkets}
      groupBy={(m) => m.state}
    />
  );
}
