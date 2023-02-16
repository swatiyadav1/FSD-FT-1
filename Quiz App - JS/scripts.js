//first step get all the ellements
//question box
//option box
//next
//score
var quizbox=document.getElementById("questionBox");
var ul=document.getElementById("ul");
var opt1=document.getElementById("opt1");
var opt2=document.getElementById("opt2");
var opt3=document.getElementById("opt3");
var opt4=document.getElementById("opt4");
var nxtbtn = document.getElementById("btnNext");
var scoreCard = document.getElementById("scoreCard");

var quizObj={
    questions:[
        {q:'What is JavaScript?',
        options:['JavaScript is a scripting language used to make the website interactive',' JavaScript is an assembly language used to make the website interactive','JavaScript is a compiled language used to make the website interactive','None'],
    answer:1
    },
    {
        q:'Arrays in JavaScript are defined by which of the following statements?',
        options:[' ordered list of values','ordered list of objects','ordered list of string','ordered list of functions'],
        answer:1
    }

    ],
    index:0,
    load:function(){
        if(this.index<=this.questions.length-1){
            quizbox.innerHTML=this.index+1+" - "+this.question[this.index].q;
            opt1.innerHTML=this.questions[this.index].options[0];
            opt2.innerHTML=this.questions[this.index].options[1];
            opt3.innerHTML=this.questions[this.index].options[2];
            opt4.innerHTML=this.questions[this.index].options[3];
        }
        else{
            quizbox.innerHTML="Quiz Completed";
            ul.style.display="none";
            nxtbtn.style.display="none";

        }
    },
    next:function()
{
    this.index++;
this.load();
},
check:function(elem){
    var id=elem.id.split('');

    if(id[id.length-1]==this.questions[this.index].answer){
        this.score++;
elem.className="correct";
        this.scoreCard();
    }
    else{
elem.className="wrong";
    }


},
score:0,
scoreCard:function(){
scoreCard.innerHTML=this.score+"/"+this.questions.length;

},

preventClick:function(){
    for(let i=0;i<ul.children.length;i++){
        ul.children[i].style.pointerEvents="none";
    }
},
allowClick:function(){
    for(let i=0;i<ul.children.length;i++){
        ul.children[i].style.pointerEvents="auto";
    }
}


}

window.load=quizObj.load();

function button(elem){
quizObj.check(elem);
quizObj.preventClick();
}

function next(){
    quizObj.next();
    quizObj.allowClick();
}
