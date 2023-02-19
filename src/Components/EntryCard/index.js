import React from "react";

const EntryCard = (props) => {
  const { entryData } = props;
  const { entryTitle, content, picture } = entryData;
  return (
    <div className="blog-entry">
      <img src={picture} alt="avengers" />
      <h2>{entryTitle}</h2>
      <p>{content.length > 30 ? `${content.slice(0, 30)}...` : content}</p>
      <button type="button">Ver mas</button>
    </div>
  );
};

export default EntryCard;
