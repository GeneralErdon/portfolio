export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  isPrivate: boolean;
  repositoryUrl?: string;
}
