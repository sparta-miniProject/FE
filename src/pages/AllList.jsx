import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import List from "../components/list/List";
import { __getPost } from "../redux/modules/postSlice";

const useTabs = (initialTabs, allTabs) => {
  const [contentIndex, setContentIndex] = useState(initialTabs);
  return {
    contentItem: allTabs[contentIndex],
    contentChange: setContentIndex,
  };
};

const AllList = () => {
  const posts = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(posts);

  useEffect(() => {
    dispatch(__getPost());
    console.log("hi");
  }, [dispatch]);

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

const StButton = styled.button`
  width: 100px;
  height: 30px;
  margin-right: 10px;
  border-radius: 20px;
`;

export default AllList;
