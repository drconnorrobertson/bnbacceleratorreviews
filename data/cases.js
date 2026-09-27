import { acquisitionRecords } from "./acquisition-records";
import { acquisitionRecords2025 } from "./acquisition-records-2025";
import { caseInsights } from "./case-insights";

export const cases = [...acquisitionRecords, ...acquisitionRecords2025].map((record) => ({
  ...record,
  year: record.year || 2026,
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
