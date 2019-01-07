import { h } from 'preact';

import './grid-loading-indicator.styl';

export default function GridLoadingIndicator({ visible }) {
    if (!visible) {
        return null;
    }

    return (
        <div className="grid-loading-indicator">
            <div className="square square-0">▪</div>
            <div className="square square-1">▪</div>
            <div className="square square-2">▪</div>
        </div>
    );
}
