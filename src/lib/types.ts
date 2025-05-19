
export interface Contribution {
  id: string;
  content: string;
  author: string;
  createdAt: Date;
}

export interface Story {
  id: string;
  title: string;
  contributions: Contribution[];
  createdAt: Date;
  updatedAt: Date;
}
