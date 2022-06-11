<template>
    <div class="container"> 
        <input class="input" type="text" placeholder=" " autocapitalize="off" autocomplete="off"/>
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
        height:4.5rem;
        border:1px solid #ccc;
        border-radius:.5rem;
        position:relative;
    }

    .input{
        position:absolute;
        left:0;
        bottom:0;
        width:100%;
        height:3rem;
        border-radius:.5rem;
        border:none;
        outline:none;
        padding:0 3px;
        font-size:2rem;
        color:#555;
    }

    .label{
        position:absolute;
        bottom:3px;
        left:3px;
        font-size:2rem;
        z-index:2;
        pointer-events: none;
        text-transform:capitalize;
        transition:all .3s;
    }

    .input:focus + .label, 
    .input:not(:placeholder-shown) + .label{
        transform:translateY(-2.25rem);
        font-size:1.25rem;
    }




</style>