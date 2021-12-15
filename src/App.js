import './App.css';
import { useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AlumnosView from './components/AlumnosView';
import SpellsView from './components/SpellsView';
import PotionsView from './components/PotionsView';
import { Switch, Route } from 'react-router-dom';


function App() {

  const [searchResults, setSearchResults] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    if(searchText) {

    fetch(`https://the-harry-potter-database.herokuapp.com/api/1/characters?search=${searchText}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setSearchResults(data)
      })
    }
  }, [searchText])

  const [searchSpells, setSearchSpells] = useState([])
  const [searchTextSpells, setSearchTextSpells] = useState('')

  useEffect(() => {
    if(searchTextSpells) {

    fetch(`https://the-harry-potter-database.herokuapp.com/api/1/spells?search=${searchTextSpells}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setSearchSpells(data)
      })
    }
  }, [searchTextSpells])

  const [searchPotions, setSearchPotions] = useState([])
  const [searchTextPotions, setSearchTextPotions] = useState('')

  useEffect(() => {
    if(searchTextPotions) {

    fetch(`https://the-harry-potter-database.herokuapp.com/api/1/spells?search=${searchTextPotions}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setSearchPotions(data)
      })
    }
  }, [searchTextPotions])

  return (
    
    <div>
      
      <Navbar />
      <Switch>
          <Route path="/" exact>
            <Home />
            
          </ Route>
          <Route path="/spells">
            <SpellsView searchTextSpells={searchTextSpells} setSearchTextSpells={setSearchTextSpells} keyword={searchTextSpells} searchSpells={searchSpells}/>
          </Route>
          <Route path ="/potions">
            <PotionsView searchTextPotions={searchTextPotions} setSearchTextPotions={setSearchTextPotions} keyword={searchTextPotions} searchPotions={searchPotions}/>
          </Route>

          <Route path="/characters">
            <AlumnosView searchText={searchText} setSearchText={setSearchText} keyword={searchText} searchResults={searchResults}/>
          </Route>


      </Switch>
    </div>
    
    
  );
}

export default App;
