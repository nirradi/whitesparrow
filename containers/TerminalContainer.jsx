'use strict';

import Terminal from '../components/Terminal';
import { connect } from 'react-redux';
import {exec} from '../engine/commandEngine';

const mapStateToProps = (state, ownProps) => ({
    output: state.output,
    prompt: state.terminal.prompt,
});


const mapDispatchToProps = (dispatch) => {
    return {
        inputEntered: (args) => { 
			dispatch(exec(args));
		}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Terminal)