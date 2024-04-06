import React from 'react';
import style from './ListItem.module.css';
import PersonProfile from './PersonProfile/PersonProfile';

const ListItem = (props) => {
    return (
        <div className={style.content} >
            <PersonProfile personName={props.itemName} />
        </div>
    );
}

export default ListItem;