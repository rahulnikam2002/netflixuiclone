let openFaqPlus1 = document.getElementById('openFaqPlus1');
let openFaqPlus2 = document.getElementById('openFaqPlus2');
let openFaqPlus3 = document.getElementById('openFaqPlus3');
let openFaqPlus4 = document.getElementById('openFaqPlus4');
let openFaqPlus5 = document.getElementById('openFaqPlus5');
let openFaqPlus6 = document.getElementById('openFaqPlus6');


let plusIcon1 = document.getElementById('plusIcon1');
let plusIcon2 = document.getElementById('plusIcon2');
let plusIcon3 = document.getElementById('plusIcon3');
let plusIcon4 = document.getElementById('plusIcon4');
let plusIcon5 = document.getElementById('plusIcon5');
let plusIcon6 = document.getElementById('plusIcon6');


let openFAQ1 = document.querySelector('.openFAQ1');
let openFAQ2 = document.querySelector('.openFAQ2');
let openFAQ3 = document.querySelector('.openFAQ3');
let openFAQ4 = document.querySelector('.openFAQ4');
let openFAQ5 = document.querySelector('.openFAQ5');
let openFAQ6 = document.querySelector('.openFAQ6');

openFaqPlus1.addEventListener('click', () => {
    if (openFAQ1.style.display == "block") {
        openFAQ1.style.display = "none";
        plusIcon1.innerText = "+";

    }
    else {
        openFAQ1.style.display = "block";

        openFAQ2.style.display = "none";
        openFAQ3.style.display = "none";
        openFAQ4.style.display = "none";
        openFAQ5.style.display = "none";
        openFAQ6.style.display = "none";

        plusIcon1.innerText = "X";
    }
})

openFaqPlus2.addEventListener('click', () => {
    if (openFAQ2.style.display == "block") {
        openFAQ2.style.display = "none";
        plusIcon2.innerText = "+";
    }
    else {
        openFAQ2.style.display = "block";

        openFAQ1.style.display = "none";
        openFAQ3.style.display = "none";
        openFAQ4.style.display = "none";
        openFAQ5.style.display = "none";
        openFAQ6.style.display = "none";
        plusIcon2.innerText = "X";
    }
})

openFaqPlus3.addEventListener('click', () => {
    if (openFAQ3.style.display == "block") {
        openFAQ3.style.display = "none";
        plusIcon3.innerText = "+";
    }
    else {
        openFAQ3.style.display = "block";

        openFAQ2.style.display = "none";
        openFAQ1.style.display = "none";
        openFAQ4.style.display = "none";
        openFAQ5.style.display = "none";
        openFAQ6.style.display = "none";
        plusIcon3.innerText = "X";
    }
})

openFaqPlus4.addEventListener('click', () => {
    if (openFAQ4.style.display == "block") {
        openFAQ4.style.display = "none";
        plusIcon4.innerText = "+";
    }
    else {
        openFAQ4.style.display = "block";

        openFAQ2.style.display = "none";
        openFAQ3.style.display = "none";
        openFAQ1.style.display = "none";
        openFAQ5.style.display = "none";
        openFAQ6.style.display = "none";
        plusIcon4.innerText = "X";
    }
})

openFaqPlus5.addEventListener('click', () => {
    if (openFAQ5.style.display == "block") {
        openFAQ5.style.display = "none";
        plusIcon5.innerText = "+";
    }
    else {
        openFAQ5.style.display = "block";

        openFAQ2.style.display = "none";
        openFAQ3.style.display = "none";
        openFAQ4.style.display = "none";
        openFAQ1.style.display = "none";
        openFAQ6.style.display = "none";
        plusIcon5.innerText = "X";
    }
})

openFaqPlus6.addEventListener('click', () => {
    if (openFAQ6.style.display == "block") {
        openFAQ6.style.display = "none";
        plusIcon6.innerText = "+";
        if(openFAQ6.style.display == "none"){
            plusIcon6.innerText = "+";
        }
    }
    else {
        openFAQ6.style.display = "block";

       
        openFAQ2.style.display = "none";
        openFAQ3.style.display = "none";
        openFAQ4.style.display = "none";
        openFAQ5.style.display = "none";
        openFAQ1.style.display = "none";
        plusIcon6.innerText = "X";
    }
})
