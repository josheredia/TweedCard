import "./App.css";
import { Global, css } from "@emotion/react";
import Card from "./Components/Card";

function App() {
  return (
    <>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");
          * {
            box-sizing: border-box;
            margin: 0;
            border: 0;
            padding: 0;
            outline: 0;
          }
          a {
            text-decoration: none;
          }
        `}
      />
      <div className="App">
        <Card />
      </div>
    </>
  );
}

export default App;
