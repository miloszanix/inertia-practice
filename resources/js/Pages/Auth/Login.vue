<script setup>
import { useForm } from '@inertiajs/vue3';

let form = useForm({
    email: '',
    password: '',
});

</script>

<template>
    <main class="grid place-items-center min-h-screen">
        <Head title="Login" />
        <section class="bg-white p-8 rounded-xl max-w-md mx-auto mt-7 border">
            <h1 class="text-3xl mb-6">Login</h1>
            <form @submit.prevent="form.post('/login')">
                <div class="mb-6">
                    <label for="email" class="block mb-2 uppercase font-bold text-xs text-gray-700">Email</label>
                    <input v-model="form.email" class="border p-2 w-full rounded" type="email" name="email"
                        id="email" required />
                    <div v-if="form.errors.email" class="text-red-500 text-xs">{{ form.errors.email }}</div>
                </div>
                <div class="mb-6">
                    <label for="password" class="block mb-2 uppercase font-bold text-xs text-gray-700">Password</label>
                    <input v-model="form.password" class="border p-2 w-full rounded" type="password" name="password"
                        id="password" required />
                    <div v-if="form.errors.password" class="text-red-500 text-xs">{{ form.errors.password }}</div>
                </div>
                <div class="mb-6">
                    <button type="submit" :disabled="form.processing"
                        class="bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500">Log In</button>
                </div>
            </form>
        </section>
    </main>
</template>