window.onload = function(){
    show(0)
};


let questions = [
    {
        id: 1,
        Question: "What is the full form of RAM?",
        answer:"Random Access Memory",
        option:[
            "Random Access Memory",
            "Randomly Access Memory",
            "Run Access Memory",
            "None of Above"
        ]
    },
    {
        id: 2,
        Question: "How is the National Poet of Pakistan",
        answer:"Allama Muhammad Iqbal",
        option:[
            "Allama Muhammad Iqbal",
            "Faiz Ahmad Faiz",
            "Maqsood Ahmad ",
            "Gul Ahmad"
        ]
    },
    {
        id: 3,
        Question: "As Above as ________",
        answer:"Below",
        option:[
            "Between",
            "Side by side",
            "Below ",
            "Center"
        ]
    }
];


let question_count = 0;
let point = 0;
function next() {
    let user_answer = document.querySelector("li.option.active").innerHTML;
    // Check the User_Answer
    if (user_answer == questions[question_count].answer){
        point +=10;
        console.log(user_answer);
        sessionStorage.setItem("point",point)
    }

    if (question_count == questions.length -1){
        sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`);
        clearInterval(mytime);
        location.href = "end.html";
        return;
    }





    question_count++;
    console.log(question_count);
    show(question_count);


}

// Long way to get the question and option from Object array
/*function show(question_count) {
let question = document.getElementById("questions");
question.innerHTML = "<h2>" + questions[question_count].Question + "</h2>" +
    "<ul class='option_group'>"
    + "<li class='option'>"+questions[question_count].option[0] + "</li>"+ "</ul>"
    + "<ul class='option_group'>" + "<li class='option'>"+questions[question_count].option[1] + "</li>"+ "</ul>"
    + "<ul class='option_group'>" + "<li class='option'>"+questions[question_count].option[2] + "</li>"+ "</ul>"
    + "<ul class='option_group'>" + "<li class='option'>"+questions[question_count].option[3] + "</li>"+ "</ul>";
    toggleActive();
}*/

// Short way to get the question and option from Object array
function show(question_count) {
    let question = document.getElementById("questions");
    question.innerHTML= `<h2>Q${question_count + 1}.${questions[question_count].Question}</h2>
<ul class="option_group">
                    <li class="option ">${questions[question_count].option[0]}</li>
                    <li class="option">${questions[question_count].option[1]}</li>
                    <li class="option">${questions[question_count].option[2]}</li>
                    <li class="option">${questions[question_count].option[3]}</li>
                </ul>

`;
    toggleActive();
}

function toggleActive() {
let option = document.querySelectorAll("li.option");
for (let i = 0;i < option.length; i++) {
option[i].onclick = function () {
for (let j = 0; j < option.length; j++){
    if (option[j].classList.contains("active")){
        option[j].classList.remove("active")
    }
  }
option[i].classList.add("active")
}
}
}




function submitform(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["uname"].value;
    // student name
    sessionStorage.setItem("name",name );
    location.href = "quiz.html";
console.log(name)
}