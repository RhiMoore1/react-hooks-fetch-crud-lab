import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])
  const url = "http://localhost:4000/questions"

  const fetchQuestions = async () => {
    const response = await fetch(url)
      .then((r) => r.json())
      setQuestions(response)
  }

  const onAddQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion])
  }

  useEffect(() => {
    fetchQuestions()
  }, [])

  // useEffect(() => {
  //   fetch("http://localhost:4000/questions")
  //   .then((res) => res.json())
  //   .then(questionData=>{setQuestions(questionData);console.log(questions)})
  // },[])

  // useEffect(() => {
  //   console.log(questions);
  // }, [questions]);

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={onAddQuestion}/> : <QuestionList setQuestions={setQuestions} questions={questions} />}
    </main>
  );
}

export default App;
