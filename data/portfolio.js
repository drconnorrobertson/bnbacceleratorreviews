// Real portfolio data from BnB Accelerator client acquisitions
// Data sourced from internal tracking spreadsheet - updated September 2026

export const portfolioStats = {
  totalPropertiesAcquired: 25,
  totalPropertiesTracked: 140,
  totalPipelineProperties: 18,
  uniqueClients: 70,
  totalPropertyValue: 22314900,
  totalAnnualCashflow: 793511,
  totalCapitalDeployed: 5855823,
  propertiesPositiveCashflow: 23,
  propertiesTotal: 25,
  cashflowPositiveRate: 92,
  avgCashOnCash: 14.1,
  maxCashOnCash: 24.3,
  minCashOnCash: 5.4,
  activeMarkets: 11,
};

export const performanceBreakdown = {
  banger: 26,
  crushing: 10,
  excelling: 14,
  live: 55,
  liveSupportNeeded: 9,
  total: 114,
};

export const marketBreakdown = [
  { market: "Florida Panhandle (30A / Destin / PCB)", state: "FL", properties: 9, totalValue: 7415000, avgCashOnCash: 12.2, demandDrivers: "Beach tourism, snowbirds, strong summer peaks, 30A luxury market", barWidth: 95 },
  { market: "Smoky Mountains (Sevierville / Pigeon Forge)", state: "TN", properties: 5, totalValue: 5370000, avgCashOnCash: 14.9, demandDrivers: "Great Smoky Mountains National Park, Dollywood, year-round cabin demand", barWidth: 90 },
  { market: "Broken Bow", state: "OK", properties: 2, totalValue: 1995000, avgCashOnCash: 22.0, demandDrivers: "Luxury cabin market, lake tourism, outdoor recreation", barWidth: 85 },
  { market: "Poconos", state: "PA", properties: 2, totalValue: 1470000, avgCashOnCash: 17.4, demandDrivers: "Northeast vacation market, ski season, lake recreation", barWidth: 80 },
  { market: "Gulf Shores", state: "AL", properties: 1, totalValue: 1595000, avgCashOnCash: 13.2, demandDrivers: "Beach tourism, family travel, Gulf Coast demand", barWidth: 75 },
  { market: "Branson West", state: "MO", properties: 1, totalValue: 1600000, avgCashOnCash: 23.2, demandDrivers: "Entertainment tourism, Silver Dollar City, lake recreation", barWidth: 82 },
  { market: "Denver Metro", state: "CO", properties: 2, totalValue: 1100000, avgCashOnCash: 11.0, demandDrivers: "Business travel, outdoor recreation, year-round tourism", barWidth: 65 },
  { market: "Austin", state: "TX", properties: 1, totalValue: 415000, avgCashOnCash: 15.6, demandDrivers: "Live music, tech industry, SXSW, year-round events", barWidth: 72 },
  { market: "Disney / Kissimmee", state: "FL", properties: 1, totalValue: 590000, avgCashOnCash: 5.7, demandDrivers: "Theme park tourism, family travel, year-round demand", barWidth: 55 },
  { market: "Hollister", state: "MO", properties: 1, totalValue: 764900, avgCashOnCash: 6.1, demandDrivers: "Branson area tourism, Table Rock Lake, outdoor recreation", barWidth: 58 },
  { market: "Destin", state: "FL", properties: 1, totalValue: 950000, avgCashOnCash: 5.4, demandDrivers: "Emerald Coast beach tourism, fishing, family vacations", barWidth: 55 },
];

export const clientAcquisitions = [
  { firstName: "Dan & Kimberly", market: "Austin, TX", purchasePrice: 415000, totalEntry: 250775, annualCashflow: 39017, cashOnCash: 15.56 },
  { firstName: "Dustin", market: "Branson West, MO", purchasePrice: 1600000, totalEntry: 363890, annualCashflow: 58244, cashOnCash: 23.23 },
  { firstName: "Valerie", market: "Broken Bow, OK", purchasePrice: 995000, totalEntry: 278736, annualCashflow: 60987, cashOnCash: 24.32 },
  { firstName: "Raymond", market: "Broken Bow, OK", purchasePrice: 1000000, totalEntry: 251500, annualCashflow: 49510, cashOnCash: 19.74 },
  { firstName: "Meena", market: "Denver, CO", purchasePrice: 545000, totalEntry: 194247, annualCashflow: 33283, cashOnCash: 13.27 },
  { firstName: "Kevin", market: "Denver, CO", purchasePrice: 555000, totalEntry: 160247, annualCashflow: 22082, cashOnCash: 8.81 },
  { firstName: "Mark", market: "Destin, FL", purchasePrice: 950000, totalEntry: 151588, annualCashflow: 13608, cashOnCash: 5.43 },
  { firstName: "Harsh & Meghna", market: "Disney / Kissimmee, FL", purchasePrice: 590000, totalEntry: 141283, annualCashflow: 14405, cashOnCash: 5.74 },
  { firstName: "Amber", market: "Gulf Shores, AL", purchasePrice: 1595000, totalEntry: 288700, annualCashflow: 33142, cashOnCash: 13.22 },
  { firstName: "David", market: "Hollister, MO", purchasePrice: 764900, totalEntry: 137318, annualCashflow: 15284, cashOnCash: 6.09 },
  { firstName: "Peter", market: "Panhandle (30A), FL", purchasePrice: 1140000, totalEntry: 407144, annualCashflow: -4602, cashOnCash: -1.84 },
  { firstName: "Shardul", market: "Panhandle (30A), FL", purchasePrice: 540000, totalEntry: 174050, annualCashflow: 37408, cashOnCash: 14.92 },
  { firstName: "Tiffany", market: "Panhandle (30A), FL", purchasePrice: 1100000, totalEntry: 206835, annualCashflow: 28307, cashOnCash: 11.29 },
  { firstName: "Naveen", market: "Panhandle (30A), FL", purchasePrice: 700000, totalEntry: 236000, annualCashflow: 30555, cashOnCash: 12.18 },
  { firstName: "Ashley & Billy", market: "Panhandle (30A), FL", purchasePrice: 630000, totalEntry: 220800, annualCashflow: 43946, cashOnCash: 17.52 },
  { firstName: "Erwin & Lilyana", market: "Panhandle (30A), FL", purchasePrice: 560000, totalEntry: 205750, annualCashflow: 40976, cashOnCash: 16.34 },
  { firstName: "Adam", market: "Panhandle (30A), FL", purchasePrice: 645000, totalEntry: 195769, annualCashflow: 19893, cashOnCash: 7.93 },
  { firstName: "Peter", market: "Panhandle (30A), FL", purchasePrice: 1150000, totalEntry: 392660, annualCashflow: -16349, cashOnCash: -6.52 },
  { firstName: "Pruthvi", market: "Poconos, PA", purchasePrice: 590000, totalEntry: 219903, annualCashflow: 35267, cashOnCash: 14.06 },
  { firstName: "Julie", market: "Poconos, PA", purchasePrice: 880000, totalEntry: 245156, annualCashflow: 52139, cashOnCash: 20.79 },
  { firstName: "Victoria", market: "Smokies, TN", purchasePrice: 1375000, totalEntry: 284044, annualCashflow: 51777, cashOnCash: 20.65 },
  { firstName: "Krystin", market: "Smokies, TN", purchasePrice: 1050000, totalEntry: 241968, annualCashflow: 45599, cashOnCash: 18.18 },
  { firstName: "Mahmoud", market: "Smokies, TN", purchasePrice: 1090000, totalEntry: 263118, annualCashflow: 36173, cashOnCash: 14.42 },
  { firstName: "Hema", market: "Smokies, TN", purchasePrice: 1080000, totalEntry: 205400, annualCashflow: 37996, cashOnCash: 15.15 },
  { firstName: "Adam", market: "Smokies, TN", purchasePrice: 775000, totalEntry: 138942, annualCashflow: 14864, cashOnCash: 5.93 },
];
