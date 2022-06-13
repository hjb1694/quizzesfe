<template>
    <div class="app">
        <router-view />
    </div>
</template>

<script>
export default {
    name: "App"
}
</script>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:inherit;
}

html{
    box-sizing:border-box;
    font-size:62.5%;
    height:100%;
}

body{
    font-family: 'M PLUS Rounded 1c', sans-serif;
    height:100%;
}

#app, 
.app{
    height:100%;
}

button, 
select, 
a{
    cursor:pointer;
}

.mt-1{
    margin-top:1rem;
}

.mb-1{
    margin-bottom:1rem;
}
</style>