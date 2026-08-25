export type CapitalMarketsTopic = {
  id: string
  title: string
  description: string
  tags: string[]
}

export const capitalMarketsTopics: CapitalMarketsTopic[] = [
  {
    id: 'capital-markets',
    title: 'Capital Markets',
    description:
      'Learning how financial systems move from trade execution to reporting, risk and settlement.',
    tags: ['Trading', 'Risk', 'MarketData'],
  },
  {
    id: 'trading-platforms',
    title: 'Trading Platforms',
    description:
      'Working close to the platforms that power the trade lifecycle — from front office to reporting.',
    tags: ['Kondor+', 'Sophis', 'FinancialProducts'],
  },
  {
    id: 'risk-reporting',
    title: 'Risk & Regulatory Reporting',
    description:
      'Building the pipelines that turn trading activity into regulatory and risk-management reporting.',
    tags: ['RiskManagement', 'RegulatoryReporting'],
  },
]
