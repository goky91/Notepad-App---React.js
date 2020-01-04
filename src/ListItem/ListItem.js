import React, {Component} from 'react';

class ListItem extends Component {

    state = {
        checked: ''
    }

    checkboxHandler = () => {
        if (this.state.checked === '') {
            this.setState({checked: 'js-checked'});
        } else {
            this.setState({checked: ''});
        }
    }

    render() {
        return (
            <div className="note-body__item">
                <input onClick={this.checkboxHandler} name={this.props.name} type="checkbox"></input>
                <label className={this.state.checked} htmlFor={this.props.name}> {this.props.label} </label>
                <button>X</button>
            </div>
        );
    }
};

export default ListItem;