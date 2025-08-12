import type React from "react"
import {
  Headphones,
  FileSpreadsheet,
  Calculator,
  Shield,
  Wrench,
  Globe2,
  Boxes,
  MessageSquare,
  Database,
} from "lucide-react"

export type Service = {
  id: string
  title: string
  shortDesc: string
  problem: string
  solution: string
  features: string[]
  stats: { responseTime: string; csatIncrease: string; costSaving: string }
  category: string
  icon: React.ReactNode
  priority: number
}

export const SERVICE_CATEGORIES = [
  "Customer Support",
  "Back Office",
  "Finance",
  "Technical Support",
  "Sales",
  "Content Moderation",
  "Data Ops",
  "Quality Assurance",
  "Operations",
]

const iconFor = (name: string) => {
  switch (name) {
    case "Customer Support":
      return <Headphones className="size-5" />
    case "Back Office":
      return <Boxes className="size-5" />
    case "Finance":
      return <Calculator className="size-5" />
    case "Technical Support":
      return <Wrench className="size-5" />
    case "Sales":
      return <MessageSquare className="size-5" />
    case "Content Moderation":
      return <Shield className="size-5" />
    case "Data Ops":
      return <Database className="size-5" />
    case "Quality Assurance":
      return <FileSpreadsheet className="size-5" />
    default:
      return <Globe2 className="size-5" />
  }
}

const ALL_SERVICES: Service[] = [
  {
    id: "customer-support",
    title: "Customer Support Services",
    shortDesc: "24/7 multilingual, omnichannel support for customer retention.",
    problem: "Slow response times and language gaps hurt brand loyalty.",
    solution: "Instant, culturally accurate, unified support worldwide.",
    features: [
      "Inbound Customer Support",
      "Outbound Engagement",
      "Technical Support (Tier 1–3)",
      "Live Chat & Email Support",
      "Social Media Care",
      "Omnichannel Integration",
    ],
    stats: { responseTime: "35–50% faster", csatIncrease: "15–25% higher", costSaving: "20–40%" },
    category: "Customer Support",
    icon: iconFor("Customer Support"),
    priority: 1,
  },
  {
    id: "back-office",
    title: "Back Office Ops",
    shortDesc: "Accurate, scalable data entry, QA, and process ops.",
    problem: "Manual processes break at scale, creating errors and delays.",
    solution: "Standardized SOPs, QA gates, and automation to boost accuracy.",
    features: [
      "Data Entry & Cleanup",
      "Workflow QA",
      "Content Tagging",
      "Catalog Ops",
      "Docs Processing",
      "Email Management",
    ],
    stats: { responseTime: "N/A", csatIncrease: "N/A", costSaving: "25–45%" },
    category: "Back Office",
    icon: iconFor("Back Office"),
    priority: 2,
  },
  {
    id: "accounting",
    title: "Accounting (AR/AP)",
    shortDesc: "Tighten cash cycles with reconciliations and vendor ops.",
    problem: "Cash leaks and delayed closes from fragmented workflows.",
    solution: "AR/AP hubs with reconciliations and dashboard clarity.",
    features: [
      "AR Collections",
      "AP Processing",
      "Bank Reconciliations",
      "Expense Audits",
      "Close Support",
      "Vendor Management",
    ],
    stats: { responseTime: "N/A", csatIncrease: "N/A", costSaving: "20–35%" },
    category: "Finance",
    icon: iconFor("Finance"),
    priority: 3,
  },
  {
    id: "technical-support",
    title: "Technical Support",
    shortDesc: "Tier 1–3 troubleshooting with knowledge-centered service.",
    problem: "Escalations pile up, knowledge is tribal, and SLAs slip.",
    solution: "KCS, runbooks, and integrated tooling to resolve faster.",
    features: [
      "Tiered Support",
      "Runbook Design",
      "Incident Comms",
      "Diagnostics",
      "RMA & Escalations",
      "Knowledge Ops",
    ],
    stats: { responseTime: "30–45% faster", csatIncrease: "10–20% higher", costSaving: "15–25%" },
    category: "Technical Support",
    icon: iconFor("Technical Support"),
    priority: 4,
  },
  {
    id: "sales-dev",
    title: "Sales Development",
    shortDesc: "Qualified pipeline through outbound and inbound SDRs.",
    problem: "Inconsistent pipeline and high cost-per-opportunity.",
    solution: "ICP-driven outreach with rigorous enablement and QA.",
    features: ["Prospecting", "Sequencing", "Qualification", "Hand-off SLAs", "Enablement Content", "CRM Hygiene"],
    stats: { responseTime: "N/A", csatIncrease: "N/A", costSaving: "20–30%" },
    category: "Sales",
    icon: iconFor("Sales"),
    priority: 5,
  },
  {
    id: "content-moderation",
    title: "Content Moderation",
    shortDesc: "Safe communities with policy-aligned review at scale.",
    problem: "User harm and brand risk from delayed or biased moderation.",
    solution: "Guideline-driven queues with wellness safeguards.",
    features: ["Policy Design", "Queue Triage", "Appeals", "Edge Cases", "Escalations", "A/B Policy Tests"],
    stats: { responseTime: "40% faster", csatIncrease: "N/A", costSaving: "20–30%" },
    category: "Content Moderation",
    icon: iconFor("Content Moderation"),
    priority: 6,
  },
  {
    id: "data-ops",
    title: "Data Operations",
    shortDesc: "Annotate, enrich, and validate datasets for AI.",
    problem: "Model quality suffers from low-fidelity ground truth.",
    solution: "Expert tasking with multi-pass QA and gold sets.",
    features: ["Annotation", "Enrichment", "Validation", "Gold Sets", "Inter-rater Checks", "Reporting"],
    stats: { responseTime: "N/A", csatIncrease: "N/A", costSaving: "15–25%" },
    category: "Data Ops",
    icon: iconFor("Data Ops"),
    priority: 7,
  },
  {
    id: "qa",
    title: "Quality Assurance",
    shortDesc: "Independent QA for processes and product experiences.",
    problem: "Blind spots create costly rework and churn.",
    solution: "Risk-based testing and continuous improvement loops.",
    features: ["Process Audits", "UX QA", "Regression Testing", "UAT Support", "Defect Triage", "SOP Calibration"],
    stats: { responseTime: "N/A", csatIncrease: "N/A", costSaving: "10–20%" },
    category: "Quality Assurance",
    icon: iconFor("Quality Assurance"),
    priority: 8,
  },
  {
    id: "ops",
    title: "Operations Consulting",
    shortDesc: "Playbooks, KPIs, and org design that scales.",
    problem: "Teams grow faster than process maturity.",
    solution: "Operating system for repeatable, measurable execution.",
    features: ["Org Design", "SOPs", "KPI Trees", "Capacity Planning", "Tooling Strategy", "Change Management"],
    stats: { responseTime: "N/A", csatIncrease: "N/A", costSaving: "Varies" },
    category: "Operations",
    icon: iconFor("Operations"),
    priority: 9,
  },
]

export async function fetchServices({
  page = 1,
  limit = 6,
  category = "All",
}: { page?: number; limit?: number; category?: string }) {
  const list = category === "All" ? ALL_SERVICES : ALL_SERVICES.filter((s) => s.category === category)
  const sorted = [...list].sort((a, b) => a.priority - b.priority)
  const start = (page - 1) * limit
  const items = sorted.slice(0, start + limit) // emulate "Load More" behavior
  return { items, total: sorted.length }
}

export async function fetchServiceById(id: string) {
  const svc = ALL_SERVICES.find((s) => s.id === id)
  if (!svc) throw new Error("Not found")
  return svc
}
