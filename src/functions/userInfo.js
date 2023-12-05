
export class UserSSInfo {
    constructor(data) {
        this.allUsers = data
        this.userInfo = data["rows"][0];
        this.discord = this.userInfo["discord"];
        this.firstName = this.userInfo["firstName"];
        this.lastName = this.userInfo["lastName"];
        this.email = this.userInfo["email"];
        this.address1 = this.userInfo["address1"];
        this.address2 = this.userInfo["address2"];
        this.city = this.userInfo["city"]
        this.state = this.userInfo["state"];
        this.zip = this.userInfo["zip"];
        this.likes = this.userInfo["likes"];
        this.dislikes = this.userInfo["dislikes"];
        this.allergies = this.userInfo["allergies"];
        this.charity = this.userInfo["charity"];
        this.nsfw = this.userInfo["nsfw"];
        this.victimName = this.userInfo["victimName"];
        this.irl = this.userInfo["irl"];
        this.backup = this.userInfo["backup"];
        this.id = this.userInfo["userName"];
        this.sent = this.userInfo["sent"];
        this.received = this.userInfo["received"]
    }

    checkForAccount() {
        return (this.id) ? this.id : null
    }

    checkForAccountToLink() {
        return (this.firstName) ? this.firstName : null
    }

    getAllInfo() {
        return this.allUsers
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
            charity: this.charity,
            nsfw: this.nsfw,
            victimName: this.victimName,
            irl: this.irl,
            backup: this.backup,
            userName: this.id,
            sent: this.sent,
            received: this.received
        }
    }
}