import { ENSMetadata } from "./types"
import { getNFTBalance } from "./NFTBalance"

export async function getEns(address: string) {
    const allNFTs = await getNFTBalance(address)
    // You can use find to get the first match, or filter to get all of the ens names
    const ensNames = allNFTs.result.filter(
        (items) => items.name === "Ethereum Name Service"
    )

    const metadata: string[] = []
    ensNames.map((e) => {
        const ensData: ENSMetadata = JSON.parse(e.metadata)
        metadata.push(ensData.name)
    })
    return metadata
}
