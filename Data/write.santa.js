import {Client} from '@planetscale/database'

export const config = {
    runtime: 'experimental-edge'
}

const db = new Client({
    url: process.env['DATABASE_URL']
})

export default async function handler(Request) {
    const conn = db.connection()

    const r = Request.body

    const firstName  = r.firstName
    const lastName = r.lastName
    const email = r.email
    const discord = r.discord
    const address1 = r.address1
    const address2 = r.address2
    const city = r.city
    const state = r.state
    const zip = r.zip
    const likes = r.likes
    const dislikes = r.dislikes
    const charity = r.charity
    const allergies = r.allergies
    const nsfw = r.nsfw
    const irl = r.irl
    const backup = r.backup

    const writeSantaData = await Promise.all(

        conn.execute(
            'INSERT INTO SecretSanta (`firstName`, `lastName`, `email`, `discord`, `address1`, `address2`, `city`, `state`, `zip`, `likes`, `dislikes`, `charity`, `allergies`, `nsfw`, `irl`, `backup`) VALUES (:firstName, :lastName, :email, :discord, :address1, :address2, :city, :state, :zip, :likes, :dislikes, :charity, :allergies, :nsfw, :irl, :backup);',
            [firstName, lastName, email, discord, address1, address2, city, state, zip, likes, dislikes, charity, allergies, nsfw, irl, backup]
        )

    )

    const data = { data: writeSantaData.rows }
    const json = JSON.stringify(data)

    return new Response(json, {
        code:201,
        headers: {
            'content-type': 'application/json;charset=UTF-8',
            'access-control-allow-origin': '*'
        }
    })
}