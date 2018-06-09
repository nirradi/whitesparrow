import React, { Component } from 'react';
import TerminalOutput from './TerminalOutput';
import TerminalInput from './TerminalInput';

class Terminal extends Component {
    componentDidUpdate() {
        var out = document.getElementById("terminal");
        out.scrollTop = out.scrollHeight - out.clientHeight; 
    }
    
    render() {
        
        return (
            <div>
				<TerminalOutput value={this.props.output}/>
				<TerminalInput 
					prompt={this.props.prompt}
					disabled={this.props.inputDisabled} 
					inputValue={this.props.inputValue} 
					onEnter={this.props.inputEntered} 
					availableCommands={Object.keys(this.props.availableCommands)}
				/>
			</div>
        );
    }
}

Terminal.defaultProps = {
	output: ['hello'],
	availableCommands: {'abc' : 123},
	inputEntered: () => {},
	inputDisabled: false,
	prompt: ">>>",
	
}

export default Terminal;