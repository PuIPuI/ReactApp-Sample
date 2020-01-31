import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import { Redirect } from 'react-router-dom';

import MessageList from './MessageList';
import MessageForm from './MessageForm';

class Chatroom extends Component{
    state = {
        socket: null,
        messages: [
            { text: "Hi", member: "FutureSkill"},
            { text: "Hello", member: "Mark"},
            { text: "Good Bye", member: "FutureSkill"},
            { text: "Bye", member: "Mark"},

        ]
    };

    componentDidMount(){
        if(this.state.socket === null){
            const socket = socketIOClient("http://172.20.10.6:3001/");
            socket.on("message", message => {
                this.addMessage(message);
            });
            this.setState({ socket: socket});
        }
        
    }

    onMessageSend = message => {
        this.addMessage(message);
        this.state.socket.emit("emit",{...message});
    }

    addMessage = message =>{
        this.setState({ messages: [...this.state.messages,{...message} ] });
    }

    render(){

         console.log("name " ,this.props.location.name);
        if(this.props.location.name === null || this.props.location.name === undefined  ){
            return <Redirect to="/chat"></Redirect>
        }
        const { name } = this.props.location;
        return(
            <div>
                <MessageList messages={this.state.messages}/>
                <MessageForm onMessageSend={this.onMessageSend} currentMember={name}/>
            </div>
        )
    }

}

export default Chatroom;