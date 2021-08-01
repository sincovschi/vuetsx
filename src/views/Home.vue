<script lang="tsx">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent({
  /**
    * Usually, imported components needs to be declared
    * but JSX is smart enough to understand and render
    * components based on a standard naming convention.
    */
  setup () {
    /**
     * Because inside `setup` is no `this`
     * to get access to store or router,
     * we use Hooks, just like in React.
     */
    const store = useStore()
    const router = useRouter()

    const message = store.getters.getMessage

    return () => (
      <div class="home">
        {/** This is how a variable is passed to a component. */}
        <HelloWorld msg={message} />
        {/** Click on the button inside browser
           * and go to next component
           * src/views/About.vue
           */}
        <button onClick={() => {
          store.dispatch({
            type: 'setMessage',
            payload: 'VScode 💖 Vue.tsx'
          })
          router.push('/about')
        }}>Click Me!</button>
      </div>
    )
  }
})
</script>
