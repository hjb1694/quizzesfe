<template>
    <div class="login-page">
        <form class="login-form" @submit.prevent>
            <h1>Login</h1>
            <app-form-group>
                <app-text-field 
                v-model="formFields.email.value" 
                :is-invalid="formFields.email.invalid" 
                label="email" 
                type="email" 
                />
                <app-field-error
                v-if="formFields.email.invalid"
                message="Please enter a valid email address."
                />
            </app-form-group>
            <app-form-group>
                <app-text-field 
                v-model="formFields.password.value" 
                :is-invalid="formFields.password.invalid" 
                label="password" 
                type="password" 
                />
                 <app-field-error
                v-if="formFields.password.invalid"
                message="Please enter a password."
                />
            </app-form-group>
            <p class="dont-have-msg"> 
                <span>Don't have an account?</span>
                <a>
                    Click Here
                </a>
            </p>
            <p class="forgot-pass-msg"> 
                <span>Forgot Password?</span>
                <a >
                    Click Here
                </a>
            </p>
            <div class="mt-1">
                <app-action-button v-if="!isFormProcessing" @click="submit" text="Login" center />
                <div v-else class="processing">
                    <img class="spinner" src="@/assets/double-ring-spinner.gif" alt="Processing..." />
                    <span class="processing__text">Processing</span>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import FormGroup from "@/components/FormGroup.component.vue";
import TextField from "@/components/TextField.component.vue";
import FieldError from "@/components/FieldError.component.vue";
import stringLength from "string-length";
import isEmail from "is-email";

export default {
    name: "LoginPage", 
    components: {
        "app-form-group": FormGroup,
        "app-text-field": TextField, 
        "app-field-error": FieldError
    }, 
    data(){
        return {
            formFields: {
                email: {
                    value: "",
                    invalid: false
                }, 
                password:  {
                    value: "", 
                    invalid: false
                }
            }, 
            isFormProcessing: false
        }
    }, 
    methods: {
        validateEmail(){
            if(!isEmail(this.formFields.email.value)){
                this.formFields.email.invalid = true;
                return false;
            }else{
                this.formFields.email.invalid = false;
                return true;
            }
        }, 
        validatePassword(){
            if(stringLength(this.formFields.password.value) === 0){
                this.formFields.password.invalid = true;
                return false;
            }else{
                this.formFields.password.invalid = false;
                return true;
            }
        }, 
        submit(){
            if(
                [this.validateEmail(), this.validatePassword()].includes(false)
            ){
                return;
            }

            this.isFormProcessing = true;
        }, 
        goTo(location){
            this.$router.push(location);
        }
    }
}
</script>

<style lang="scss" scoped>
    .login-page{
        background:linear-gradient(to bottom right, #373B44, #4286f4);
        height:100%;
    }

    h1{
        text-align:center;
        font-size:2.5rem;
        color:#fff;
    }

    .login-form{
        max-width:50rem;
        margin:auto;
        padding:1rem;
    }

    .spinner{
        width:4rem;
        display:block;
    }

    .processing{
        display:flex;
        align-items:center;
        justify-content: center;
        width:20rem;
        margin:1rem auto;

        &__text{
            color:#fff;
            font-size:2rem;
        }
    }

    .dont-have-msg, 
    .forgot-pass-msg{
        color:#fff;
        text-align:center;
        font-size:1.4rem;
    }
</style>