import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {

    constructor() {
        super();
        this.state = {
            monsters: [],
            searchString: '',
        }
    }

    onSearchChange = (event) => {
        const searchString = event.target.value.toLowerCase();
        this.setState({ searchString })
    };

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => this.setState({ monsters: data }));
    }

    render() {
        const { monsters, searchString } = this.state;
        const { onSearchChange } = this;

        const filteredMonsters = monsters.filter(monster => {
            return monster.name.toLowerCase().includes(searchString);
        });

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
    };
}

export default App;
