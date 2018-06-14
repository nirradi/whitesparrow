'use strict';
import gameState from './gameState';

export default () => {
    return [
        {
            condition: (state, action) => {
                return (state.program[0] == 'login' && action.output == "Access Granted")
            },
            action: () => {
                gameState.terminalCommands.push('mail');
            }

        }
    ]
}