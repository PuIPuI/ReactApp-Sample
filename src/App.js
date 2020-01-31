import React,{ Component, useState  } from 'react';
import './App.css';
//import { render } from '@testing-library/react';
import User from './user/User';
import Post from './post/Post';
import { Route, Link } from 'react-router-dom';
import Request from './lib/Request';
import Chatroom from './chat/Chatroom';
import ChatForm from './chat/ChatForm';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

class App extends Component{
  state = {
    name: "FutureSkill"
  } 

  onNameChange = name => {
    this.setState({ name: name})
  }

  render(){
    const { name } = this.state;
    
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="https://puipui.github.io/ReactApp-Sample/users">Users</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://puipui.github.io/ReactApp-Sample/posts">Posts</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://puipui.github.io/ReactApp-Sample/chat">Chat</NavLink>
              </NavItem>
              </Nav>
            
          </Collapse>
      </Navbar>
      
        <Route path="/users" component={ () =>(
          <Request url="https://jsonplaceholder.typicode.com/users">
            {(data) => <User data={data}/> }
          </Request>
        )} 
        
        /> 
        <Route path="/posts" component={ () => (
          <Request url="https://jsonplaceholder.typicode.com/posts">
            {(data) => <Post data={data}/> }
          </Request>
        )} />
        <Route path="/chat" component={ChatForm}></Route>
        <Route path="/chatroom" component={Chatroom}></Route>

        {/* <Route path="/users" component={User} /> 
        <Route path="/posts" component={Post} /> */} 
        {/* <User name={name} onNameChange={this.onNameChange}/>
        <Post />  */}
      </div>

    );
  }

    
}

export default App;
