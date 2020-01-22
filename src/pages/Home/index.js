import React, { Component } from 'react';
import './index.css';
import api from '../../services/api';

class Home extends Component {
    state = {
        docs: []
    }
    async componentDidMount() {
        const response = await api.get('/');
        console.log(response.data.docs);
        this.setState({
            docs: response.data.docs
        })
    }

    render() {
        return (

            <table id="customers">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>CPF</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.docs.map(users => (
                        // <div key={URLSearchParams} >
                        //     {users.name}
                        // </div>
                        <tr key={users._id} >
                            <td>{users.name}</td>
                            <td>{users.cpf}</td>
                            <td>{users.age}</td>
                        </tr>
                    ))
                }
                </tbody>

            </table>


        )
    }

}


export default Home;