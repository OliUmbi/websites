export interface ArticleAllResponse {
  id: string
  imageId: string
  title: string
  description: string
  author: string
  published: string
}

export interface ArticleByIdResponse {
  id: string
  imageId: string
  title: string
  description: string
  author: string
  published: string
  markdown: string
}
