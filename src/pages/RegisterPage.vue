<template>
    <div class="register-page">
        <form class="register-form" @submit.prevent>
            <h1>Register</h1>
            <app-form-group>
                <app-text-field v-model="username" label="username" type="text"/>
            </app-form-group>
            <app-form-group>
                <app-text-field v-model="email" label="email" type="email"/>
            </app-form-group>
            <app-form-group>
                <app-text-field v-model="password" label="password" type="password"/>
            </app-form-group>
             <app-form-group>
                <app-text-field v-model="confirmPassword" label="confirm password" type="password"/>
            </app-form-group>
            <p class="already-msg">
                <span>Already have an account?</span> 
                Login Here
            </p>
            <div class="mt-1">
            <app-action-button text="Create Account" center/>
            </div>
        </form>
    </div>
</template>

<script>
import FormGroup from "@/components/FormGroup.component.vue";
import TextField from "@/components/TextField.component.vue";

export default {
    name: "RegisterPage", 
    components: {
        "app-form-group": FormGroup,
        "app-text-field": TextField
    },
    data(){
        return {
            formFields: {
                username: "",
                email: "",
                password: "", 
                confirmPassword: "",
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .register-page{
        background:linear-gradient(to bottom right, #373B44, #4286f4);
        height:100%;
    }

    h1{
        text-align:center;
        font-size:2.5rem;
        color:#fff;
    }

    .register-form{
        max-width:50rem;
        margin:auto;
        padding:1rem;
    }

    .already-msg{
        color:#fff;
        text-align:center;
        font-size:1.4rem;
    }
</style>