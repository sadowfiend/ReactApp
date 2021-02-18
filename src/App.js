import './App.css';
import Header from "./components/header/header";
import Nav from "./components/navbar/navbar";
import Content from "./components/content/content";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <Content/>
        </div>

    );
}

export default App;
