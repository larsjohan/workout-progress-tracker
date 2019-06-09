<template>
    <div class="header-bar">
        <h1>Logo</h1>
        <ul>
            <li><a href="/home">Home</a></li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component
export default class Header extends Vue {
    
    public constructor() {
        super();
    }

}
</script>

<style lang="scss" scoped>
    .header-bar {
        position: absolute;
        display: sticky;
        top: 0;
        left: 0;
        right: 0;
        height: 50px;
        width: 100%;
        border: 1px solid #555
    }
</style>
