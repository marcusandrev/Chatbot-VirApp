import "./App.css";

// components
import AppBar from "./components/appBar";
import Landing from "./components/landing";

function App() {
  return (
    <div className="App">
      <AppBar />
      <p style={{ textAlign: "center", fontSize: "12px" }}>
        ‼ This is a sample coded website for Vir App Purposes ‼
      </p>
      <Landing />
      <p style={{ textAlign: "center", fontSize: "16px" }}>
        Made with 💖 by Ching, Mauleon, Uriarte, & Villanueva
      </p>



      {/* Dialogflow html 
       Ref: https://stackoverflow.com/questions/68688390/how-do-i-put-this-google-dialogflow-code-into-a-typescript-react-app */}

      <div
        dangerouslySetInnerHTML={{
          __html: `
            <df-messenger
            intent="WELCOME"
                chat-title="Dashlabs_Group#13"
                agent-id="d5793d98-c067-494b-b65b-990a0ed98087"
                language-code="en"
            </df-messenger>
            `,
        }}
      />
    </div>
  );
}

export default App;
