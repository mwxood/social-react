let initialStateSidebar = {
    friends: [
        {id: 1, name: "Mihail",src: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg" },
        {id: 2, name: "Mihaela",src: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg" },
        {id: 3, name: "Misho",src: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg" }
    ]
};

const sidebarReducer = (state = initialStateSidebar, action) => {

    return state;
};

export default sidebarReducer;