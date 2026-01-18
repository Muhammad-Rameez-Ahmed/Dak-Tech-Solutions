
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags?: string[];
}

export interface ProjectProps {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
}

export interface BlogPostProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  author: string;
}

export interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface NavLinkProps {
  label: string;
  href: string;
}
