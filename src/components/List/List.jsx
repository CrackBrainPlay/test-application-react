import React from 'react';
import style from './List.module.css';
// import MyPosts from './MyPosts/MyPosts';
import ListItem from './ListItem/ListItem';

const List = (props) => {

    let profileDates = props.state.profileData.map(data => (<li><ListItem itemName={data.name} /></li>))

    return (
        <div className={style.content} >
            {profileDates}
        </div>
    );
}

export default List;