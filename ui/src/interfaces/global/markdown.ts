export interface Markdown {
  type: null | "h1" | "h2" | "h3" | "p" | "button" | "image" | "video" | "file" | "grid",
  value: any
  children: Markdown[]
}
