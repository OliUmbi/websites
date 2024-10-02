// todo rework + consider using prototyping etc.

export const date = {
    convert(value: any): Date | null {
        if (value == null) {
            return null
        }

        if (value instanceof Date) {
            return value
        }

        if (typeof value === "string") {
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

            if (value.length === 19) {
                const [datePart, timePart] = value.split('T')
                if (datePart === undefined || timePart === undefined) {
                    return null
                }

                const [year, month, day] = datePart.split('-').map(Number)
                const [hours, minutes, seconds] = timePart.split(':').map(Number)
                if (year === undefined || month === undefined || day === undefined || hours === undefined || minutes === undefined || seconds === undefined) {
                    return null
                }

                return new Date(year, month - 1, day, hours, minutes, seconds);
            }

            return null
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
    locale(value: Date | string | null, type: "date" | "time") {
        value = date.convert(value)

        if (!value) {
            return "-"
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
    },
    iso(date: Date) {
        const localTime = date.getTime();
        const timezoneOffset = date.getTimezoneOffset() * 60000;
        const localDate = new Date(localTime - timezoneOffset);

        return localDate.toISOString().replace("Z", "");
    }
}
