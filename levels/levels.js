import level0 from './level0';
var levels = [
    level0
];

export default (currentLevel) => {
    return levels[currentLevel]();
}