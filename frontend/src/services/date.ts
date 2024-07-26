export const date = {
  convert(value: string): Date | null {
    let parsed = Date.parse(value)

    if (!isNaN(parsed)) {
      return new Date(parsed)
    }

    if (value.length === 10) {
      const [day, month, year] = value.split('.').map(Number)
      if (year === undefined || month === undefined || day === undefined) {
        return null
      }

      return new Date(year, month - 1, day);
    }

    if (value.length === 17) {
      const [datePart, timePart] = value.split(', ')
      if (datePart === undefined || timePart === undefined) {
        return null
      }

      const [day, month, year] = datePart.split('.').map(Number)
      const [hours, minutes] = timePart.split(':').map(Number)
      if (year === undefined || month === undefined || day === undefined || hours === undefined || minutes === undefined) {
        return null
      }

      return new Date(year, month - 1, day, hours, minutes);
    }

    return null
  },
  valid(value: string, type: "date" | "time"): boolean {
    let regexDate = /^\d{2}\.\d{2}\.\d{4}$/;
    let regexTime = /^\d{2}\.\d{2}\.\d{4}, \d{2}:\d{2}$/;

    switch (type) {
      case "date":
        if (!regexDate.test(value)) {
          return false
        }
        break;
      case "time":
        if (!regexTime.test(value)) {
          return false
        }
        break;
    }

    return date.convert(value) !== null;
  },
  locale(value: Date | string, type: "date" | "time") {
    if (typeof value === "string") {
      value = date.convert(value)
      if (!value) {
        // todo translate?
        return "-"
      }
    }

    switch (type) {
      case "date":
        return value.toLocaleDateString("de-CH", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit"
        });
      case "time":
        return value.toLocaleString("de-CH", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit"
        });
    }
  }
}
