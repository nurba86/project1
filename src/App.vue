<template>
  <v-app>
    <v-content>
      <Card />
    </v-content>
  </v-app>
</template>

<script>
import Card from "./components/Card";

export default {
  name: "App",

  components: {
    Card
  },

  data: () => ({}),
  methods: {}
};
</script>
