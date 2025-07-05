import ProgressBar from "./ProgressBar";
import './index.css'

function App() {
    const bars = [5, 10, 30, 50,  70, 100];
    return (
        <>
            <h1 style={{textAlign: "center"}}>Progress Bars</h1>
            {bars.map(value => <ProgressBar key={value} progress={value} />)}
        </>
    )
}
export default App;