export interface Portfolio {
  id?: number,
  tags: string[],
  urlImage: string,
  title: string,
  urlGitHub: string,
  urlDemo?: string
}

export interface Portfolios extends Array<Portfolio> {}
