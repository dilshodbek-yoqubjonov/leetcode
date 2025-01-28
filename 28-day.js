var cancellable = function (fn, args, t) {
  let a = true;
  let timeout = setTimeout(() => {
    if (a) {
      a = false;
      return fn(...args);
    }
  }, t);
  return function () {
    clearTimeout(timeout);
  };
};

//2715. Timeout Cancellation
