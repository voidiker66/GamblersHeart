<template>
    <div class="relative bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 z-20">
        <button type="button" @click="verifySelect" class="cursor-pointer inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">{{ buttonText }}</button>
    </div>
</template>
<script>
export default {
    props: {
    },
    data() {
        return {
            buttonText: 'Choose'
        }
    },
    methods: {
        verifySelect() {
            this.$emit('card-select-alert')
            if (confirm("Choose this card?")) {
                return this.$emit('card-selected')
            } else {
                return this.$emit('card-canceled')
            }
        }
    },
    computed: {
    },
    created() {
    },
    mounted() {
    },
    beforeDestroy() {

    },
    components: {
    }
}
</script>