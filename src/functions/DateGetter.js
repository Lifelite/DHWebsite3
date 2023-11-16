export class DateGetter{
    constructor(dates) {
        this.dates = dates
    }

    getDateData() {
        const rawDates = this.dates
        const rows = rawDates["rows"]
        let dates = []
        for (let i in rows) {
            let d = rows[i]["createdDate"].toString()
            let a = d.split(" ")
            dates.push(a[0])
        }
        return dates;
    }


}