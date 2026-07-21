export const ocxKeywords =
  "OCX, OCXX, Adobe IT Uganda OCX, Omnichannel CCaaS, Contact Center Software, Call Center Solution, Customer Support Platform, Contact Center Uganda, live call control, supervisor dashboard, agent workspace, wallboard, real-time monitoring, call recordings, queues";

export const ocxScreenshots = [
  {
    title: "Supervisor Dashboard",
    description: "Live KPIs, queue health, answer rates, and active-call visibility for supervisors.",
    src: "/supervisor-dashboard.png",
    alt: "OCX supervisor dashboard showing live call monitoring, queue metrics, and contact center KPIs",
  },
  {
    title: "Live Call Control",
    description: "Monitor, coach, whisper, barge, and disconnect calls from one secure console.",
    src: "/live-call-control.png",
    alt: "OCX live call control screen for supervisor call monitoring and coaching",
  },
  {
    title: "Agent Workspace",
    description: "A focused agent desktop for calls, campaigns, queues, inboxes, and follow-ups.",
    src: "/agent-dashboard.png",
    alt: "OCX agent workspace showing call tools, queue status, recent calls, and voicemail",
  },
  {
    title: "Wallboard",
    description: "Big-screen operational monitoring for service levels, queues, and agent status.",
    src: "/wallboard.png",
    alt: "OCX wallboard with real-time contact center performance and agent status metrics",
  },
];

export const ocxFeatureList = [
  "Live call control with supervisor monitoring, whisper, barge, and escalation workflows",
  "Supervisor dashboard for agents, queues, answer rates, abandoned calls, and wait times",
  "Agent workspace for inbound and outbound calls, callbacks, campaign login, and customer follow-up",
  "Wallboard and real-time monitoring for contact center floors and management screens",
  "Reporting, recordings, queue performance, and quality management visibility",
  "Omnichannel support for voice, SMS, email, web chat, WhatsApp, social channels, tickets, and CRM workflows",
];

export const ocxSoftwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "OCX",
  alternateName: "OCXX",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Omnichannel CCaaS and Contact Center Software",
  operatingSystem: "Web",
  url: "https://adobeitechug.com/ocx",
  image: "https://adobeitechug.com/supervisor-dashboard.png",
  description:
    "OCX is Adobe IT Uganda's omnichannel CCaaS contact center software for live call control, supervisor dashboards, agent workspaces, wallboards, reporting, recordings, queues, and customer support operations.",
  publisher: {
    "@type": "Organization",
    name: "Adobe Technologies Limited Uganda",
    url: "https://adobeitechug.com",
  },
  featureList: ocxFeatureList,
};

export const ocxProductSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "OCX",
  alternateName: "OCXX",
  category: "Omnichannel CCaaS / Contact Center Solution",
  brand: {
    "@type": "Brand",
    name: "Adobe IT Uganda",
  },
  manufacturer: {
    "@type": "Organization",
    name: "Adobe Technologies Limited Uganda",
    url: "https://adobeitechug.com",
  },
  image: [
    "https://adobeitechug.com/supervisor-dashboard.png",
    "https://adobeitechug.com/live-call-control.png",
    "https://adobeitechug.com/agent-dashboard.png",
    "https://adobeitechug.com/wallboard.png",
  ],
  description:
    "OCX is a modern contact center and customer support platform for Ugandan and enterprise teams that need live call control, agent workspaces, real-time wallboards, recordings, reports, queues, and omnichannel service operations.",
};
