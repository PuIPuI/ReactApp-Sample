import React,{ Component } from 'react';
//import axios from 'axios';
//import withRequest from '../lib/withRequest';

class User extends Component{

    /*state = {
        data: []
    };
    */
    constructor(){
        super();
        console.log("constructor");
    };
    
    /*
    async componentDidMount(){
        console.log("componentDidMount");
        const result = await axios.get("https://jsonplaceholder.typicode.com/users");
        this.setState({ data: result.data});
    };
    */

    /*onChange = event =>{
        this.props.onNameChange(event.target.value);
    };*/
      
    render(){
        console.log("render");
        //const {name} = this.props;

        return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                    </tr>

                </thead>
                <tbody>
                    { this.props.data === undefined ? ( <div/>):
                        (this.props.data.map( user => 
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        
                        </tr>
                        )
                    )} 
                </tbody>

            </table>
              
         {/* <div> <input type="text" onChange={this.onChange}></input> </div> */}
        </div>

        );
    }

    
}

//export default withRequest("https://jsonplaceholder.typicode.com/users")(User);
export default User;