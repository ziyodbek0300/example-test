import './App.css';
import All from "./containers";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <All/>
        </BrowserRouter>
    );
}

export default App;
