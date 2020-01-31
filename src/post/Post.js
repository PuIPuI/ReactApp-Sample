import React,{ Component } from 'react';
//import axios from 'axios';
//import withRequest from '../lib/withRequest';


class Post extends Component{

    /* state = {
        data: []
    }; */

    constructor(){
        super();
        console.log("constructor");
    };
    
    /* async componentDidMount(){
        console.log("componentDidMount");
        const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
        this.setState({ data: result.data});
    }; */

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
                        <td>UserId</td>
                        <td>Id</td>
                        <td>Title</td>
                        <td>Body</td>
                    </tr>

                </thead>
                <tbody>
                    { this.props.data === undefined ? ( <div/>):
                        (
                            this.props.data.map( post => 
                            <tr key={post.id}>
                                <td>{post.userId}</td>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            
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

//export default withRequest("https://jsonplaceholder.typicode.com/posts")(Post) ;
export default Post ;
