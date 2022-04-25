import { ENSMetadata } from "./types"
import { getNFTBalance } from "./NFTBalance"

getNFTBalance("0x20a6F27E11EdC08D32C21454b4625EECfB22Bb21").then((r) => {
    const ensNames = r.result.find(
        (items) => items.name === "Ethereum Name Service"
    )
    const metadata: ENSMetadata = JSON.parse(ensNames.metadata)
    console.log(metadata.name)
})
