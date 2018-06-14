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

    if (store.getState().program.length == 0)
        window.location.href = "https://www.google.com/search?source=hp&ei=9nkdW8vUDcirsgG4sJC4DA&q=What+should+i+do+now&oq=What+should+i+do+now&gs_l=psy-ab.3..0l10.8568.14474.0.16007.42.27.6.0.0.0.325.3710.0j14j5j1.21.0....0...1.1.64.psy-ab..16.26.3732.6..35i39k1j0i131k1j0i131i67k1j0i67k1j0i10i203k1j0i10k1j0i203k1.127.dZiMMrMqWtE";

};