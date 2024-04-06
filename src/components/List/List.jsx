import React from 'react';
import style from './List.module.css';
// import MyPosts from './MyPosts/MyPosts';
import ListItem from './ListItem/ListItem';
import { NavLink } from 'react-router-dom';

const List = (props) => {
    // let path = "/Profile/" + props.id;
    let profileDates = props.state.profileData
        .map(data => (
            // <li><ListItem itemName={data.name} id={data.id} /></li>
            <li>
                <NavLink className={({ isActive }) => isActive ? style.activeLink : ''} to={"/Profile/" + data.id}>
                    <ListItem itemName={data.name} id={data.id} />
                </NavLink>
            </li>
            // <PersonProfile personName={props.itemName} />
        ))

    return (
        <div className={style.content} >
            {profileDates}
        </div>
    );
}

export default List;