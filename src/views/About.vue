<script lang="tsx">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import BeautifyMessage from '@/components/BeautifyMessage.vue'

export default defineComponent({
  setup () {
    /**
     * Same Hooks pattern, can be used to group and reuse logics
     * that are the same in many components inside the project.
     */
    const store = useStore()

    const message = store.getters.getMessage

    /**
     * The list bellow, acually is a list of JSX anvantages.
     */
    const listOfJsxAdvantages = [
      'Clear connection between script and template.',
      'IDE support out of the box for types and linting.',
      'Clear and semantically correct Conditionals and Loops.',
      '', // due to js `if` inside JSX, this will be skipped.
      'Very easy to learn on the fly without documentation.'
    ]

    return () => (
      <div class="about">
        <h1>About JSX advantages <br /> over traditional {'<template>'}</h1>
        <ul>
          {
            /**
             * Here is a loop with a conditional
             * that is clearly defined with vanilla js.
             * JSX is separated and passed only the data that is needed.
             */
            listOfJsxAdvantages.map(adv => adv && (
              <li>{adv}</li>
            ))
          }
        </ul>
        {/**
           * To use slots inside Vue JSX we can pass them
           * as usually in Vue template, the same goes for named slots.
           * But to render them its a bit tricky,
           * so follow toward next component
           * src/components/BeautifyMessage.vue
           */}
        <BeautifyMessage>
          {message}
        </BeautifyMessage>
      </div>
    )
  }
})
</script>

<style scoped>
ul {
  max-width: 25em;
  margin: auto auto 1em;
  text-align: left;
}
</style>
