let input = document.querySelector('.input-text');
let wordcount = document.querySelector('.word-count');
let Character = document.querySelector('.Character');



input.addEventListener("input", () => {
    ////Words
    let count = 0;
    let split = input.value.split(' ');

    for (let i = 0; i < split.length; i++) {
        if (split[i] != "") {
            count += 1;
        }
    }
    wordcount.textContent = count;

    ///////Character
    Character.innerHTML = input.value.trim().length;

})