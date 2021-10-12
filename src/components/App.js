import React from 'react';
import Header from './Header';
import PlayerList from './PlayerList';
import AddPlayerForm from './AddPlayerForm';

// in Treehouse module 'React Context API'->'Refactor the Provider,
// state moves to src/components/Context/index.js->class Provider extends Component,
// and the App componet changes to the stateles function below:
const App = () => {
    return (
        <div className="scoreboard">
            <Header /> 
            <PlayerList/>
            <AddPlayerForm />
        </div>
    );
  }

export default App;
