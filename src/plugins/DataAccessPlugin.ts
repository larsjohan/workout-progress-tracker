
export default class DataAccessPlugin {
    
    constructor() {
        
    }

    install(vue: any, options: any) {
        vue.prototype.$db = this;
    }
}


// Declare custom types on the Vue-instance
import Vue from 'vue';

declare module 'vue/types/vue' {
    
    interface Vue {
        $db: DataAccessPlugin   
    }
}