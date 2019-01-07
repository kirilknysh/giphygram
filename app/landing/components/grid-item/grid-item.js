import { h } from 'preact';

import './grid-item.styl';

export default function GridItem({ item }) {
    return (
        <div className="grid-item" style={{ height: `${item.height}px` }}>
            <picture>
                <source type="image/webp" srcset={item.href} />
                <img src={item.fallback} />
            </picture>
        </div>
    );
}
