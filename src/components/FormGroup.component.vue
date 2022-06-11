<template>
    <div class="form-group">
        <slot name="default">Form Group</slot>
    </div>
</template>

<script>
export default {
    name: "FormGroup"
}
</script>

<style lang="scss" scoped>
    .form-group{
        margin:1rem 0;
    }
</style>