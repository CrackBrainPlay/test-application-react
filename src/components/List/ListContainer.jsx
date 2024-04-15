import { connect } from 'react-redux';
import List from './List';
// import { changeDataAC, saveDataAC, setUsersAC } from '../../Redux/usersReducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const ListContainer = connect(mapStateToProps)(List);

export default ListContainer;