import "./App.css";
import Question from "./components/Question";

const heading = {
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function App() {
  return (
    <>
      <h1 style={heading}>คำถามต่อยจอ!!</h1>
      <Question />
    </>
  );
}

export default App;
