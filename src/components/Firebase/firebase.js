import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDjSoPM5lqz3lEP1Wyo78Z_TPpfmP8Omgk",
    authDomain: "marvel-quiz-2a37e.firebaseapp.com",
    databaseURL: "https://marvel-quiz-2a37e.firebaseio.com",
    projectId: "marvel-quiz-2a37e",
    storageBucket: "marvel-quiz-2a37e.appspot.com",
    messagingSenderId: "653258754494",
    appId: "1:653258754494:web:772c6f61f7bfac99afd1ef"
  };


class Firebase {
    constructor(){
        app.initializeApp(config);
        this.auth = app.auth();
    }

    //inscription
    signUpUser = (email, password) => {
        this.auth.createUserWithEmailAndPassword(email, password);
    }

    //connexion
    loginUser = (email, password) => {
        this.auth.signInWithEmailAndPassword(email, password);
    }

    // Déconnexion
    signOutUser = () => {
        this.auth.signOut();
    }
}

export default Firebase;