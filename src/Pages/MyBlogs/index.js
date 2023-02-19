import React from "react";
import { useState } from "react";

import EntryCard from "../../Components/EntryCard";
import NavBar from "../../Components/NavBar";

function MyBlogs() {
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
  ]);

  return (
    <div className="App">
      <NavBar />
      <div className="main-wrapper">
        <div className="entries-wrapper">
          {entries.map((entry, index) => (
            <EntryCard entryData={entry} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyBlogs;
