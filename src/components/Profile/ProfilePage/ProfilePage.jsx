import React from 'react';
import style from './ProfilePage.module.css';
import LittleEntryField from '../../InterfaceElements/LittleEntryField/LittleEntryField';

const ProfilePage = (props) => {
    return (
        <div className={style.container4}>
            <div className={style.container5}>
                <div>Должность</div>
                <div>Отдел</div>
                <div>Компания</div>
            </div>
            <div className={style.container6}>
                <LittleEntryField departmen2='Не указано' department={props.departmen} />
                <LittleEntryField departmen2='Не указано' company={props.company} />
                <LittleEntryField departmen2='Не указано' jobTitle={props.jobTitle} />
            </div>
        </div>
    );
}

export default ProfilePage;