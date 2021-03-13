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
            : `${pad(date.year)}-${pad(date.month + 1)}-${pad(date.day)} `) +
        `${pad(date.hour)}:${pad(date.minute)}:${pad(date.second)}`
    );
}

export function getNameInitials(
    name: string,
    options?: { maxLen?: number; isEmail?: boolean },
): string {
    options = options ?? {};
    let { maxLen, isEmail } = options;
    maxLen = maxLen ?? 2;
    isEmail = isEmail ?? false;

    if (isEmail) {
        const indexOfAtSign = name.indexOf("@");
        name = name.slice(0, indexOfAtSign);
    }

    const initials = name
        .trim()
        .split(isEmail ? "." : " ")
        .map((word) => word[0].toUpperCase())
        .filter((letter) => !!letter);

    const limitedInitials = initials.splice(0, maxLen);
    const lastInitial = initials.pop();
    if (lastInitial && limitedInitials.length > 1) {
        limitedInitials[limitedInitials.length - 1] = lastInitial;
    }

    return limitedInitials.join("");
}
