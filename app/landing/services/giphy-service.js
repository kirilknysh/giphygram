import { giphy as config } from '../config.json';

function buildUrl(query, page) {
    const url = new URL(config.base);

    url.protocol = global.location.protocol;

    url.searchParams.set('api_key', config.apiKey);
    url.searchParams.set('limit', config.limit);

    url.searchParams.set('q', query);
    url.searchParams.set('offset', page * config.limit);

    Object.keys(config.params).forEach((param) => {
        url.searchParams.set(param, config.params[param]);
    });

    return url;
}

function convertAsset(asset) {
    return {
        type: asset.type,
        small: asset.images.fixed_height.webp,
        smallFallback: asset.images.fixed_height.url,
        large: asset.images.original.webp,
        largeFallback: asset.images.original.url,
    };
}

export function fetchData(query, page) {
    return fetch(buildUrl(query, page))
        .then(response => response.json())
        .then((response) => {
            return (response.data || []).map(convertAsset);
        });
}
