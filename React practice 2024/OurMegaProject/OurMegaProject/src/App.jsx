import { useState } from "react";
import "./App.css";

function App() {
  // Notes : env file mai data chupane k liye krte h waise or production pr value le lete h koi bhi important user bgera
  // ka data koi browser se pick na krle isiliye aise variable bnate h
  // inhe bnane ka or access krne ka trika alg alg hota h agr app create react se bni h to alg or agr Vite se bni h to alg
  // REACT_APP_APPWRITE_URL="test enviroment" create react k case mai aise bnate h or use krte waqt process.env.name se use krte h
  // or vite k case mai Vite_ krke bnate h or use krte waqi import.meta.env.namee se use krte h
  // 2 baar console isiliye print hota h because react strict mode m hota h production m wo problem nhi aati

  //console.log(import.meta.env.VITE_APPWRITE_URL, "hello")
  const [loading, SetLoading] = useState(true);
  return (
    <>
      <h1>hii</h1>
    </>
  );
}

export default App;
