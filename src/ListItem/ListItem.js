import React, {Component} from 'react';

class ListItem extends Component {

    state = {
        checked: false
    }

    checkboxHandler = () => {
        
    }

    render() {
        return (
            <div className="note-body__item">
                <input onClick={this.checkboxHandler} name={this.props.name} type="checkbox"></input>
                <label htmlFor={this.props.name}> {this.props.label} </label>
                <button>X</button>
            </div>
        );
    }
};

export default ListItem;