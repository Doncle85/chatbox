import React, { Component } from 'react'
import './App.css';
import Formulaire from "./Components/Formulaire";
import Message from "./Components/Message";

class App extends Component {
    state = {
        messages : {},
        pseudo: this.props.match.params.pseudo
    }

    addMessage = message => {
        const messages = { ...this.state.messages}
        messages[`message-${Date.now()}`] = message
        this.setState( { messages })
    }
    render() {
        const messages = Object
            .keys(this.state.messages)
            .map(key => (
                <Message
                    pseudo={this.state.messages[key].pseudo}
                    message={this.state.messages[key].message}/>
            ))

        return (
            <div className="box">
                <div>
                    <div className='messages'>
                        <div className="message">
                            { messages }
                        </div>
                    </div>
                </div>
                <Formulaire
                    length={140}
                    pseudo={this.state.pseudo}
                    addMessage={this.addMessage}/>
            </div>
        );
    }
}

export default App;
