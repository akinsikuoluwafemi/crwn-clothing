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