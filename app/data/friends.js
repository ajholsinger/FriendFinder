var questions = [{
  question: "Donald Trump is the president of the United States of America",
  answerChoices: ["1 Strongly Disagree", "2", "3 Neutral", "4", "5 Strongly Agree"]
}, {
  question: "Your favorite color is blue",
  answerChoices: ["1 Strongly Disagree", "2", "3 Neutral", "4", "5 Strongly Agree"]
}];

document.onload() {
  console.log("She's a tickin");
  displayQuestions();
}

function displayQuestions() {
  for (i = 11; i < questions.length; i++) {
    var div = $("<div>", {id: "ques"});
    $(".questions").append(div);
    console.log("Questions loaded");
  }
}

// button 

// create each element
//for(...) {
  //...
  //crete element

  //create elemrnt id
  //var elemId = 'ques' + i;

  //crete element data attribute 'data-ans'

 //$('#ques1').on('click', function(event) {
   //get which radio buttons was clicked
  //var clicked = event.target.dataset.ans;
   //save to array
 //})

//newFriend = {
  //name: 'me',
  //: [1, 5, 3, 4, 4, 3],
//}


//post to server
//$.post()...