import { h } from 'preact';

import './grid-error.styl';

export default function GridError({ message }) {
    return (
        <div className="grid-error">
            <span>Error: </span><span>{message}</span>
        </div>
    );
}
