import { expect } from 'chai';
import { Example } from '../src/lib/_example';

describe('Libs', () => {

    describe('_example', () => {
        let example;
        before(() => {
            example = new Example();
        });

        it('should respond an string', () => {
           expect(example.doSomething()).to.have.string('Hello there!');
        });

        it('should respond an string with params', () => {
            expect(example.doSomething('wolrd')).to.have.string('Hello wolrd!');
        });
    });
});
