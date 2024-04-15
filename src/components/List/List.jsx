import React from 'react';
import style from './List.module.css';
import ListItem from './ListItem/ListItem';
import { NavLink } from 'react-router-dom';

const List = (props) => {
    let profileDates = props.users
        .map(data => (
            <li key={data.id}>
                <NavLink className={({ isActive }) => isActive ? style.activeLink : ''} to={"/Profile/" + data.id}>
                    <ListItem itemName={data.name} id={data.id} />
                </NavLink>
            </li>
        ))

    return (
        <div className={style.content} >
            {profileDates}
        </div>
    );
}

export default List;