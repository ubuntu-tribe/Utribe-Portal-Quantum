import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { mainnet, polygon, base, arbitrum, type AppKitNetwork } from '@reown/appkit/networks';

// Central config for all network/projectId/wagmiAdapter exports
export const projectId = import.meta.env.VITE_PROJECT_ID || "b56e18d47c72ab683b10814fe9495694"; // this is a public projectId only to use on localhost
if (!projectId) {
  throw new Error('VITE_PROJECT_ID is not set');
}

export const networks: [AppKitNetwork, ...AppKitNetwork[]] = [mainnet, arbitrum, base, polygon];

export const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId
});