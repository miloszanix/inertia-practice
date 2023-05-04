<script setup>

defineProps({
    href: String,
    active: Boolean,
});

</script>

<template>
    <Link :href="href" class="text-black hover:underline" :class="{'font-bold underline': active}">
        <slot />
    </Link>
</template>