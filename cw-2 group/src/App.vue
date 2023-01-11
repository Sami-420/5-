<script>
import ProductList from "./components/Lessons.vue";

export default {
  name: 'App',
  data() {
    return {
      sitename: "Vue.js Lessons",
      cart: []
    }
  },
  methods: {

  },
  components: {
    ProductList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
