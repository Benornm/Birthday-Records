import React, {PureComponent} from 'react';
import Checkbox from '@material-ui/core/Checkbox';

class Filter extends PureComponent {
    render() {
        console.log('filter');
        return (
        <div className="checkboxes">
            <Checkbox onChange={(e) => this.props.sort(e, 'name')}/>
            <label>Name</label>
            <Checkbox onChange={(e) => this.props.sort(e, 'dob')}/>
            <label>Age</label>
        </div>
        );
    }
}

export default Filter;
