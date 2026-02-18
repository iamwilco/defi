export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  entity: string;
  date: string;
  tags: string[];
  phase: 1 | 2 | 3;
}

export interface TimelineMilestone {
  phase: 1 | 2 | 3;
  title: string;
  description: string;
  window: string;
  startDate: string;
  endDate: string;
}

export interface CommsFeedItem {
  id: string;
  kind: "video" | "x_space" | "article";
  title: string;
  description: string;
  href: string;
  date: string;
}

export interface GuideEntry {
  id: string;
  title: string;
  body: string;
  steps: string[];
  mediaLabel: string;
  mediaType?: "video" | "diagram" | "checklist";
  mediaUrl?: string;
}

export interface RecapHighlight {
  day: number;
  title: string;
  metricLabel: string;
  metricValue: string;
  detail: string;
}
