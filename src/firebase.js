import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc, getDocs } from 'firebase/firestore';
// import { doc, onSnapshot } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAsQrrNT15cN4Wyg0O7uo3jG85QMRSfeHg',
  authDomain: 'fir-practice-2e799.firebaseapp.com',
  projectId: 'fir-practice-2e799',
  storageBucket: 'fir-practice-2e799.appspot.com',
  messagingSenderId: '180565521073',
  appId: '1:180565521073:web:760bd25309a631947f2890',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export async function postArticle(title, content, tag) {
  try {
    const docRef = await addDoc(collection(db, 'articles'), {
      id: '',
      title: title,
      content: content,
      tag: tag,
      author: 'Ethan',
      time: new Date(),
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

export async function getArticles() {
  const querySnapshot = await getDocs(collection(db, 'ethanTest'));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().title}`);
  });
}
