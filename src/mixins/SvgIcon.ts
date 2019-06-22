import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class SvgIcon extends Vue {

    @Prop({type: String, default: '100%'}) height?: string; // 512pt
    @Prop({type: String, default: '100%'}) width?: string;  // 512pt
    @Prop({type: String, default: 'currentcolor'}) color?: string;
    @Prop({type: String, default: '0 0 512 512'}) viewBox?: string;
}