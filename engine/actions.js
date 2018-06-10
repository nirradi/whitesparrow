'use strict';

export default {
  	echo: (args) => {
		return {
			type: 'ECHO',
			output: args
		}
	},
	exec: (args, prompt) => {
		return {
			type: 'EXEC',
			args: args,
			output: prompt + args
		}
	}

} 