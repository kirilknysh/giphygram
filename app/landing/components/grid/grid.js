import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import InfiniteScroll from 'react-infinite-scroller';
import _debounce from 'lodash.debounce';

import { requestNextPage } from '../../actions/query-actions';

import GridItem from '../grid-item/grid-item';
import GridLoadingIndicator from '../grid-loading-indicator/grid-loading-indicator';
import GridError from '../grid-error/grid-error';

import './grid.styl';

function renderGridItems(items, multiColumn) {
    return items.map((item, index) => (
        <GridItem key={index} image={multiColumn ? item.small : item.large} fallback={multiColumn ? item.smallFallback : item.largeFallback} />
    ));
}

function renderError(error) {
    if (error === null) {
        // strict checko for "null" as error message may be an empty string
        return null;
    }

    return (<GridError message={error.message} />);
}

function getGridClasses(multiColumn, itemsCount) {
    const classes = ['grid'];

    classes.push(multiColumn ? '-multi' : '-single');

    return classes.join(' ');
}

class Grid extends Component {
    render({ items, hasMore, error, multiColumn, requestNextPage }) {
        return (
            <div className={getGridClasses(multiColumn)}>
                <InfiniteScroll
                    loadMore={requestNextPage}
                    hasMore={hasMore}
                    loader={<GridLoadingIndicator visible={items.length > 0} />}
                    useWindow={false}
                    initialLoad={false}
                >
                    <div className="grid-canvas">
                        {renderGridItems(items, multiColumn)}
                    </div>
                </InfiniteScroll>
                {renderError(error)}
            </div>
        );
    }
}

export default connect((state) => ({
    items: state.dataState.items,
    hasMore: state.dataState.hasMore,
    error: state.dataState.error,
}), {
    requestNextPage: _debounce(requestNextPage, 100, { leading: true, trailing: true }),
})(Grid);
