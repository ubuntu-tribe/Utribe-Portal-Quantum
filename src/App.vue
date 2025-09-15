
<script setup>
import AppFooter from "./components/AppFooter.vue";
import AppTopbar from "./components/AppTopbar.vue";
import { ref } from 'vue';
import { useConnect, useAccount } from '@wagmi/vue';
import { useAppKit, createAppKit } from '@reown/appkit/vue';
import { wagmiAdapter, networks, projectId } from './config/appkit';
import ActionButtonList from "./components/ActionButton.vue";
import InfoList from "./components/InfoList.vue";

// Initialize AppKit
const appkit = createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  themeMode: 'light',
  features: {
    connectMethodsOrder: ['email', 'social', 'wallet'],
    analytics: true,
  },
  metadata: {
    name: 'AppKit Vue Example',
    description: 'AppKit Vue Example',
    url: 'https://reown.com/appkit',
    icons: ['https://avatars.githubusercontent.com/u/179229932?s=200&v=4']
  },
  themeVariables: {
    '--w3m-accent': '#000000',
  }
});

const { connect, connectors, error, isLoading, pendingConnector } = useConnect();
const { address, isConnected } = useAccount();

function handleReownConnect() {
  if (connectors.value.length > 0) {
    connect({ connector: connectors.value[0] });
  }
}
</script>

<template>
    <div class="bg-surface-50 dark:bg-surface-950 min-h-screen p-8 flex flex-col gap-6">
        <AppTopbar />
        <div class="flex flex-col w-full max-w-7xl mx-auto gap-6 flex-1">
            <ReownProvider>
                <div class="flex flex-col items-start gap-4">
                    <h1>AppKit wagmi vue Example</h1>
                    <br></br>

                    <div v-if="isConnected" class="text-green-700">Connected: {{ address }}</div>
                    <div v-if="error" class="text-red-600">{{ error.message }}</div>

                    

                    <appkit-button />
                    <ActionButtonList />
                    <div className="advice">
                        <p>
                        This projectId only works on localhost. <br/>
                        Go to <a href="https://dashboard.reown.com" target="_blank" className="link-button" rel="Reown Dashboard">Reown Dashboard</a> to get your own.
                        </p>
                    </div>
                    <InfoList />

                </div>
            </ReownProvider>
        </div>
        <AppFooter />
    </div>
</template>
