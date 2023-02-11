export interface LinkFooter {
  title: string,
  src: string,
}

export interface CompanyFooter {
  title: string,
  partners: number,
}

export interface Footer {
  links: LinkFooter[],
  partnerships: CompanyFooter,
}
