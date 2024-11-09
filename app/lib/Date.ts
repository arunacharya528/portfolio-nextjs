import dayjs from "dayjs";
import Retriever from "./Retriever";

import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

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

export function getTotalWorkExperience(experiences: Awaited<typeof Retriever.experience>): string {

    const smallestDates = experiences.map((experience) => experience.duration.from);

    const smallestDate = smallestDates.reduce((min, date) => dayjs(date).isBefore(dayjs(min)) ? date : min);

    return dayjs(smallestDate).fromNow(true);
}