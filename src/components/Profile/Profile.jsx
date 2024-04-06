import React from 'react';
import style from './Profile.module.css';
import EntryField from '../InterfaceElements/EntryField/EntryField';
import ProfilePage from './ProfilePage/ProfilePage';

const Profile = (props) => {
    return (
        <div className={style.content} >
            <div className={style.container1}>
                <EntryField nameP='Пользователь' />
            </div>
            <div className={style.container2}>
                <div className={style.container3}>
                    <img className={style.img} src='./../avatar.png' alt='Profile' />
                </div>
                {/* <ProfilePage department={props.profilePage.profileDate} /> */}
                <ProfilePage />
            </div>
            <div className={style.container9}>
                <button className={style.container10}>Сохранить</button>
            </div>

            {/* <MyPosts postsData={props.postsPage.postsData}
                newPostText={props.postsPage.newPostText}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText} /> */}
        </div>
    );
}

export default Profile;