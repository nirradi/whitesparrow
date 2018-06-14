'use strict';

import program from './program';

var login = Object.create(program);

login.name = 'login';
login.state = "user";
login.onLoad = () => {
	if (login.state == "user")
		login.out('enter your username: ');
	else
		login.out('you are already logged in');
};

login.run = (input)  => {
	switch (login.state) {
		case 'user': login.out('enter your password: '); login.state = 'password'; break;
		case 'password':
			if (input == "secret") {
				login.out("Access Granted");
				login.state = "logged in";
			}
			else {
				login.state = "user";
			}
			
			login.quit(); 
			break;
		default: 
			login.quit();
	}
}

export { login }; 
