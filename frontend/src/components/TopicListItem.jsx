import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { id, slug, title, onTopicSelect } = props;
  return (
    <div className="topic-list__item" onClick={() => onTopicSelect(id)}>
      <span>
        {title}
      </span>
    </div>
  );
};
export default TopicListItem;
