import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
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
  const posts = useSelector((state) => state.posts.posts.postList);
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
      content: posts?.map((post) =>
        post.category === "drink" ? (
          <List key={post.id} post={post}></List>
        ) : null
      ),
    },
    {
      id: 2,
      category: "Recipe",
      content: posts?.map((post) =>
        post.category === "recipe" ? (
          <List key={post.id} post={post}></List>
        ) : null
      ),
    },
    {
      id: 3,
      category: "Food",
      content: posts?.map((post) =>
        post.category === "food" ? (
          <List key={post.id} post={post}></List>
        ) : null
      ),
    },
  ];

  const { contentItem, contentChange } = useTabs(0, contents);
  return (
    <StDiv box>
      <StDiv btns>
        {contents.map((content, index) => (
          <StButton key={content.id} onClick={() => contentChange(index)}>
            {content.category}
          </StButton>
        ))}
      </StDiv>
      <StDiv contents>{contentItem.content}</StDiv>
      {/* {posts.map((post) =>
        post.category === "drink" ? (
          <List key={post.id} post={post}></List>
        ) : null
      )} */}
    </StDiv>
  );
};

const StDiv = styled.div`
  ${(props) =>
    props.box &&
    css`
      width: 1340px;
      margin-bottom: 20px;
    `}
  ${(props) =>
    props.btns &&
    css`
      display: flex;
      margin: 30px 0 10px 0px;
    `}

  ${(props) =>
    props.contents &&
    css`
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: flex-start;
      margin-top: 35px;
    `}
`;

const StButton = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 20px;
  background-color: transparent;
  color: burlywood;
  border: 1px solid burlywood;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    background-color: burlywood;
    color: #0a0327;
  }
`;

export default AllList;
