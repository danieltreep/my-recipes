import './App.css';
import { recepten } from './data';

import { initializeApp } from 'firebase/app';
import { collection, addDoc, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import Recept from './components/Recept';
import ReceptenPagina from './components/ReceptenPagina';

const firebaseConfig = {
  apiKey: "AIzaSyDowGHrpTUt9quaAD3iG4Tz3UgOFQ5p6Fs",
  authDomain: "save-my-recipes.firebaseapp.com",
  projectId: "save-my-recipes",
  storageBucket: "save-my-recipes.appspot.com",
  messagingSenderId: "261002355259",
  appId: "1:261002355259:web:dfcc6c3a8510e89da4b21e"
}

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

function App() {

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const [recipeList, setRecipeList] = useState([])
  const [receptenLijst, setRecepten] = useState(recepten)

  function handleSubmit(e) {
    e.preventDefault();
    postRecipe(title, text, image)
  }

  useEffect(() => {
    // getRecipes(database);
    console.log('App re-rendered')
  }, [])

  async function getRecipes(database) {
    const recipeCollection = collection(database, 'recipes');
    const recipeSnapshot = await getDocs(recipeCollection);
    const recipes = recipeSnapshot.docs.map(doc => doc.data());
    console.log("Firebase Read");
    setRecipeList(recipes);
  }
  
  async function postRecipe(title, text, image) {
    try {
      const docRef = await addDoc(collection(database, "recipes"), {
        title: title,
        text: text,
        image: image
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div className="App">
      <section>
        {/* <form onSubmit={handleSubmit}>
          <input type={text} required onChange={e => setTitle(e.target.value)}></input>
          <input type={text} required onChange={e => setText(e.target.value)}></input>
          <input type={text} required onChange={e => setImage(e.target.value)}></input>
          <button type='submit'>submit</button>
        </form> */}
        {/* {recipeList.map((recipe, index) => {
          return(
            <div key={index}>
              <p>{recipe.title}</p>
              <p>{recipe.text}</p>
            </div>
          )})
        } */}
        <ReceptenPagina receptenLijst={receptenLijst}/>

        {/* {receptenLijst.map((recept, index) => <Recept recept={recept} key={index} index={index}/>)} */}
      </section>
    </div>
  );
}

export default App;
