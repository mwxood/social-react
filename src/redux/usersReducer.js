const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UUFOLLOW';
const SET_USERS =  'SET_USERS';

let initialStateUser ={
    users: [
        {id: 1, photoUrl: 'https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg', followed: false, fullName: "Mihail", status: "I am a boss", location: {city: 'Plovdiv', country: "Bulgaria"}},
        {id: 2,  photoUrl: 'https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg', followed: true, fullName: "Mihaela", status: "I am a princess", location: {city: 'Plovdiv', country: "Bulgaria"}},
        {id: 3,  photoUrl: 'https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg', followed: false, fullName: "Misho", status: "I am a sweet cat", location: {city: 'Plovdiv', country: "Bulgaria"}},
    ]
};

const usersReducer = (state = initialStateUser, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                }),
            };
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]};
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                }),
            };
        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export default usersReducer;