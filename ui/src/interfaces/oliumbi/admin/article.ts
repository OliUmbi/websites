export interface ArticleAllResponse {
  id: string
  title: string
  author: string
  published: string
  visible: boolean
}

export interface ArticleByIdResponse {
  id: string
  imageId: string
  title: string
  description: string
  author: string
  published: string
  markdown: string
  visible: boolean
}
