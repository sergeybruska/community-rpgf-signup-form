export type CreateProjectState = {
  name: string;
  description: string;
  about_team: string;
  team_company: string;
  category: string[];
  has_token: string;
  fund_history: string;
  size_grant: number;
  url_website: string;
  url_whitepaper: string;
  contact_name: string;
  contact_email: string;
  contact_tg: string;
  cover: string | null;
  captcha?: string;
};

export type CreateProjectRequest = {
  name: string;
  description: string;
  about_team: string;
  team_company: string;
  category: string[];
  has_token: string;
  fund_history: string;
  size_grant: number;
  url_website: string;
  url_whitepaper: string;
  contact_name: string;
  contact_email: string;
  contact_tg: string;
  cover: string | null;
};
