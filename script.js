const heading_percentage = document.getElementById("array_percentage");

const percentageArr = document.querySelectorAll(".percentage");

const progressArr=document.querySelectorAll('.progress_button');



//Total number of questions present in each of the topics


localStorage.setItem('totalQuesPresent-0',36);
localStorage.setItem('totalQuesPresent-1',10);
localStorage.setItem('totalQuesPresent-2',43);
localStorage.setItem('totalQuesPresent-3',36);
localStorage.setItem('totalQuesPresent-4',33);
localStorage.setItem('totalQuesPresent-5',35);
localStorage.setItem('totalQuesPresent-6',21);
localStorage.setItem('totalQuesPresent-7',35);
localStorage.setItem('totalQuesPresent-8',22);
localStorage.setItem('totalQuesPresent-9',38);
localStorage.setItem('totalQuesPresent-10',18);
localStorage.setItem('totalQuesPresent-11',18);
localStorage.setItem('totalQuesPresent-12',6);
localStorage.setItem('totalQuesPresent-13',43);
localStorage.setItem('totalQuesPresent-14',10);

const displayPercentage = (qDone, heading_percentage,progress_button,total_ques_present) => {
  let p = ((qDone / total_ques_present) * 100).toFixed(2);
  console.log(p);
  let l = total_ques_present - qDone;
  heading_percentage.innerText = `${p}% (${qDone}/${total_ques_present} questions done)`;
  progress_button.value=p;
};

window.onload = function () {
  for (let i = 0; i < percentageArr.length; i++) {
    let questions_done = localStorage.getItem(`totalQuesDone-${i}`);
    let total_ques_present=localStorage.getItem(`totalQuesPresent-${i}`);
    console.log(questions_done,total_ques_present);
    
    
    if (questions_done != null) {
      displayPercentage(questions_done, percentageArr[i],progressArr[i],total_ques_present);
    }
    else{
      displayPercentage(0, percentageArr[i],progressArr[i],total_ques_present);
    }
  }
};
