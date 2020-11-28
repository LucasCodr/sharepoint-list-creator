import { NodeFetchClient } from "@pnp/nodejs-commonjs";
import { sp, SPRest } from "@pnp/sp-commonjs"
import "@pnp/sp-commonjs/site-users/web";
import "@pnp/sp-commonjs/webs";

import * as spauth from 'node-sp-auth';

export default class Connection {

    username: string
    password: string
    siteUrl: string
    spRest: SPRest

    constructor(username: string, password: string, siteUrl: string) {

        this.username = username
        this.password = password
        this.siteUrl = siteUrl
        this.spRest = sp
    }

    async getConnetion() {
        const auth = await spauth.getAuth(this.siteUrl, { username: this.username, password: this.password })

        this.spRest.setup({
            sp: {
                baseUrl: this.siteUrl,
                headers: auth.headers,
                fetchClientFactory: () => new NodeFetchClient(),
            }
        })
    }
}
