import React, { useState, useEffect } from 'react';
import { db, postArticle } from './firebase';
// import { getArticles } from './firebase';
import { onSnapshot } from 'firebase/firestore';
import { collection } from 'firebase/firestore';

function Inputs() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tag, setTag] = useState('');

  console.log(tag);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'articles'), (query) => {
      query.forEach((doc) => {
        console.log('Current data: ', doc.data());
      });
      // const latestDoc = query.docChanges()[0].doc;
      // console.log(`${latestDoc.id} => ${latestDoc.data().title}`);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <span>標題</span>
      <input
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <br />
      <span>內容</span>
      <input
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
        }}
      />
      <br />
      <span>標籤</span>
      <div
        value={tag}
        onChange={(event) => {
          setTag(event.target.value);
        }}
        style={{ display: 'inline' }}
      >
        <input type="radio" value="Beauty" name="tag" />
        Beauty
        <input type="radio" value="Gossiping" name="tag" />
        Gossiping
        <input type="radio" value="SchoolLife" name="tag" />
        SchoolLife
      </div>

      <br />
      <button
        onClick={() => {
          postArticle(title, content, tag);
        }}
        style={{ height: 20, width: 100 }}
      >
        send
      </button>

      <br />
      {/* <button onClick={getArticles} style={{ height: 20, width: 100 }}>
        get data
      </button> */}
    </>
  );
}

export default Inputs;
