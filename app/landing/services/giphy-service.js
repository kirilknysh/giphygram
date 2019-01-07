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
        small: {
            href: asset.images.fixed_height.webp,
            fallback: asset.images.fixed_height.url,
            width: asset.images.fixed_height.width,
            height: asset.images.fixed_height.height,
        },
        large: {
            href: asset.images.original.webp,
            fallback: asset.images.original.url,
            width: asset.images.original.width,
            height: asset.images.original.height,
        },
    };
}

export function fetchData(query, page) {
    return fetch(buildUrl(query, page))
        .then(response => response.json())
        .then((response) => {
            return (response.data || []).map(convertAsset);
        });
}
