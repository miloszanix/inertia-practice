<script setup>

import Pagination from "@/Components/Pagination.vue";
import { ref, watch } from "vue";
import { router } from '@inertiajs/vue3';
import throttle from 'lodash/throttle';

let props = defineProps({
    users: Object,
    filters: Object
});

let search = ref(props.filters.search);

watch(search, throttle(value => {
    router.get('/users', { search: value }, {
        preserveState: true,
        replace: true
    });
}, 500));

</script>

<script>
import Layout from '@/Layouts/Layout.vue'

export default {
    layout: Layout
}
</script>

<template>
    <Head title="Users" />

    <div class="flex justify-between mb-6">
        <div class="flex items-center">
            <h1 class="text-2xl">Users</h1>
            <Link class="ml-2 text-blue-300 text-xl" href="/users/create">New user</Link>
        </div>
        <input v-model="search" type="text" placeholder="Search..." class="border px-2 rounded-lg">
    </div>

    <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr v-for="user in users.data" :key="user.id">
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div>
                                            <div class="text-sm font-medium text-gray-900">
                                                {{ user.name }}
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <Link :href="`/users/${user.id}/edit`" class="text-indigo-600 hover:text-indigo-900">
                                    Edit
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>

    <Pagination :links="users.links" />
</template>
