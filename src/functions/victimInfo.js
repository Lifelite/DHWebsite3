
export class VictimSSInfo {
    constructor(data) {
        this.victimInfo = data["rows"][0];
        this.discord = this.victimInfo["discord"];
        this.firstName = this.victimInfo["firstName"];
        this.lastName = this.victimInfo["lastName"];
        this.email = this.victimInfo["email"];
        this.address1 = this.victimInfo["address1"];
        this.address2 = this.victimInfo["address2"];
        this.city = this.victimInfo["city"]
        this.state = this.victimInfo["state"];
        this.zip = this.victimInfo["zip"];
        this.likes = this.victimInfo["likes"];
        this.dislikes = this.victimInfo["dislikes"];
        this.allergies = this.victimInfo["allergies"];
        this.nsfw = this.victimInfo["nsfw"];
        this.irl = this.victimInfo["irl"]
        this.sent = this.victimInfo["sent"]
        this.received = this.victimInfo["received"]
    }

    getInfo() {
        return {
            discord: this.discord,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            address1: this.address1,
            address2: this.address2,
            city: this.city,
            state: this.state,
            zip: this.zip,
            likes: this.likes,
            dislikes: this.dislikes,
            allergies: this.allergies,
            nsfw: this.nsfw,
            irl: this.irl,
            sent: this.sent,
            received: this.received
        }
    }
}