import {connect} from "@planetscale/database";

const config = {
    //url: process.env.DATABASE_URL,
    host: import.meta.env.VITE_PS_HOST,
    username: import.meta.env.VITE_PS_USERNAME,
    password: import.meta.env.VITE_PS_PASSWORD,
    database: import.meta.env.VITE_PS_DATABASE,
}

const conn = await connect(config)
export class AdminControls {


    async getSecretSantas() {
        const query = "SELECT * FROM SecretSanta;"
        return await conn.execute(query);
    }

    async getDates() {
        const query = "SELECT `createdDate` FROM SecretSanta;"
        return await conn.execute(query);
    }

    getDateData() {
        const rawDates = this.getDates()
        const rows = rawDates["rows"]
        let dates = []
        for (let i in rows) {
            let d = rows[i].toString()
            let a = d.split(" ")
            dates += a[0]
        }
        return dates;
    }




}