import { acquisitionRecords } from "./acquisition-records";
import { caseInsights } from "./case-insights";

export const cases = acquisitionRecords.map((record) => ({
  ...record,
  insight: caseInsights[record.slug] || null,
}));

export const featuredCases = cases.filter((record) => record.insight);

export const formatMoney = (amount) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);

export const topicLabels = {
  inspection: "Inspection",
  negotiation: "Negotiation",
  appraisal: "Appraisal",
  financing: "Financing",
  handoff: "Operating handoff",
};
