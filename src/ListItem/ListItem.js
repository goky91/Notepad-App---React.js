import React from 'react';

const ListItem = (props) => {
    return (
    <div className="note-body__item">
        <input name={props.name} type="checkbox"></input>
        <label htmlFor={props.name}> {props.label} </label>
        <button>X</button>
    </div>
    );
};

export default ListItem;