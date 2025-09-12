import Timer from "./components/Timer.jsx";
import "./App.css";

function App(){
    return(
        <div style={{padding:24, fontFamily: "sans-serif" }}>
            <h1>Countdown Timer</h1>
            <Timer />
        </div>
        );
    }
export default App;