let tv = document.getElementById("img");
let btn = document.querySelectorAll("li");
// let id = btn.getAttribute("id");

for (let x = 0; x < btn.length; x++) {
  btn[x].addEventListener("click", () => {
    let id = btn[x].getAttribute("id");
    console.log("++++++++++++");

    if (id == "one") {
      tv.src =
        "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg";
      tv.style.height = "50vh";
      tv.style.width = "50vh";
      console.log("hello");
    } else if (id == "two") {
      tv.src =
        "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg";
      tv.style.height = "50vh";
      tv.style.width = "50vh";
      console.log("hello");
    } else if (id == "three") {
      tv.src =
        "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg";
      tv.style.height = "50vh";
      tv.style.width = "50vh";
      console.log("hello");
    } else if (id == "four") {
      tv.src =
        "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg";
      tv.style.height = "50vh";
      tv.style.width = "50vh";
      console.log("hello");
    } else if (id == "five") {
      tv.src =
        "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg";
      tv.style.height = "50vh";
      tv.style.width = "50vh";
      console.log("hello");
    } else if (id == "six") {
      tv.src =
        "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg";
      tv.style.height = "50vh";
      tv.style.width = "50vh";
      console.log("hello");
    } else if (id == "seven") {
      tv.src =
        "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg";
      tv.style.height = "50vh";
      tv.style.width = "50vh";
      console.log("hello");
    } else if (id == "eight") {
      tv.src =
        "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg";
      tv.style.height = "50vh";
      tv.style.width = "50vh";
      console.log("hello");
    } else if (id == "nine") {
      tv.src =
        "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg";
      tv.style.height = "50vh";
      tv.style.width = "50vh";
      console.log("hello");
    }
  });
}
