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
