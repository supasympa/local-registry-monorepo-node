import * as chai from 'chai';
import { helloWorld } from "../src/helloWorld";

const { expect } = chai;

describe('Hello World', () => {
    it('should be testable', () => {
        expect(helloWorld()).to.equal('Hello World!');
    })
});
