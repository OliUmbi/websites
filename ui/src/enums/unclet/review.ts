export enum ReviewStatus {
  OPEN = "OPEN",
  PUBLIC = "PUBLIC",
  REJECTED = "REJECTED"
}

export namespace ReviewStatus {
  export const translate = (value: ReviewStatus) => {
    switch (value) {
      case ReviewStatus.OPEN:
        return "Offen"
      case ReviewStatus.PUBLIC:
        return "Öffentlich"
      case ReviewStatus.REJECTED:
        return "Abgelehnt"
    }
  }
  export const parse = (value: string) => {
    switch (value) {
      case "Offen":
        return ReviewStatus.OPEN
      case "Öffentlich":
        return ReviewStatus.PUBLIC
      case "Abgelehnt":
        return ReviewStatus.REJECTED
    }
  }
}
