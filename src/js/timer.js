export const waitTimer = function(time) {
  return new Promise(function(res, rej) {
    setTimeout(function() {
      res();
    }, time);
  });
};

// -- pending
// -- resolved  .then()
// -- rejected  .catch()
