// Why: centralize chain selection for easy toggles
import type { AppKitNetwork } from '@reown/appkit/networks'
import { mainnet, arbitrum, base, polygon } from '@reown/appkit/networks'


export const networks: [AppKitNetwork, ...AppKitNetwork[]] = [
mainnet,
arbitrum,
base,
polygon
]