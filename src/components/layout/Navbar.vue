<template>
    <div class="navbar">
        <router-link class="link" active-class="active" to="/log">
            <List class="link-icon"></List>
            <p class="label">Log</p>
        </router-link>
        <router-link class="link" active-class="active" to="/graph">
            <Graph class="link-icon"></Graph>
            <p class="label">Statistics</p>
        </router-link>
        <router-link class="link" active-class="active" to="/excercise">
            <Weightlifting class="link-icon"></Weightlifting>
            <p class="label">Excercises</p>
        </router-link>
        <router-link class="link" active-class="active" to="/measurement">
            <MeasuringTape class="link-icon"></MeasuringTape>
            <p class="label">Measurements</p>
        </router-link>
        <router-link class="link" active-class="active" to="/nutrition">
            <Nutrition class="link-icon"></Nutrition>
            <p class="label">Nutrition</p>
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
            padding: 10px;
            box-sizing: border-box;
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;
            height: 50px;

            & .link-icon {
                width: 40px;
            }

            &:link,
            &:active,
            &:hover,
            &:visited {
                color: $txt;
                text-decoration: none;
            }

            &:hover {
                color: $primary;
            }

            &.active {
                border-left: 4px solid $primary;
                color: $primary;
                cursor: default;
            }

            & .label {
                display: none;
                margin-left: 10px;
                font-size: 20px;
            }

        }

        &:hover {
            width: $navbar-width__expanded;
            transition: all 0.25s ease-in-out;

            & .label {
                display: initial;
            }
        }
    }
</style>
