export interface JobOpening {
  id: string;
  title: string;
  location: string;
  type?: string;
  description: string;
  requirements?: string;
  salary_range?: string;
  is_active: boolean;
}
