import Moralis from "moralis/node"

export async function getNFTBalance(userAddress: string) {
    const NFTs = await Moralis.Web3API.account.getNFTs({ address: userAddress })
    return NFTs
}
