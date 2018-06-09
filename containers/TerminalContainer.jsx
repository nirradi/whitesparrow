'use strict';

import Terminal from '../components/Terminal';
import { connect } from 'react-redux';
import actions from '../engine/actions';

const mapStateToProps = (state, ownProps) => ({
	output: state.output
});


const mapDispatchToProps = (dispatch) => {
    return {
        inputEntered: (arg) => { 
			dispatch(actions.echo(arg)); 
		}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Terminal)