import React, { useEffect, useState, Suspense } from "react";
import Piada from "./componentes/piada";
function App() {
  const [jokes, setJokes] = useState([]);
  const [likes, setLikes] = useState([]);
  const [naoGostou, setNaoGostou] = useState([]);
  useEffect(() => {
    api();
  }, []);
  function api() {
    fetch("https://api.chucknorris.io/jokes/random?")
      .then((res) => res.json())
      .then((resultado) => {
        setJokes(resultado.value);
      });
  }
  function piadaNova() {
    fetch("https://api.chucknorris.io/jokes/random?")
      .then((res) => res.json())
      .then((resultado) => {
        setJokes(resultado.value);
      });
  }
  const curtir = () => {
    setLikes([...likes, jokes]);
    piadaNova();
  };
  const naoCurtir = () => {
    setNaoGostou([...naoGostou, jokes]);
    piadaNova();
  };
  return (
    <div className="container">
            <h1>Joke of the Day!</h1>      <p>{jokes}</p>     {" "}
      <button onClick={curtir}>{"Curtir"}</button>     {" "}
      <button onClick={naoCurtir}>{"Não Curtir"}</button>     {" "}
      <p>Lista de curtidas:</p>     {" "}
      {likes.map((g) => (
        <p key={g}>{g}</p>
      ))}
            <p>Lista de não curtidas:</p>     {" "}
      {naoGostou.map((g) => (
        <p key={g}>{g}</p>
      ))}
         {" "}
    </div>
  );
}
export default App;
