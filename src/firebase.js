import app from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyAxBYyqkA3hndnBejJCiSn-TH6wmWt3Cjo",
    authDomain: "social-fd114.firebaseapp.com",
    databaseURL: "https://social-fd114.firebaseio.com",
    projectId: "social-fd114",
    storageBucket: "social-fd114.appspot.com",
    messagingSenderId: "206050703171",
    appId: "1:206050703171:web:48a7e283b6db6031e5e1f6",
    measurementId: "G-BXC5S5SDPG"
};
class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        app.analytics();
    }
}
export default Firebase;