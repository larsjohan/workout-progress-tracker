<template>
  <div id="app">  
    <aside>
      <Navbar></Navbar>
    </aside>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import Navbar from './components/layout/Navbar.vue';
import { Provide } from 'vue-property-decorator';

@Component({
  components: { Navbar }
})
export default class App extends Vue {

  public constructor() {
    super();
  }

}
</script>


<style lang="scss">
  @import "assets/scss/styles";
</style>
