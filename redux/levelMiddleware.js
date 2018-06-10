import levels from '../levels/levels';

export default store => next => action => {
    // listeners are provided with a picture 
    // of the world before the action is applied
    let currentLevel = store.getState().levels.currentLevel;

    levels(currentLevel).forEach(function(event) {
        if (event.condition(store.getState(), action))
            event.action(store);
    });
    
    next(action);

};