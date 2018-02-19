function trueOrFalse() {

    const sectionOneList = document.querySelector("#section-one-list");
    const sentences = [
        {answer:"false", phrase:" Las fritas patatas son muy sanas."},
        {answer: "true", phrase: "El presidente es una profesion muy seria."},
        {answer: "true", phrase: " Cuando la gente esta triste, escucha la musica."},
        {answer: "true", phrase: "Osos tienen las cabezas muy grandes."},
        {answer: "true", phrase: "Mi profesor de espanol es baja."},
        {answer: "true", phrase: "Vaticano es un pais pequeno."},
        {answer:"false", phrase: "Cuando hace frio, vamos a la playa."},
        {answer:"false", phrase: " Mi abuela es una mujer muy joven."},
        {answer: "true", phrase: "Varsovia es una ciudad vieja."},
        {answer: "true", phrase: " Michael Jordan es un hombre alto."},
        {answer:"false", phrase: "Baloncesto es un deporte dificil."},
        {answer:"false", phrase: " Chino no es un idioma complicado."},
        {answer:"false", phrase: "Perros no son animales simpaticos."},
        {answer: "true", phrase: "Bill Gates es una persona rica."},
        {answer:"false", phrase: " Justin Bieber es pobre."}

    ];

    function generateObj(el) {
        let randoms = [];
        for (let i = 0; i<5; i++) {
            let x = Math.floor(Math.random() * el.length);
            while (randoms.indexOf(x) !== -1) {
                x = Math.floor(Math.random() * el.length);
            }
            randoms.push(x);
        }
        return randoms;
    }


    let randoms = generateObj(sentences);

    const phrases = randoms.map(random => {
        return sentences[random];

    });

    phrases.forEach(el=> {
        const newItem = document.createElement("li");
        const yesBtn = document.createElement("button");
        const noBtn = document.createElement("button");
        newItem.innerText = el.phrase;
        sectionOneList.appendChild(newItem);
        yesBtn.innerText = "verdadero";
        noBtn.innerText = "falso";
        sectionOneList.appendChild(yesBtn);
        sectionOneList.appendChild(noBtn);
        yesBtn.classList.add("btn-true-false");
        noBtn.classList.add("btn-true-false");
        yesBtn.dataset.bool = "true";
        noBtn.dataset.bool = "false";


        function yesAnswer(){
            if(el.answer === yesBtn.dataset.bool){
                newItem.style.color="#50c3b7";
            }else{
                newItem.style.color = "red";
            }
        }

        function noAnswer(){
            if(el.answer === noBtn.dataset.bool){
                newItem.style.color = "#50c3b7";
            }else{
                newItem.style.color = "red";
            }
        }

        yesBtn.addEventListener("click", yesAnswer);
        noBtn.addEventListener("click", noAnswer);

    });


}

export default trueOrFalse;

