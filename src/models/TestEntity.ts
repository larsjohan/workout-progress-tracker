import EntityBase from './infrastructure/EntityBase';

export default class TestEntity extends EntityBase {
    field: string;

    constructor() {
        super();
        this.field = '';
    }
}