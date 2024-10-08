import React from "react";
import TopicListItem from './TopicListItem'
import "../styles/TopicList.scss";

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

const TopicList = ({ topics, onTopicSelect }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((data, index) => (
        <TopicListItem
          key={index}
          id={data.id}
          slug={data.slug}
          title={data.title}
          onTopicSelect={onTopicSelect}
        />))
      }
    </div>
  );
};

export default TopicList;
