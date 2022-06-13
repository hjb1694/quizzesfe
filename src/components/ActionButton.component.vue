<template>
    <button :class="['action-button', {center}]">{{ text }}</button>
</template>
<script>
export default {
    name: "ActionButton", 
    props: {
        text: {
            type: String, 
            required: true
        }, 
        center: {
            type: Boolean, 
            required: false, 
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
    .action-button{
        display:block;
        width:auto;
        border:none;
        padding:.6rem 1rem;
        border-radius:.5rem;
        color:#fff;
        background: rgb(26, 192, 129);
        font-family:inherit;
        font-size:1.8rem;
    }

    .action-button:active{
        box-shadow: 0 0 3px 3px rgb(109, 230, 183);
    }

    .center{
        margin:0 auto;
    }
</style>