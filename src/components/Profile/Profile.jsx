import React from 'react';
import style from './Profile.module.css';
// import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
    return (
        <div className={style.content} >
            <div className={style.container1}>
                <textarea className={style.container8} value='Пользователь' />
            </div>
            <div className={style.container2}>
                <div className={style.container3}><img className={style.img} src='avatar.png' alt='Profile' /></div>
                <div className={style.container4}>
                    <div className={style.container5}>
                        <div>Должность</div>
                        <div>Отдел</div>
                        <div>Компания</div>
                    </div>
                    <div className={style.container6}>
                        <textarea className={style.container7} value='Не указано' cols="30" rows="1" width="10" />
                        <textarea className={style.container7} value='Не указано' />
                        <textarea className={style.container7} value='Не указано' />
                    </div>
                </div>
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