import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <h1>Bienvenu toto</h1>
                <table>
                    <thead>
                        <th>Jeux</th>
                        <th>Connecte</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Morpion</td>
                            <td>1/2</td>
                            <td><a href="#">Jouer</a></td>
                        </tr>
                        <tr>
                            <td>Dame</td>
                            <td>1/2</td>
                            <td><a href="#">Jouer</a></td>
                        </tr>
                        <tr>
                            <td>Echec</td>
                            <td>2/2</td>
                            <td><a href="#" class="disabled">Jouer disabled</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Home;
