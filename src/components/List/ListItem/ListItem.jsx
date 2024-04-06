import React from 'react';
import style from './ListItem.module.css';
// import { NavLink } from 'react-router-dom';
import PersonProfile from './PersonProfile/PersonProfile';

const ListItem = (props) => {
    // let path = "/Profile/" + props.id;
    return (
        <div className={style.content} >
            {/* <NavLink className={({ isActive }) => isActive ? style.activeLink : ''} to={path}> */}
            <PersonProfile personName={props.itemName} />
            {/* </NavLink> */}

        </div>
    );
}

export default ListItem;