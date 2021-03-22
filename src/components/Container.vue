<template>
  <div class="Container">
    <div>
      <h1>{{ msg }}</h1>
      <Add v-bind:counter="0"/>
      <Graph/>
    </div>
  </div>
</template>

<script>
  import Add from "@/components/monitor/Add";
  import Graph from "@/components/graph/Graph";

  export default {
    name: 'Container',
    props: {
      msg: String,
    },
    components: {
      Add,
      Graph
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

</style>
