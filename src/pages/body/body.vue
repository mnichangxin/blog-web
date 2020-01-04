<template>
    <div class="body">
        <slot></slot>
        <Footer />
    </div>
</template>

<script>
    import Footer from '@pages/footer/Footer.vue'

    export default {
        name: 'Body',
        components: {
            Footer
        }
    }
</script>

<style>
    .body {
        position: relative;
    }
</style>
