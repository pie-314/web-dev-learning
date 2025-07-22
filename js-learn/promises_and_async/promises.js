//set setTimeout


function  setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

function callback() {
  console.log("3 seconds has passed");
}

setTimeoutPromisified(3000).then(callback);
