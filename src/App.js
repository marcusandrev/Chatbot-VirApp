import "./App.css";

// components
import AppBar from "./components/appBar1";
import Landing from "./components/landing";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Landing />

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
