<script lang="tsx">
import { defineComponent } from 'vue'

export default defineComponent({
  setup (_, ctx) {
    /**
     * This is like High Order Component.
     * Together with JSX it is very simple to create HOC
     * like in React, feed component to a function
     * and get back an improved version of itself.
     */
    return () => {
      return (
        <pre>
          {
            /**
             * Because JSX slots are function components
             * they need to be invoked to be rendered.
             * The same is if there were multiple named slots.
             */
            ctx.slots.default?.()
          }
        </pre>
      )
    }
  }
})
</script>

<style scoped>
/**
  * Love the way Vue out of the box have these CSS in JS.
  * Thanks for your time, hope I have been of some help.
  * Now I suggest to roam through the code
  * and do some test or experiments.
  * Best withes, Eugene.
  * https://dev.to/sincovschi
  */

pre {
  max-width: 25em;
  padding: 1em;
  margin: auto;
  border-radius: .5em;
  border: 1px solid blue;
  background-color: cadetblue;
  color: white;
}
</style>
