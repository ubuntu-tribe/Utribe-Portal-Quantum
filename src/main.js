import "./assets/styles/main.css";

import Aura from "@primeuix/themes/aura";
import PrimeVue from "primevue/config";
import { createApp } from "vue";
import App from "./App.vue";

//Reown App Kit

import { appkit } from './config/appkit';
import { WagmiPlugin } from '@wagmi/vue';
import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query';
import { wagmiAdapter } from './config/appkit';


const queryClient = new QueryClient();
const app = createApp(App);

app.use(PrimeVue, {
	theme: {
		preset: Aura,
		options: {
			darkModeSelector: ".p-dark",
		},
	},
});


app.use(VueQueryPlugin, { queryClient });
app.use(appkit);
app.use(WagmiPlugin, { config: wagmiAdapter.wagmiConfig });

app.mount("#app");
