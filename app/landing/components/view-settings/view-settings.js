import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import './view-settings.styl';

import { switchGridViewColumns } from '../../actions/view-actions';

function getClasses(multiColumn) {
    const classes = ['view-toggler'];

    classes.push(multiColumn ? '-single' : '-multi');

    return classes.join(' ');
}

class ViewSettings extends Component {
    render({ multiColumn, switchGridViewColumns }) {
        return (
            <div className="view-settings">
                <button title="Toggle view mode" className={getClasses(multiColumn)} onClick={switchGridViewColumns}>▪▪▪</button>
            </div>
        );
    }
}

export default connect(null, {
    switchGridViewColumns,
})(ViewSettings);
