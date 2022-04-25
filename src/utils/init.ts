import { MorlisAPIOptions } from "../types"
import Moralis from "moralis/node"

export async function initializeServer(options: MorlisAPIOptions) {
    await Moralis.start(options)
}
