import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import _debounce from 'lodash.debounce';

import './query-input.styl';

import { changeQuery } from '../../actions/query-actions';

class QueryInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = _debounce(this.handleChange.bind(this, props.changeQuery), 1000, { leading: false, trailing: true });
        // this.handleChange = this.handleChange.bind(this, props.changeQuery);
    }

    handleChange(action, event) {
        action(event.target.value);
    }

    render({ query }) {
        return (
            <div className="query-input-container">
                <input className="input" type="text" value={query} placeholder="Enter your query here..." onInput={this.handleChange} />
            </div>
        );
    }
}


export default connect(null, {
    changeQuery,
})(QueryInput);
