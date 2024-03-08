function submit() {
  var x = document.getElementById("notes").value;
  var questionArr = [];
  xvalue = x.split("\n");
  let obj = {};
  let option_index = 1;
  for (var i = 0; i < xvalue.length; i++) {
    // this will reset your object after each question and answers
    if (xvalue[i] == "") {
      // this will push each obj after each iteration
      if (Object.keys(obj).length > 0) {
        questionArr.push(obj);
        obj = {};
        option_index = 1;
      }
    }
    if (xvalue[i].indexOf("?") !== -1 || xvalue[i].indexOf(":") !== -1) {
      obj.question = xvalue[i];
    } else if (xvalue[i].indexOf("*") !== -1) {
      obj.answer = xvalue[i];
    } else if (xvalue[i].trim() !== "") {
      // Check if option is not empty
      obj["op" + option_index] = xvalue[i];
      option_index++;
    }
  }
  // Push the last object if it exists
  if (Object.keys(obj).length > 0) {
    questionArr.push(obj);
  }
  console.log(questionArr.reverse());
}
