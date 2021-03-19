const input = document.querySelector("input");
const answer = document.querySelector('.answer');
const ball = document.querySelector('img');
const answers = ["Mój wywiad donosi: NIE",'Wygląda dobrze','Kto wie?','Zapomnij o tym','Tak - w swoim czasie','Prawie jak tak', 'Nie teraz', 'YES, YES, YES','To musi poczekać','Mam pewne wątpliwości','Możesz na to liczyć', 'Zbyt wcześnie aby powiedzieć','Daj spokój','Absolutnie','Chyba żatrujesz?','Na pewno nie','Zrób to','Prawdopodobnie','Dla mnie rewelacja','Na pewno tak'];

const randomAnswer = (ans) =>{
    const rand = Math.floor(Math.random()*20);
    answer.textContent = ans[rand];
    input.value = "";
    
}
const checkInput = (input) => {
    if(input.value.length !==0){
        if(input.value.slice(-1) !=="?")
        {
            answer.nextElementSibling.textContent = `Na końcu pytania zawsze musi być "?"`;
            answer.textContent = '';
            input.value ="";
        }else{
            setTimeout(function (){
                randomAnswer(answers)}, 1000);
            
            answer.nextElementSibling.textContent = "";
        }        
    }else{
        answer.nextElementSibling.textContent = "Musisz zadać jakieś pytanie!";
        answer.textContent = '';
        input.value = "";
    }
}


ball.addEventListener('click', el=> {
    el.target.classList.add("shake-animation");
    setTimeout(function(){el.target.classList.remove("shake-animation")}, 1000)
    checkInput(input);
})