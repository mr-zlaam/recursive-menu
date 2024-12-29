export interface IPORTFOLIO {
  title: string;
  description: string;
  image: string;
  singleProjectHref: string;
  singleProjectLivePreview: string;
}

export interface IBLOG {
  title: string;
  description: string;
  image: string;
  blogSlug: string;
  article?: string;
  createdAt: string;
}
