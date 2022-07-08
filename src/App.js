import './App.css';
import { Component, useEffect, useState } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';


const App = () => {
    const [searchField, setSearchField] = useState('');
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setMonsters(data));
    }, [])

    const onSearchChange = (event) => {
        const searchString = event.target.value.toLowerCase();
        setSearchField(searchString);
    };

    useEffect(() => {
        const newFilteredMonsters = monsters.filter(monster => {
            return monster.name.toLowerCase().includes(searchField);
        });
        setFilteredMonsters(newFilteredMonsters);
    }, [monsters, searchField]);

    return (
        <div className="App">
            <h1 className='app-title'>MONSTERS ROLODEX</h1>
            <SearchBox
                className={'search-box'}
                placeholder={'search monsters'}
                onSearchChangeHandler={onSearchChange}
            />
            <CardList monsters={filteredMonsters} />
        </div>
    );
}

export default App;
