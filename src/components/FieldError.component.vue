<template>
    <p class="field-error">
        {{ message }}
    </p>
</template>

<script>
export default {
    name: "FieldError", 
    props: {
        message: {
            type: String, 
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .field-error{
        border:1px solid #f00;
        border-radius:.5rem;
        background:rgb(243, 196, 196);
        font-size:1.4rem;
        color:#f00;
        margin-top:1rem;
        padding:.5rem;
    }
</style>