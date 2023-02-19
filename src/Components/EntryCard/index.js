import React from "react";
import { useNavigate } from "react-router-dom";

const EntryCard = (props) => {
  const navigate = useNavigate();
  const { entryData } = props;
  const { entryTitle, content, picture } = entryData;
  return (
    <div className="blog-entry">
      <img src={picture} alt="avengers" />
      <h2>{entryTitle}</h2>
      <p>{content.length > 30 ? `${content.slice(0, 30)}...` : content}</p>
      <button type="button" onClick={() => navigate(`/blog/klfksd`)}>
        Ver mas
      </button>
    </div>
  );
};

export default EntryCard;
