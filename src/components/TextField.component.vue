<template>
    <div class="container"> 
        <input class="input" type="text" placeholder=" "/>
        <label class="label">{{ label }}</label>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String, 
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .container{
        height:2.5rem;
        border:1px solid #ccc;
        border-radius:.5rem;
    }


</style>