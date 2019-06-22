<template>
    <div class="navbar">
        <router-link class="link" active-class="active" to="/log">
            <List></List>
        </router-link>
        <router-link class="link" active-class="active" to="/graph">
            <Graph></Graph>
        </router-link>
        <router-link class="link" active-class="active" to="/excercise">
            <Weightlifting></Weightlifting>
        </router-link>
        <router-link class="link" active-class="active" to="/measurement">
            <MeasuringTape></MeasuringTape>
        </router-link>
        <router-link class="link" active-class="active" to="/nutrition">
            <Nutrition></Nutrition>
        </router-link>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import List from '../../assets/svg/List.vue';
import Graph from '../../assets/svg/Graph.vue';
import Weightlifting from '../../assets/svg/Weightlifting.vue';
import MeasuringTape from '../../assets/svg/MeasuringTape.vue';
import Nutrition from '../../assets/svg/Nutrition.vue';

@Component({
    components: {
        Graph,
        List,
        Weightlifting,
        MeasuringTape,
        Nutrition
    }
})
export default class Navbar extends Vue {
    
    public constructor() {
        super();
    }

}
</script>

<style lang="scss" scoped>

    @import "../../assets/scss/dimensions.scss";
    @import "../../assets/scss/colors";

    .navbar {
        position: fixed;
        background-color: $bg1;
        color: $txt;
        top: 0;
        left: 0;
        bottom: 0;
        height: 100vh;
        width: $navbar-width__collapsed;
        display: flex;
        flex-flow: column wrap;
        justify-content: space-evenly;

        & .link {
            margin: 5px;

            &:link,
            &:active,
            &:hover,
            &:visited {
                color: $txt;
            }

            &:hover {
                margin: 0;
            }

            &.active {
                border-right: 4px solid $primary;
                box-sizing: border-box;
                margin: 0;
                padding: 2px;
                cursor: default;
            }

        }
    }
</style>
