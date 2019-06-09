import CollectionBase from '../infrastructure/CollectionBase';
import TestEntity from '../TestEntity';

export default class TestCollection extends CollectionBase<TestEntity> {

    constructor() {
        super('test');
    }
}