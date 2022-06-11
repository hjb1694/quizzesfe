<template>
    <form @submit.prevent>
        <app-form-group>
            <app-text-field label="username" />
        </app-form-group>

    </form>
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
                age: "",
                experienceLevel: ""
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>