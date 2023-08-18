import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Operations from "./components/Operations";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Success: ", "Dark Mode disabled");
      document.title = "TextUtils";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#031a3c";
      showAlert("Success: ", "Dark Mode enabled");
      document.title = "TextUtils(Dark-mode)";
    }
  };

  return (
    <>
      <NavBar
        title="TexTools"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Operations
          heading="Enter the text to analyze below-:"
          mode={mode}
          showAlert={showAlert}
        />
      </div>
    </>
  );
}

export default App;
