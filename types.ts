export interface NavigationItem {
  name: string;
  path: string;
}

export interface CareerItem {
  year: string;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  solution: string;
  image: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface PrincipleItem {
  title: string;
  description: string;
  iconName: 'Shield' | 'Lock' | 'BarChart';
}