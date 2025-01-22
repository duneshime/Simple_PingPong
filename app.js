const p1_score = document.querySelector('#p1-score');
const p2_score = document.querySelector('#p2-score');

const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');

const option = document.querySelector('#options')



let max = 6; //default if nothing is selected
let n1 = 0;
let n2 = 0;


option.addEventListener('change', () => {
    max = Number(option.value);  
});

p1.addEventListener('click', () => {
    if(n1 + 1 !== max)
    {
        n1 = Number(p1_score.innerHTML);
        p1_score.innerHTML = n1 + 1;
    }
    else
    {
        alert("player 1 wins!");
        p1_score.innerHTML = "0";
        p2_score.innerHTML = "0";
    }
})

p2.addEventListener('click', () => {
    if(n2 + 1 !== max)
    {
       n2 = Number(p2_score.innerHTML);
       p2_score.innerHTML = n2 + 1;
    }
    else
    {
        alert("player 2 wins!");
        p1_score.innerHTML = "0";
        p2_score.innerHTML = "0";
    }
    
})

reset.addEventListener('click', () =>
{
    p1_score.innerHTML = "0";
    p2_score.innerHTML = "0";
})