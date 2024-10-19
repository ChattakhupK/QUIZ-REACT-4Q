import React, { useState } from "react";

const Question = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      questionText: "อะไรคือสิ่งที่ชมรมดนตรีไทยกลัว?",
      answerOptions: [
        { answerText: "เก้าอี้", isCorrect: false },
        { answerText: "ม้านั่ง", isCorrect: false },
        { answerText: "จิ๊กซอ", isCorrect: true },
        { answerText: "ข้าวกล่อง", isCorrect: false },
      ],
    },
    {
      questionText: "อะไรเอ่ยใหญ่กว่าสตรอว์เบอร์รี?",
      answerOptions: [
        { answerText: "กล้วย", isCorrect: false },
        { answerText: "สตอเบ้อเร่อ", isCorrect: true },
        { answerText: "องุ่น", isCorrect: false },
        { answerText: "ส้ม", isCorrect: false },
      ],
    },
    {
      questionText: "ซุปอะไรเอ่ยมีสารอาหารอยู่มากที่สุด?",
      answerOptions: [
        { answerText: "ซุปเห็ด", isCorrect: false },
        { answerText: "ซุปไก่", isCorrect: false },
        { answerText: "ซุปเปอร์แมน", isCorrect: false },
        { answerText: "ซุปเปอร์มาร์เก็ต", isCorrect: true },
      ],
    },
    {
      questionText: "น้ำอะไรเอ่ยยืนได้?",
      answerOptions: [
        { answerText: "น้ำเปล่า", isCorrect: false },
        { answerText: "น้ำชา", isCorrect: false },
        { answerText: "น้ำทะเล", isCorrect: false },
        { answerText: "น้ำตื้น", isCorrect: true },
      ],
    },
  ];

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  console.log(`คุณได้ ${score} คะแนน`);

  const handleRe = () => {
    setShowScore(false);
    setScore(0);
    setCurrentQuestion(0);
  };

  return (
    <div className="app">
          {showScore ? (
            <div className="score-section">
              คุณได้ {score}/{questions.length} คะแนน
              <br />
              <br />
              <button onClick={() => handleRe()}>ลองอีกครั้ง!!!</button>
            </div>
          ) : (
            <>
              <div className="question-section">
                <div className="question-text">
                    <h3>คำถามข้อที่ {currentQuestion+1}</h3>
                  {questions[currentQuestion].questionText}
                </div>
              </div>

                <div className="answer-section">
                  {questions[currentQuestion].answerOptions.map(
                    (item, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(item.isCorrect)}
                      >
                        {item.answerText}
                      </button>
                    )
                  )}
                </div>
            </>
          )}
    </div>
  );
};

export default Question;
