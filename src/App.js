import React from 'react';
import Particles from "react-tsparticles";
import './App.css';
import particlesOptions from "./particles.json";

import MainContainer from './components/main-container-component/main.container.component';

function App() {
    return (
        <div className="App">
            <Particles options={particlesOptions}/>
            <header className="App-header">
                <MainContainer />
            </header>
        </div>
    );
}

export default App;
