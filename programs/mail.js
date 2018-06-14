'use strict';

'use strict';

import program from './program';
import gameState from '../levels/gameState';

var mail = Object.create(program);

mail.read = () => {
    mail.out(["from: " +  gameState.mail[0].from, gameState.mail[0].content]);
}

mail.name = 'mail';
mail.run = (args, state) => {
	args = args.split(' ');
	let command = args[0];
	if (command in mail)
		return mail[command](args);
	else
    mail.out("bad command");
}


export { mail};
