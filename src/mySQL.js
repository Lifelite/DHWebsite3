import { getDatabase, ref, set } from "firebase/database"
import { app } from "./firebase"

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
        this.db = getDatabase(app);
    };

    writeSantaData() {
           const formData = {
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

        return set(ref(this.db, 'santas/' + this.discord), formData);
    };
}

