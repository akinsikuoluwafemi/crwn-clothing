import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBVoMUhOBMTyTyl6-XRuq0lpjfCFoO4ID4',
	authDomain: 'crwn-db-a0dfa.firebaseapp.com',
	projectId: 'crwn-db-a0dfa',
	storageBucket: 'crwn-db-a0dfa.appspot.com',
	messagingSenderId: '508142273633',
	appId: '1:508142273633:web:51f455104fe83eb6605620',
	measurementId: 'G-MYND19QL97',
};




firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
          })  


        } catch (error){
            
        }


    }

		console.log(snapShot);
};