'use strict';

export default () => {
    return [
        {
            condition: (state, action) => {
                return (action.type == 'EXEC' && action.args == 'login')
            },
            action: () => {
                alert('you win!');
            }

        }
    ]
}