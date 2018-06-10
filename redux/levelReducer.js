'use strict';

export default (state, action) => {

    switch (action.type) {
        case 'SET_LEVEL':
            return {
                currentLevel: action.level
            }

        default:
            return state || { currentLevel: 0 };
    }

}