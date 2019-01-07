import { h } from 'preact';

import './grid-item.styl';
// {/* <img src={image} /> */}
export default function GridItem({ image, fallback }) {
    return (
        <div className="grid-item">
            <picture>
                <source type="image/webp" srcset={image} />
                <img src={fallback} />
            </picture>
        </div>
    );
}
