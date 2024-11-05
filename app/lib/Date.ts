import dayjs from "dayjs";

export function formatExperienceDate(date: string | null): string {
    let parsedDate = Boolean(date) ? dayjs(date) : dayjs();

    return parsedDate.format("YYYY MMMM")
}

export function getDifferenceOfExperienceDates(from: string, to: string | null): string {
    let parsedFrom = dayjs(from);
    let parsedTo = Boolean(to) ? dayjs(to) : dayjs();

    let differenceInMonths = parsedTo.diff(parsedFrom, "M");

    let yearDiff = Math.floor(differenceInMonths / 12);

    let remainingMonthsDiff = differenceInMonths - (yearDiff * 12);

    return (Boolean(yearDiff) ? `${yearDiff} Year ` : "") + (Boolean(remainingMonthsDiff) ? `${remainingMonthsDiff} Month` : "");
}