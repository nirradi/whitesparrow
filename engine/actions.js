'use strict';

export default {
  echo: (args) => {
		return {
			type: 'ECHO',
			output: args
		}
	}
} 