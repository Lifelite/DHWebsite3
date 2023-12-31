let today = new Date()
let christmasYear = new Date().getFullYear()

if (today.getMonth() === 11 &&
    today.getDate() > 25) {
    christmasYear = christmasYear + 1;
}

let christmasDate =
    new Date(christmasYear, 11, 25);

let dayMilliseconds =
    1000 * 60 * 60 * 24;

export const remainingDays = Math.ceil(
    (christmasDate.getTime() - today.getTime()) /
    (dayMilliseconds)
);

