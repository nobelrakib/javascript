//Window objects / methods / properties

//Alert method
// alert("Hello world ");

// //Prompt
// const input = prompt();
// alert(input);

//Confirm often used when you are deleting something

// if (confirm("Are you sure")) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

let val;

//outer width and height
val = window.outerHeight;
val = window.outerWidth;

//inner width and height
val = window.innerHeight;
val = window.innerWidth;

//Location object
val = window.location;
// val = window.location.hostname;
// val = window.location.port;

//redirect
// window.location.href = "http://google.com";

//Navigator object
val = window.navigator;
// val = window.navigator.appName;
val = window.navigator.platform;
val = window.navigator.language;

console.log(val);
