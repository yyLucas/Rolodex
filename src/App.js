import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

    constructor() {
        super();
        this.state = {
            monsters: [],
            searchString: '',
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => this.setState({ monsters: data }));
    }

    render() {
        const filteredMonsters = this.state.monsters.filter(monster => {
            return monster.name.toLowerCase().includes(this.state.searchString);
        });

        return (
            <div className="App">
                <input
                    className='search-box'
                    type='search'
                    placeholder='search monsters'
                    onChange={(event) => {
                        const searchString = event.target.value.toLowerCase();
                        this.setState({searchString})
                    }}
                />
                {filteredMonsters.map(monster => {
                    return (
                        <div key={monster.id}>
                            <h1>{monster.name}</h1>
                        </div>
                    );
                })}
            </div>
        );
    };
}

export default App;
