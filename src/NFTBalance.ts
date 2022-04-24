import Moralis from 'moralis/node'
import { initializeServer } from './utils'

export async function getNFTBalance(userAddress: string) {
    await initializeServer()
    const NFTs = await Moralis.Web3API.account.getNFTs({ address: userAddress })
    return NFTs
}
