export const getIncrementor = function(inc) {
  let i = 0;
  return function() {
    i = i + inc;
    return i;
  };
};
