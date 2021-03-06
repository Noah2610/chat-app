import { Timestamp } from "../firebase/types";

export function formatTimestamp(timestamp: Timestamp): string {
    if (!timestamp) {
        return "--:--:--";
    }

    const today = new Date();
    const dateInst = new Date(timestamp.seconds * 1000);
    const date = {
        year: dateInst.getFullYear(),
        month: dateInst.getMonth(),
        day: dateInst.getDate(),
        hour: dateInst.getHours(),
        minute: dateInst.getMinutes(),
        second: dateInst.getSeconds(),
    };
    const isToday =
        today.getFullYear() === date.year &&
        today.getMonth() === date.month &&
        today.getDate() === date.day;
    const pad = (num: number) => num.toString().padStart(2, "0");
    return (
        (isToday
            ? ""
            : `${pad(date.year)}-${pad(date.month)}${pad(date.day)} `) +
        `${pad(date.hour)}:${pad(date.minute)}:${pad(date.second)}`
    );
}
