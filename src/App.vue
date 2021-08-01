<script lang="tsx">
import { defineComponent } from 'vue'
import Header from '@/views/layout/Header.vue'

/**
 * This is how components look like
 * when "tsx" is used properly.
 * Components should be small and easy to understand,
 * extract as much as you can and group in folders.
 */
export default defineComponent({
  /**
   * `setup` method is part of the Vue 3 Composition API
   * https://v3.vuejs.org/api/composition-api.html
   */
  setup () {
    /**
     * The trick is that `setup` method, should return
     * an object which contains all exposed variables
     * that gets consumed inside the template.
     * But if you return a closure instead of an object
     * it gets treated like `render` method
     * which can easily consume JSX and render it properly.
     */
    return () => (
      /** `<></>` this syntax is to group JSX fragments. */
      <>
        <Header />
        <nav>
          {/**
            * Vue JSX is smart enough to understand
            * all Vue template specific components
            * and the ones that look like React.
            */}
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </nav>
        {/**
          * Next component to inspect
          * src/views/Home.vue
          */}
        <main>
          <router-view />
        </main>
      </>
    )
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 1em;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
