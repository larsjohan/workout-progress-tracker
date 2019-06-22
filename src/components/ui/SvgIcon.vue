<template>
    <div class="svg-icon">
        <img :src="source"/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';


@Component
export default class SvgIcon extends Vue {
    @Prop({default: '', type: String, required: true}) 
    private readonly url!: string;

    private source: string = this.url;

}

</script>

<style lang="scss" scoped>
    @import '../../assets/scss/colors';

    img {
        position: relative;
        max-width: 100%;
        color: $txt;
    }

</style>

