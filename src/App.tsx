import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getFirestore,
  connectFirestoreEmulator,
  collection as firebaseCollection,
  getDocs,
} from "firebase/firestore";
import "./App.css";
import React from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCENt2JTPvvCZJPrvJSGWnRZlhlaLSY_9Y",
  authDomain: "poc-e2e-with-firebase-emulator.firebaseapp.com",
  projectId: "poc-e2e-with-firebase-emulator",
  storageBucket: "poc-e2e-with-firebase-emulator.appspot.com",
  messagingSenderId: "358674633205",
  appId: "1:358674633205:web:b3e9fb3f508a276f9990bc",
};

type Member = {
  id: number;
  name: string;
};

function App() {
  const [members, setMembers] = React.useState<Member[]>([]);

  if (getApps().length === 0) initializeApp(firebaseConfig);
  else getApp();

  const loadData = async () => {
    const db = getFirestore();
    connectFirestoreEmulator(db, "127.0.0.1", 9987);

    const collection = firebaseCollection(db, "test");
    const _members: Member[] = [];
    const { docs } = await getDocs(collection);
    docs.forEach((doc, index) => {
      const { name } = doc.data();
      _members.push({
        id: index,
        name: name,
      });
    });
    setMembers(_members);
  };

  return (
    <div>
      <h2>Load Firebase Data from firebase-emulator</h2>
      <div>
        <button id="load-data" onClick={async () => await loadData()}>
          Loading
        </button>
        <table border={1}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {members.map(({ id, name: memberName }) => {
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{memberName}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
