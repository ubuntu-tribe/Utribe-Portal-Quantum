import { createAppKit } from '@reown/appkit/vue';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { mainnet, polygon, base, arbitrum, type AppKitNetwork } from '@reown/appkit/networks';

// Central config for all network/projectId/wagmiAdapter/appkit exports
export const projectId = import.meta.env.VITE_PROJECT_ID || "b56e18d47c72ab683b10814fe9495694"; // this is a public projectId only to use on localhost
if (!projectId) {
  throw new Error('VITE_PROJECT_ID is not set');
}

export const networks: [AppKitNetwork, ...AppKitNetwork[]] = [mainnet, arbitrum, base, polygon];

export const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId
});

export const metadata = {
  name: 'Utribe Portal',
  description: 'Utribe Portal DApp',
  url: 'http://localhost:5173',
  icons: []
};

export const appkit = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks,
  metadata,
  features: {
    email: true, // default to true
    socials: [
      "google",
      "apple"
    ],
    emailShowWallets: true, // default to true
  },
  allWallets: "SHOW", // default to SHOW
});