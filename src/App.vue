<template>
    <router-view />
</template>

<script>
export default {
    name: "App"
}
</script>

<style lang="scss">
*{
    margin:0;
    padding:0;
    box-sizing:inherit;
}

html{
    box-sizing:border-box;
    font-size:62.5%;
}

button, 
select{
    cursor:pointer;
}
</style>