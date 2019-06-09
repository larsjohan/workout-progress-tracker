import * as tedb from 'tedb';
import * as storageDriver from 'tedb-electron-storage';


export default class DataAccessPlugin {
    public readonly testRepo: TestCollection;  
    
    constructor() {
        this.testRepo = new TestCollection();
    }

    install(vue: any, options: any) {
        vue.prototype.$db = this;
    }
}


// Declare custom types on the Vue-instance
import Vue from 'vue';
import TestCollection from '@/models/collections/TestCollection';

declare module 'vue/types/vue' {
    
    interface Vue {
        $db: DataAccessPlugin   
    }
}