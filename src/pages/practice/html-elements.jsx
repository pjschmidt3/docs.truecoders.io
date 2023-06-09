import React, { useState } from "react";
import styles from "../styles.module.css";
import Layout from "@theme/Layout";

const WelcomeCard = ({ onClick }) => {
  return (
    <div className="card-demo">
      <div className="card p-3">
        <div className="card__header">
          <h1>Practice: HTML Elements</h1>
        </div>
        <div className="card__body">
          <p>
            You will be shown the description of a HTML element. Answer each
            question by providing the <em>tag name</em> of the element that
            matches the description.
          </p>
          <p>Ready to test your knowledge?</p>
        </div>
        <div className="card__footer">
          <button
            className="button button--secondary button--block"
            onClick={onClick}
          >
            Begin
          </button>
        </div>
      </div>
    </div>
  );
};

const QuestionCard = ({ definition, term, onNext }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const onAnswer = (e) => {
    e.preventDefault();

    if (showAnswer) {
      onNext(isCorrect);
      setShowAnswer(false);
      setIsCorrect(null);
      setAnswer("");
    } else {
      setIsCorrect(answer == term);
      setShowAnswer(true);
    }
  };

  return (
    <div className="card-demo">
      <div className="card p-3">
        <small>Question</small>
        <div className="card__header">
          <p className="h3">{definition}</p>
        </div>
        <hr />
        <div className="card__body">
          <form onSubmit={onAnswer}>
            {!showAnswer ? (
              <input
                className={`form-control`}
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                readOnly={showAnswer}
              />
            ) : (
              <p
                className={`rounded p-1 ${
                  isCorrect ? "border-success" : "border-danger"
                }`}
              >
                {isCorrect ? (
                  <span>{answer}</span>
                ) : (
                  <>
                    <s>{answer}</s> <span>{term}</span>
                  </>
                )}
              </p>
            )}
            <button
              className="button button--secondary button--block"
              type="submit"
            >
              {showAnswer ? "Proceed" : "Answer"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Questions = () => {
  const [gameStatus, setGameStatus] = useState("start");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const statuses = {
    start: () => <WelcomeCard onClick={onStart} />,
    play: () => (
      <QuestionCard {...questions[currentQuestion]} onNext={onNext} />
    ),
    end: () => <p>Game Over. Your Score: {score}</p>,
  };

  const onStart = () => {
    setGameStatus("play");
  };

  const onNext = (isCorrect) => {
    setScore(isCorrect ? 1 : -1);
    let nextIdx = currentQuestion + 1;
    if (questions[nextIdx]) setCurrentQuestion(nextIdx);
    else setGameStatus("end");
  };

  return (
    <Layout title="Practice">
      <main className="homeSection">
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--6 mx-auto">{statuses[gameStatus]()}</div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Questions;
