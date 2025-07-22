function setTimeoutPromisified(duration) {
  return new Promise(function (resolve) {
    setTimeout(resolve,duration);
    });
}

// Promise chaining 
setTimeoutPromisified(1000).then(function () {
  console.log("hi");
  return setTimeoutPromisified(3000);
}).then(function () {
  console.log("hello");
  return setTimeoutPromisified(5000);
}).then(function () {
  console.log("hi there");
})

console.log("this should be printed first");
