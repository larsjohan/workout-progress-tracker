<template>
  <div id="app">  
    <!--<nav>
      <Header></Header>
    </nav>-->
    <router-view/>
    <div>
      <input placeholder="ID" v-model="id"/>    
      <input placeholder="Value" v-model="val"/>
    </div>
    <div>
      <button @click="add" type="button">Add test-entity</button>
      <button @click="update" type="button">Update test-entity</button>
      <button @click="get" type="button">Get All test-entity</button>
      <button @click="remove" type="button">Delete test-entity</button>
    </div>
    <div>
      <ul>
          <li v-for="i of tests" :key="i._id"> {{ i._id }} -- {{ i.field }} -- {{ i.createdDate.toLocaleString() }} -- {{ i.updatedDate.toLocaleString() }} </li>
      </ul>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import Header from './components/layout/Header.vue';
import TestEntity from './models/TestEntity';
import { Provide } from 'vue-property-decorator';

@Component({
  components: { Header }
})
export default class App extends Vue {

  private id: string = '';
  private val: string = 'asasas';

  private tests: Array<TestEntity> = [];

  public constructor() {
    super();
    this.get();
  }

  async add(): Promise<void> {
    const t: TestEntity = new TestEntity();
    t.field = this.val;
    await this.$db.testRepo.save(t);
    await this.get();
  }

  async get(): Promise<void> {
    this.tests = await this.$db.testRepo.getAll();
  }

  async update(): Promise<void> {
    const e: TestEntity | null = await this.$db.testRepo.getById(this.id);
    if(!e) return Promise.reject('Not found');
    e.field = this.val;
    const updated = await this.$db.testRepo.update(e);
    await this.get();
  }

  async remove(): Promise<void> {
    await this.$db.testRepo.remove(this.id);
    await this.get();
  }

}
</script>


<style lang="scss">
  @import "assets/scss/styles";
</style>
