import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import ViewSettings from './view-settings/view-settings';
import QueryInput from './query-input/query-input';
import Grid from './grid/grid';

class LandingApp extends Component {
    render(props) {
        return (
            <div className="landing-root">
                <header>
                    <h1>giphy gram</h1>
                </header>
                <section className="settings">
                    <QueryInput query={props.query} />
                    <ViewSettings multiColumn={props.multiColumn} />
                </section>
                <Grid multiColumn={props.multiColumn} />
            </div>
        );
    }
}

export default connect((state) => ({
    multiColumn: state.viewState.multiColumn,
    query: state.queryState.query,
}))(LandingApp);
