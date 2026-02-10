export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Markdown content
  category: string;
  date: string; // ISO date string
  author: string;
  readTime: string; // e.g., "5 min read"
  image?: string; // Optional featured image for social sharing
  tags?: string[];
}

import { questionsFromAPotentialStudent } from './questions-from-a-potential-student';
import { comparingHomeInspectorSchools } from './comparing-home-inspector-schools';
import { truthAboutTraditionalEducation } from './truth-about-traditional-education';
import { goingBeyondMinimumRequirements } from './going-beyond-minimum-requirements';
import { adultLearningTheory } from './adult-learning-theory';
import { nhieExamPreparation } from './nhie-exam-preparation';

export const blogPosts: BlogPost[] = [
  questionsFromAPotentialStudent,
  comparingHomeInspectorSchools,
  truthAboutTraditionalEducation,
  goingBeyondMinimumRequirements,
  adultLearningTheory,
  nhieExamPreparation,
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
