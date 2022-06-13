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
                :disabled="isFormProcessing"
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
                :disabled="isFormProcessing"
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
                @input="validatePassword"
                label="password" 
                type="password"
                :disabled="isFormProcessing"
                />
                <app-field-error 
                v-if="formFields.password.invalid"
                message="Password must be between 8 and 25 characters and contain at least one uppercase letter, one lowercase letter, and one number." 
                />
            </app-form-group>
             <app-form-group>
                <app-text-field 
                v-model="formFields.confirmPassword.value" 
                :is-invalid="formFields.confirmPassword.invalid"
                @input="validateConfirmPassword"
                label="confirm password" 
                type="password"
                :disabled="isFormProcessing"
                />
                <app-field-error 
                v-if="formFields.confirmPassword.invalid"
                message="Confirm password does not match." 
                />
            </app-form-group>
            <p class="already-msg">
                <span>Already have an account?</span> <a @click="goTo('/login')">Login Here</a>
            </p>
            <div class="mt-1">
                <app-action-button v-if="!isFormProcessing" @click="submit" text="Create Account" center />
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
import isEmail from "is-email";
import stringLength from "string-length";

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
            }, 
            isFormProcessing: false
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
                return false;
            }else{
                this.formFields.username.invalid = false;
                return true;
            }
        }, 
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
            const passwordRegs = {
                uppercase: /[A-Z]/, 
                lowercase: /[a-z]/, 
                numeric: /[0-9]/
            }

            if(
                !passwordRegs.uppercase.test(this.formFields.password.value) ||
                !passwordRegs.lowercase.test(this.formFields.password.value) ||
                !passwordRegs.numeric.test(this.formFields.password.value) ||
                stringLength(this.formFields.password.value) < 8 ||
                stringLength(this.formFields.password.value) > 25
            ){
                this.formFields.password.invalid = true;
                return false;
            }else{
                this.formFields.password.invalid = false;
                return true;
            }
        }, 
        validateConfirmPassword(){
            if(this.formFields.confirmPassword.value !== this.formFields.password.value){
                this.formFields.confirmPassword.invalid = true;
                return false;
            }else{
                this.formFields.confirmPassword.invalid = false;
                return true;
            }
        }, 
        submit(){
            if(
                [
                this.validateUserName(), 
                this.validateEmail(), 
                this.validatePassword(), 
                this.validateConfirmPassword()
                ].includes(false)
            ){
                console.log("Validation failed!");
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
</style>