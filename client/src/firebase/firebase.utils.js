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



const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    const snapShot = await userRef.get();
    
    // if the snapshop doesn't exist, create a new data using the data from the snapshot object
    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
          })  


        } catch (error){
            console.log(`error creating user`, error.message)
        }


    }
        
    return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    

    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    })

    return await batch.commit();

}

export const convertCollectionSnapshotToMap = (collections) => {
    
    const transformedCollection = collections.docs.map(doc => {
        
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })

    return transformedCollection.reduce((accumulator, collection ) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
    
} 


export const auth = firebase.auth();
export const firestore = firebase.firestore();
