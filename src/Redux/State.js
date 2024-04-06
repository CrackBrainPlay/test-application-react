let rerenderEntireTree = () => {

};

let state = {
    profilePage: {
        profileData: [
            { name: 'Пользователь', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' },
            { name: 'Пользователь', departmen: 'Не указано', company: 'Не указано', jobTitle: 'Не указано' }],

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