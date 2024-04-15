import { connect } from 'react-redux';
import Profile from './Profile';
import { changeDataAC, saveDataAC, setUsersAC } from '../../Redux/usersReducer';

const mapStateToProps = (state) => {

    return {
        users: state.usersPage.users
    }
}

const mapDipatchToProps = (dispatch) => {
    return {
        saveData: (userId, name, departmen, company, jobTitle) => {
            dispatch(saveDataAC(userId, name, departmen, company, jobTitle));
        },
        changeData: (userId, name, departmen, company, jobTitle) => {
            dispatch(changeDataAC(userId, name, departmen, company, jobTitle));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}


const ProfileContainer = connect(mapStateToProps, mapDipatchToProps)(Profile);

export default ProfileContainer;