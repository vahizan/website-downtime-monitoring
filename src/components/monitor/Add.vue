<template>
    <div id="add">
        <button id="add-button" v-on:click="clicked">
            Add Website
        </button>
        <div id="websites-added" v-if="counter > 0">
            Websites Being Tracked: {{watchCount}}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            counter: Number,
        },
        methods: {
            clicked() {
                return this.watchCount++;
            },
        },
        setup(props){
            console.log("props", props);
            return {
                watchCount: 0,
            }
        }
    };
</script>
