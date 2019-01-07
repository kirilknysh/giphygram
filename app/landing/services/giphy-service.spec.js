import { giphy as config } from '../config.json';

import * as service from './giphy-service';

describe('giphy-service', () => {
    let nativeFetch = null;

    beforeEach(() => {
        nativeFetch = global.fetch;
        global.fetch = jest.fn((url) => {
            return Promise.resolve({
                json: () => {
                    return Promise.resolve({ data: [] });
                },
            });
        });
    });

    afterEach(() => {
        global.fetch = nativeFetch;
        nativeFetch = null;
    });

    it('should correctly combine the URL', () => {
        const query = 'q u e r y';
        const page = 12;

        return service.fetchData(query, page).then(() => {
            const url = global.fetch.mock.calls[0][0];

            const expectedUrl = new URL(config.base);
            expectedUrl.searchParams.set('api_key', config.apiKey);
            expectedUrl.searchParams.set('limit', config.limit);

            expectedUrl.searchParams.set('q', query);
            expectedUrl.searchParams.set('offset', page * config.limit);

            expect(url.origin).toEqual(expectedUrl.origin);
            expect(url.pathname).toEqual(expectedUrl.pathname);
            expect(url.searchParams.get('api_key')).toEqual(expectedUrl.searchParams.get('api_key'));
            expect(url.searchParams.get('offset')).toEqual(expectedUrl.searchParams.get('offset'));
            expect(url.searchParams.get('q')).toEqual(expectedUrl.searchParams.get('q'));
        });
    });
});
