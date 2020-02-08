const waitingEvent = function(el, callback, eventType = 'click') {
  el = document.querySelector(el);
  if (!el) return;

  el.addEventListener(eventType, callback);

  return {
    clear() {
      el.removeEventListener(eventType, callback);
    },
  };
};

export { waitingEvent };
