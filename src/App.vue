<template>
  <div id="app">  
    <nav>
      <Header></Header>
    </nav>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import Header from './components/layout/Header.vue';
import { Provide } from 'vue-property-decorator';

@Component({
  components: { Header }
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
