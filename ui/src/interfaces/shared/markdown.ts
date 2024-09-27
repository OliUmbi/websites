export interface MarkdownItem {
  id: string
  type: MarkdownItemType
  value: any
  children: MarkdownItem[]
}

// todo button, video
export type MarkdownItemType = "heading-1" | "heading-2" | "heading-3" | "paragraph" | "image" | "flex" | "grid"
