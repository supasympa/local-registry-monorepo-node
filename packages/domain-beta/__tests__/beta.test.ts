import { beta, status } from "../src";

describe('Beta', () => {
    it('should work', () => {
        expect(beta).toEqual('BETA');
    });

    it('status = OK', () => {
        expect(status).toEqual('OK');
    });

});
