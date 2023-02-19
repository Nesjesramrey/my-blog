import "./App.css";
import { useState } from "react";
import EntryCard from "./Components/EntryCard";

function App() {
  const [title, setTitle] = useState("Mi Blog");
  const [entries, setEntries] = useState([
    {
      entryTitle: "Post 1",
      content: "Lorem ipsum",
      picture:
        "https://th.bing.com/th/id/R.39e42477364bd93386032ce9946b1f60?rik=XhDJ3iE%2buMo43w&pid=ImgRaw&r=0",
    },
    {
      entryTitle: "Post 2",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      picture:
        "https://th.bing.com/th/id/R.39e42477364bd93386032ce9946b1f60?rik=XhDJ3iE%2buMo43w&pid=ImgRaw&r=0",
    },
    {
      entryTitle: "Post 3",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      picture:
        "https://th.bing.com/th/id/R.39e42477364bd93386032ce9946b1f60?rik=XhDJ3iE%2buMo43w&pid=ImgRaw&r=0",
    },
  ]);
  const [entry, setEntry] = useState({});

  const changeHandler = (event) => {
    const value = event.target.value;
    const property = event.target.name;
    setEntry({ ...entry, [property]: value });
  };

  const saveHandler = () => {
    setEntries([...entries, entry]);
  };

  return (
    <div className="App">
      <h1>{title}</h1>
      <div className="main-wrapper">
        <div className="form-wrapper">
          <form action="">
            <div className="form-group">
              <label htmlFor="">Titulo</label>
              <input type="text" name="entryTitle" onChange={changeHandler} />
            </div>

            <div className="form-group">
              <label htmlFor="">Imagen</label>
              <input type="text" name="picture" onChange={changeHandler} />
            </div>

            <div className="form-group">
              <label htmlFor="">Content</label>
              <input type="text" name="content" onChange={changeHandler} />
            </div>
            <button type="button" onClick={saveHandler}>
              Guardar
            </button>
          </form>
        </div>

        <div className="entries-wrapper">
          {entries.map((entry, index) => (
            <EntryCard entryData={entry} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
