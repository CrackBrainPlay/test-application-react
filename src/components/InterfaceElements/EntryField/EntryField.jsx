import React from 'react';
import style from './EntryField.module.css';

const EntryField = (props) => {
    return (

        <textarea className={style.container8} value={props.nameP} />
    );
}
export default EntryField;
