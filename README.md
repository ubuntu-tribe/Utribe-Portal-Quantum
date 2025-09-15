
# Vite + TailwindCSS v4 + PrimeVue + Reown + Wagmi Example

## Stack Overview

- **Vite**: Fast frontend build tool for modern web projects.
- **Vue 3**: Progressive JavaScript framework for building user interfaces.
- **TailwindCSS v4**: Utility-first CSS framework for rapid UI development.
- **PrimeVue**: Rich set of UI components for Vue.js.
- **@wagmi/vue**: Vue integration for wagmi, a collection of React/Vue hooks for Ethereum.
- **@reown/appkit**: Web3 authentication and wallet management toolkit.
- **@reown/appkit-adapter-wagmi**: Adapter to connect Reown AppKit with wagmi and EVM wallets.
- **@tanstack/vue-query**: Data fetching and caching for Vue (required by wagmi).

## Integration Points

### 1. Configuration (src/config/appkit.ts)
All configuration for networks, projectId, wagmiAdapter, and AppKit is centralized in `src/config/appkit.ts`:
- Defines supported EVM networks (mainnet, arbitrum, base, polygon).
- Sets up the wagmi adapter with networks and projectId.
- Exports a configured AppKit instance for use in the app.

### 2. App Initialization (src/main.js)
- Registers the Vue Query plugin (required for wagmi hooks).
- Registers the AppKit and Wagmi plugins with the Vue app.
- Example:
	```js
	import { appkit, wagmiAdapter } from './config/appkit';
	import { WagmiPlugin } from '@wagmi/vue';
	import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query';
	// ...
	app.use(VueQueryPlugin, { queryClient });
	app.use(appkit);
	app.use(WagmiPlugin, { config: wagmiAdapter.wagmiConfig });
	```

### 3. Usage in Components
- Use wagmi hooks (e.g., `useConnect`, `useAccount`) for wallet connection and state.
- Use Reown AppKit composables and UI for authentication and wallet management.
- Example integration in `App.vue` and `ActionButton.vue`:
	- Connect wallet, sign messages, send transactions, switch networks, and open Reown modal.

## Quantum-Proof MCP Key Generation
This project is prepared for integration with quantum-proof Model Context Protocol (MCP) key generation. Developers can:
- Extend the authentication flow using Reown and wagmi.
- Add custom logic for quantum-resistant key management in the authentication or wallet connection process.
- Use the centralized config in `appkit.ts` to add new networks or adapters as needed.

## Getting Started
1. Install dependencies:
	 ```sh
	 npm install
	 ```
2. Set your `VITE_PROJECT_ID` in a `.env` file (or use the default public one for localhost).
3. Run the development server:
	 ```sh
	 npm run dev
	 ```
4. Open the app and use the Reown and Wagmi wallet connect features.

## File Structure
- `src/config/appkit.ts` — All Web3, network, and authentication config
- `src/App.vue` — Main app, shows wallet connect and Reown integration
- `src/components/ActionButton.vue` — Example of advanced wallet actions

---
For questions or contributions, please refer to the code comments or contact the maintainers.


