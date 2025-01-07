export enum BookingStatus {
  OPEN = "OPEN",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
  REJECTED = "REJECTED"
}

export namespace BookingStatus {
  export const translate = (value: BookingStatus) => {
    switch (value) {
      case BookingStatus.OPEN:
        return "Offen"
      case BookingStatus.IN_PROGRESS:
        return "In Bearbeitung"
      case BookingStatus.DONE:
        return "Abgeschlossen"
      case BookingStatus.REJECTED:
        return "Abgelehnt"
    }
  }
  export const parse = (value: string) => {
    switch (value) {
      case "Offen":
        return BookingStatus.OPEN
      case "In Bearbeitung":
        return BookingStatus.IN_PROGRESS
      case "Abgeschlossen":
        return BookingStatus.DONE
      case "Abgelehnt":
        return BookingStatus.REJECTED
    }
  }
}
