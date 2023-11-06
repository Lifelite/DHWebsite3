import {connect} from "@planetscale/database";



const config = {
    //url: process.env.DATABASE_URL,
    host: process.env.PS_HOST,
    username: process.env.PS_USERNAME,
    password: process.env.PS_PASSWORD,
    database: process.env.PS_DATABASE
}


const conn = await connect(config)

export class SantaSubmit {
    constructor(data) {
        this.firstName = data.get('firstName');
        this.lastName = data.get('lastName');
        this.email = data.get('email');
        this.discord = data.get('discord');
        this.address1 = data.get('address1');
        this.address2 = data.get('address-line2');
        this.state = data.get('state');
        this.zip = data.get('zip');
        this.likes = data.get('likes');
        this.dislikes = data.get('dislikes');
        this.charity = data.get('charity');
        this.allergies = data.get('allergy-text');
        this.nsfw = data.get('nsfw');
    };


    async writeSantaData() {
        const params = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            discord: this.discord,
            address1: this.address1,
            address2: this.address2,
            state: this.state,
            zip: this.zip,
            likes: this.likes,
            dislikes: this.dislikes,
            charity: this.charity,
            allergies: this.allergies,
            nsfw: this.nsfw,
        };

        const query = "INSERT INTO SecretSanta (`firstName`, `lastName`, `email`, `discord`, `address1`, `address2`, `state`, `zip`, `likes`, `dislikes`, `charity`, `allergies`, `nsfw`) VALUES (:firstName, :lastName, :email, :discord, :address1, :address2, :state, :zip, :likes, :dislikes, :charity, :allergies, :nsfw);";

        return await conn.execute(query, params);
    };
}

