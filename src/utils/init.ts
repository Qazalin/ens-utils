import "dotenv/config"
import Moralis from "moralis/node"

/* Moralis init code */
const serverUrl = process.env.MORALIS_SERVER_URL
const appId = process.env.MORALIS_APP_ID
const masterKey = process.env.MORALIS_MASTER_KEY

export async function initializeServer() {
    await Moralis.start({ serverUrl, appId, masterKey })
}
