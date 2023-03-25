import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun",
    author: "Jan Nowak",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aut quod sunt recusandae. Soluta enim autem qui natus debitis provident iste tenetur. Labore harum deleniti quo fugit ab voluptates rem.",
  },
  {
    id: 2,
    title: "Czym może być teoria strun",
    author: "Jan Kowalski",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aut quod sunt recusandae. Soluta enim autem qui natus debitis provident iste tenetur. Labore harum deleniti quo fugit ab voluptates rem.",
  },
  {
    id: 3,
    title: "Czym nie jest teoria strun",
    author: "Anna Nowak",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aut quod sunt recusandae. Soluta enim autem qui natus debitis provident iste tenetur. Labore harum deleniti quo fugit ab voluptates rem.",
  },
  {
    id: 4,
    title: "Czy istnieje teoria strun basowych?",
    author: "Anna Kowalska",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aut quod sunt recusandae. Soluta enim autem qui natus debitis provident iste tenetur. Labore harum deleniti quo fugit ab voluptates rem.",
  },
];

const HomePage = () => {
  const artList = articles.map((article) => (
    <Article key={article.id} {...article} />
  ));

  return <div className="home">{artList}</div>;
};

export default HomePage;
