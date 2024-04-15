import React from 'react';
import style from './Profile.module.css';
import EntryField from '../InterfaceElements/EntryField/EntryField';
import ProfilePage from './ProfilePage/ProfilePage';
// import { useParams } from 'react-router-dom';

const Profile = (props) => {
    // const { userId } = useParams();

    return (
        <div className={style.content} >
            <div className={style.container1}>
                <EntryField nameP={props.name} />
            </div>
            <div className={style.container2}>
                <div className={style.container3}>
                    <img className={style.img} src='./../avatar.png' alt='Profile' />
                </div>
                <ProfilePage changeData={props.changeData}
                    saveData={props.saveData}
                    departmen={props.departmen}
                    company={props.company}
                    jobTitle={props.jobTitle}
                />
            </div>
            <div className={style.container9}>
                <button className={style.container10} onClick={() => { props.saveData() }}>Сохранить</button>
            </div>
        </div>
    );
}

export default Profile;