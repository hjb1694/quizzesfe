<template>
    <div :class="['container', {isInvalid}]"> 
        <input 
        class="input"
        :type="type" 
        placeholder=" " 
        autocapitalize="off" 
        autocomplete="off"
        :value="modelValue"
        @input="onInput"
        :disabled="disabled"
        />
        <label class="label">{{ label }}</label>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String, 
            required: true
        }, 
        type: {
            type: String, 
            default: "text"
        }, 
        modelValue: {
            type: String
        }, 
        isInvalid: {
            type: Boolean, 
            required: false, 
            default: false
        }, 
        disabled: {
            type: Boolean, 
            required: false, 
            default: false
        }
    }, 
    methods: {
        onInput(event){

            this.$emit("update:modelValue", event.target.value);
            this.$emit("input");

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
        background:#fff;
    }

    .container:focus-within{
        border:1px solid rgb(52, 111, 199);
        box-shadow:0 0 2px 2px rgb(92, 148, 233);
    }

    .container.isInvalid{
        border:1px solid #f00;
        box-shadow:0 0 2px 2px rgb(243, 183, 183);
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
        color:#333;
        font-family:inherit;
    }

    .container.isInvalid > .input {
        color:#f00;
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
        font-family:inherit;
        color:#888;
    }

    .input:focus + .label, 
    .input:not(:placeholder-shown) + .label{
        transform:translateY(-2.25rem);
        font-size:1.25rem;
    }




</style>