let rerenderEntireTree = () => {

};

let state = {
    profilePage: {
        profileData: [
            { name: 'Пользователь 1', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь 2', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь 3', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь 4', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь 5', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь 6', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь 7', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь 8', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь 9', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь 10', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь 11', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь 12', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь 13', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь 14', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь 15', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь 16', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь 17', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь 18', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь 19', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь 20', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' }],

        // { id: 3, text: 'Why do you not answer me?', counterLikes: 76 }],
        newPostText: ''
    }
    // },
    // messagesPage: {
    //     dialogsData: [
    //         { id: 1, name: 'Petr' },
    //         { id: 2, name: 'Stas' },
    //         { id: 3, name: 'Sasha' },
    //         { id: 4, name: 'Masha' },
    //         { id: 5, name: 'Pasha' },
    //         { id: 6, name: 'Dima' }],
    //     massagesData: [
    //         { id: 1, text: 'Hello' },
    //         { id: 2, text: 'How are you?' },
    //         { id: 3, text: 'How are you?' },
    //         { id: 4, text: 'Why do you not answer me?' }]
    // }

};

export let changeDate = () => {
    // let newPost = { id: 5, text: state.profilePage.newPostText, counterLikes: 0 }
    let newPost = { name: 'Пользователь', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' }
    state.profilePage.postsData.push(newPost);
    // state.profilePage.postsData.unshift(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export let subscribe = (observer) => {
    rerenderEntireTree = observer;
}


export default state;