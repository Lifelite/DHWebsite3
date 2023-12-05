import {connect} from "@planetscale/database";


const config = {
    //url: process.env.DATABASE_URL,
    host: import.meta.env.VITE_PS_HOST,
    username: import.meta.env.VITE_PS_USERNAME,
    password: import.meta.env.VITE_PS_PASSWORD,
    database: import.meta.env.VITE_PS_DATABASE,
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
        this.city = data.get('city');
        this.state = data.get('state');
        this.zip = data.get('zip');
        this.likes = data.get('likes');
        this.dislikes = data.get('dislikes');
        this.charity = data.get('charity');
        this.allergies = data.get('allergy-text');
        this.nsfw = data.get('nsfw');
        this.irl = data.get('irl');
        this.backup = data.get('backup');
    };


    async writeSantaData() {
        const params = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            discord: this.discord,
            address1: this.address1,
            address2: this.address2,
            city: this.city,
            state: this.state,
            zip: this.zip,
            likes: this.likes,
            dislikes: this.dislikes,
            charity: this.charity,
            allergies: this.allergies,
            nsfw: this.nsfw,
            irl: this.irl,
            backup: this.backup,
        };

        //const dhUrl = 'https://drunkenhuntsman.com/api/write.santa'
        const query = "INSERT INTO SecretSanta (`firstName`, `lastName`, `email`, `discord`, `address1`, `address2`, `city`, `state`, `zip`, `likes`, `dislikes`, `charity`, `allergies`, `nsfw`, `irl`, `backup`) VALUES (:firstName, :lastName, :email, :discord, :address1, :address2, :city, :state, :zip, :likes, :dislikes, :charity, :allergies, :nsfw, :irl, :backup);";
        return await conn.execute(query, params);


    };

    async editSantaData(id, user) {
        const params = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            discord: this.discord,
            address1: this.address1,
            address2: this.address2,
            city: this.city,
            state: this.state,
            zip: this.zip,
            likes: this.likes,
            dislikes: this.dislikes,
            charity: this.charity,
            allergies: this.allergies,
            nsfw: this.nsfw,
            irl: this.irl,
            backup: this.backup,
            userName: user
        };

        switch (id) {
            case "name": {
                const query = "UPDATE SecretSanta SET `firstName` = :firstName, `lastName` = :lastName WHERE `userName` = :userName;";
                return await conn.execute(query, params);
            }
            case "email": {
                const query = "UPDATE SecretSanta SET `email` = :email WHERE `userName` = :userName;";
                return await conn.execute(query, params);
            }
            case "address": {
                const query = "UPDATE SecretSanta SET `address1` = :address1, `address2` = :address2, `city` = :city, `state` = :state, `zip` = :zip WHERE `userName` = :userName;";
                return await conn.execute(query, params);
            }
            case "discord": {
                const query = "UPDATE SecretSanta SET `discord` = :discord WHERE `userName` = :userName"
                return await conn.execute(query, params);
            }
            case "likes": {
                const query = "UPDATE SecretSanta SET `likes` = :likes WHERE `userName` = :userName;";
                return await conn.execute(query, params);
            }
            case "dislikes": {
                const query = "UPDATE SecretSanta SET `dislikes` = :dislikes WHERE `userName` = :userName;";
                return await conn.execute(query, params);
            }
            case "charity": {
                const query = "UPDATE SecretSanta SET `charity` = :charity WHERE `userName` = :userName";
                return await conn.execute(query, params);
            }
            case "allergies": {
                const query = "UPDATE SecretSanta SET `allergies` = :allergies WHERE `userName` = :userName;";
                return await conn.execute(query, params);
            }
            case "gift": {
                const query = "UPDATE SecretSanta SET `nsfw` = :nsfw, `irl` = :irl, `backup` = :backup WHERE `userName` = :userName;";
                return await conn.execute(query, params);
            }
        }
    }
}

export class LogisticConfirm {
    constructor(user) {
        this.user = user
    }



    async shipped () {
        const params = {
            user: this.user
        }
        const query = "UPDATE SecretSanta SET sent = true WHERE `userName` = :user;";
        return await conn.execute(query, params);
    }

}



export class SantaInfo {
    constructor(user, email) {
        this.email = email
        this.user = user
        this.ss = null
    }

    async associateUserName () {
        const query = "UPDATE SecretSanta SET userName = '" + this.user + "' WHERE email = '" + this.email + "';"

        return await conn.execute(query);
    }

    async getSantaData() {
        const query = "SELECT * FROM SecretSanta WHERE email = '" + this.email + "';";
        return await conn.execute(query);
    }

    async getVictimData() {
        const query = "SELECT firstName, lastName, discord, address1, address2, state, city, zip, likes, dislikes, allergies, nsfw, backup, received FROM SecretSanta WHERE userName = '" + this.user + "';";
        return await conn.execute(query);
    }







}