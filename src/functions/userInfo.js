
export class UserSSInfo {
    constructor(data) {
        this.userInfo = data["rows"][0];
        this.discord = this.userInfo["discord"];
        this.firstName = this.userInfo["firstName"];
        this.lastName = this.userInfo["lastName"];
        this.email = this.userInfo["email"];
        this.address1 = this.userInfo["address1"];
        this.address2 = this.userInfo["address2"];
        this.state = this.userInfo["state"];
        this.zip = this.userInfo["zip"];
        this.likes = this.userInfo["likes"];
        this.dislikes = this.userInfo["dislikes"];
        this.allergies = this.userInfo["allergies"];
        this.charity = this.userInfo["charity"];
        this.nsfw = this.userInfo["nsfw"];
        this.victimName = this.userInfo["victimName"];
    }

    checkForAccount() {
        return (this.firstName) ? this.firstName : null
    }

    getInfo() {
        return [

        this.discord,
        this.firstName,
        this.lastName,
        this.email,
        this.address1,
        this.address2,
        this.state,
        this.zip,
        this.likes,
        this.dislikes,
        this.allergies,
        this.charity,
        this.nsfw,
        this.victimName
        ]
    }
}