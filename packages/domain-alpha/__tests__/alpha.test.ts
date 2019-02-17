import { alpha, HelloWorld } from "../src";

describe('Alpha', () => {
    it('should work', () => {
        expect(alpha).toEqual('ALPHA');
        expect(HelloWorld).toEqual('Hello World!')
    });
});
