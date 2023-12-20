function quiz(){
  let wrongCorrect = document.getElementById('wrongcorrect');
  
  let correct = document.getElementById('correct')
  let wrong = document.getElementById('wrong')
  let answer1 = `${wrongCorrect}`;
  let wrong1 = document.getElementById('wrong1')
  let wrong2 = document.getElementById('wrong2');
  let next = document.querySelector('.next')
  correct.addEventListener('click', function(){
    wrongCorrect.innerText = 'YOU ARE CORRCT ,KEEP IT UP';
    wrongCorrect.style.color = 'green';
    wrong1.style.backgroundColor = '';
    wrong2.style.backgroundColor = '';
    wrong.style.backgroundColor = '';
    correct.style.backgroundColor = 'green'

  })

  wrong.addEventListener('click', function(){
    wrong.style.backgroundColor = 'red';
    wrongCorrect.style.color = '';
    wrong1.style.backgroundColor = '';
    wrong2.style.backgroundColor = '';
    correct.style.backgroundColor = '';
    wrongCorrect.innerText = '';
    
  })

  wrong1.addEventListener('click', function(){
    wrong1.style.backgroundColor = 'red';
    wrong2.style.backgroundColor = '';
    wrong.style.backgroundColor = '';
    correct.style.backgroundColor = '';
    wrongCorrect.innerText = '';
    wrongCorrect.style.color = '';
    
  })

  
  wrong2.addEventListener('click', function(){
    wrong2.style.backgroundColor = 'red';
    wrong1.style.backgroundColor = '';
    wrong.style.backgroundColor = '';
    correct.style.backgroundColor = '';
    wrongCorrect.innerText = '';
    wrongCorrect.style.color = '';
  })



    
}     
quiz();
