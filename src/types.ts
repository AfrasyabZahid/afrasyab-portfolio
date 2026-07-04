/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  category: 'AI/ML' | 'Automation' | 'Data/ML';
  date: string;
  timeline?: string;
  service?: string;
  tools?: string[];
  liveUrl?: string;
  abstract?: string;
  motivation?: string;
  problemSolved?: string;
  architecture?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  subtitle?: string;
  solutions?: string[];
  techStack?: string[];
  detailedIntro?: string;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  isCurrent?: boolean;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  duration: string;
  grade?: string;
  details?: string[];
}

export interface AchievementEntry {
  title: string;
  issuer: string;
  date: string;
  description: string;
  details?: string[];
}

export interface ResearchArticle {
  id: string;
  title: string;
  publication: string;
  date: string;
  abstract: string;
  tags: string[];
  link?: string;
}

