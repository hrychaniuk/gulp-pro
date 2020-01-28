export const getIncrementor = function() {
    let i = 0;
    return function() {
        return i++;
    }
}