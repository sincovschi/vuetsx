<script lang="tsx">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  setup () {
    return () => (
      <div class="home">
        <HelloWorld msg="Welcome to Your Vue.tsx App" />
      </div>
    )
  }
})
</script>
