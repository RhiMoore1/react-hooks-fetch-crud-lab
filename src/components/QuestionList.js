import React from "react";
import QuestionItem from "./QuestionItem"
import url from "../constants";

function QuestionList({questions, setQuestions}) {
  
  const handleDeleteClick = async (id) => {
    const config = {method: "DELETE"}
    const response = await fetch(`${url.questions}/${id}`, config)
    const filteredQuestions = questions.filter(question => question.id !== id)
    setQuestions(filteredQuestions)
  }


  const questionMap = questions.map(question =><QuestionItem onDeleteClick={handleDeleteClick} key={question.id} question={question} />)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionMap}</ul>
    </section>
  );
}

export default QuestionList;
