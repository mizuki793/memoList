<template>
    <div id="Nopage">
        <h1>Not Found-404-</h1>
        <p>存在しないurlです</p>
        <router-link :to="{ name: 'top'}"> TOPに行く</router-link>
    </div>
</template>

<script>
export default {
    name:"Nopage"
};
</script>