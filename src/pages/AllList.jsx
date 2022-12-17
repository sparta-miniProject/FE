import { useState } from "react";
import styled from "styled-components";
import List from "../components/list/List";

const useTabs = (initialTabs, allTabs) => {
  const [contentIndex, setContentIndex] = useState(initialTabs);
  return {
    contentItem: allTabs[contentIndex],
    contentChange: setContentIndex,
  };
};

const AllList = () => {
  const contents = [
    {
      id: 1,
      category: "Drink",
      content: "Drink",
    },
    {
      id: 2,
      category: "Recipe",
      content: "Recipe",
    },
    {
      id: 3,
      category: "Food",
      content: "Food",
    },
  ];

  const { contentItem, contentChange } = useTabs(0, contents);
  return (
    <div>
      {contents.map((content, index) => (
        <StButton key={content.id} onClick={() => contentChange(index)}>
          {content.category}
        </StButton>
      ))}
      <div>{contentItem.content}</div>
      <List />
    </div>
  );
};

const StButton = styled.button``;

export default AllList;
