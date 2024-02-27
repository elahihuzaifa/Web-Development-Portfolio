function changeColor() {
  var textArea = document.getElementById("textarea");
  textArea.style.color = event.target.value;
  console.log(event.target.value);
}

function changeFontSize() {
  var textArea = document.getElementById("textarea");
  textArea.style.fontSize = event.target.value + "px";
  console.log(event.target.value);
}

function changeStyle() {
  var textArea = document.getElementById("textarea");
  //   console.log(event.target.innerText);
  var type = event.target.innerText;
  var typeofStyle = event.target.c;
  console.log(textArea.style.fontWeight);
  if (type === "B") {
    if (textArea.style.fontWeight === "bold") {
      textArea.style.fontWeight = "normal";
    } else {
      textArea.style.fontWeight = "bold";
    }
  }

  if (type === "I") {
    if (textArea.style.fontStyle === "italic") {
      textArea.style.fontStyle = "normal";
    } else {
      textArea.style.fontStyle = "italic";
    }
  }
  if (type === "U") {
    if (textArea.style.textDecoration === "underline") {
      console.log(event.target.innerText);
      textArea.style.textDecoration = "none";
    } else {
      textArea.style.textDecoration = "underline";
    }
  }

  var typeofClass = event.target.tagName;

  if (typeofClass === "I") {
    if (textArea.style.textAlign === "center") {
      console.log(event.target.innerText);
      textArea.style.textAlign = "left";
    } else {
      textArea.style.textAlign = "center";
    }
  }
}

function setBackground() {
  var postBackground = document.getElementById("post-background");
  console.log(event.target.src);
  postBackground.style.backgroundImage = "url(" + event.target.src + ")";
}
// old
// function setEmoji() {
//   var textArea = document.getElementById("textarea");
//   textArea.value += event.target.value;
//   console.log(event.target.value);
// }

// new
function setEmoji() {
  var textArea = document.getElementById("textarea");
  console.log(event.target.innerText);
  textArea.value += event.target.innerText;
  // console.log(event.target.tagName);
}
var items = document.getElementById("items");
var textArea = document.getElementById("textarea");
var postButton = document.getElementById("createPost");
var itemsbackground = document.getElementById("itemsbackground");

likeSection.style.visibility = "hidden";

function createPost() {
  if (textArea.value === "") {
    postButton.style.display = "block";
    items.style.display = "block";
    itemsbackground.style.display = "block";
  } else {
    items.style.display = "none";
    itemsbackground.style.display = "none";
    postButton.style.display = "none";
    likeSection.style.display = "block";
    likeSection.style.visibility = "visible";
    textArea.setAttribute("readonly", true);
  }
}

var like = document.getElementById("like");

function likePost() {
  var typeByClass = event.target.id;

  if (typeByClass === "like") {
    if (like.style.color === "blue") {
      like.style.color = "rgb(113, 113, 113)";
    } else {
      like.style.color = "blue";
    }
  }
}
