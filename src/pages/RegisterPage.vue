<template>
    <div class="register-page">
        <form class="register-form" @submit.prevent>
            <h1>Register</h1>
            <app-form-group>
                <app-text-field 
                v-model="formFields.username.value" 
                :is-invalid="formFields.username.invalid" 
                @input="validateUserName" 
                label="username" 
                type="text"
                />
                <app-field-error 
                v-if="formFields.username.invalid"
                message="Username must be between 6 and 15 characters, have at least 1 letter, and contain no spaces or special characters." 
                />
            </app-form-group>
            <app-form-group>
                <app-text-field 
                v-model="formFields.email.value" 
                :is-invalid="formFields.email.invalid"
                @input="validateEmail"
                label="email" 
                type="email"
                />
                <app-field-error 
                v-if="formFields.email.invalid"
                message="Please enter a valid email address." 
                />
            </app-form-group>
            <app-form-group>
                <app-text-field v-model="formFields.password.value" label="password" type="password"/>
            </app-form-group>
             <app-form-group>
                <app-text-field v-model="formFields.confirmPassword.value" label="confirm password" type="password"/>
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
import FieldError from "@/components/FieldError.component.vue";
import isEmail from "is-email";

export default {
    name: "RegisterPage", 
    components: {
        "app-form-group": FormGroup,
        "app-text-field": TextField, 
        "app-field-error": FieldError
    },
    data(){
        return {
            formFields: {
                username: {
                    value: "", 
                    invalid: false
                },
                email: {
                    value: "", 
                    invalid: false
                },
                password: {
                    value: "", 
                    invalid: false
                }, 
                confirmPassword: {
                    value: "", 
                    invalid: false
                },
            }
        }
    }, 
    methods: {
        validateUserName(){
            const userNameRegs = {
                alpha: /[A-Z]/i, 
                alphaNumeric: /^[A-Z0-9]{6,15}$/i
            }

            if(!userNameRegs.alpha.test(this.formFields.username.value) || !userNameRegs.alphaNumeric.test(this.formFields.username.value)){
                this.formFields.username.invalid = true;
            }else{
                this.formFields.username.invalid = false;
            }
        }, 
        validateEmail(){
            if(!isEmail(this.formFields.email.value)){
                this.formFields.email.invalid = true;
            }else{
                this.formFields.email.invalid = false;
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