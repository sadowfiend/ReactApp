import './App.css';
import Header from "./components/header/header";
import Nav from "./components/navbar/navbar";
import Content from "./components/content/content";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>

                <div className="app-wrapper-content">
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/content' component={Content}/>
                    <Route path='/news' component={News}/>
                </div>

            </div>
        </BrowserRouter>


    );
}

export default App;
