import { createAppKit } from '@reown/appkit/vue'

import { wagmiAdapter, networks, projectId } from './index';




// export const appkit = createAppKit({
//   networks,
//   projectId,
//   metadata: {
//     name: 'Utribe Portal',
//     description: 'Utribe Portal DApp',
//     url: 'http://localhost:5173',
//     icons: []
//   },
//   features: { analytics: true },
//   themeMode: 'dark'
// })
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