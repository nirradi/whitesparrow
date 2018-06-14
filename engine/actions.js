'use strict';

export default {
  	echo: (args) => {
		return {
			type: 'ECHO',
			output: args
		}
	},
	exec: (program) => {
		return {
			type: 'EXEC',
			program: program
		}
	},
	quit: () => {
		return {
			type: 'QUIT', 
		}
	},
	input: (args) => {
		return {
			type: 'INPUT',
			output: args
		}
	}

} 