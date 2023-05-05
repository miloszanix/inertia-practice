import "../css/app.css";

import { createApp, h } from "vue";
import { Link, createInertiaApp } from "@inertiajs/vue3";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { Head } from '@inertiajs/vue3';

createInertiaApp({
    title: (title) => `My App - ${title}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .component("Link", Link)
            .component("Head", Head)
            .mount(el);
    },
    progress: {
        color: "red",
    },
});
