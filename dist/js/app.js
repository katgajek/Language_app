document.addEventListener("DOMContentLoaded", function() {

    function sections(){
        const btnConfirm = document.querySelector("#btnIntroConfirm");
        const introSection = document.querySelector(".intro");
        const catSection = document.querySelector(".categories");
        const subcatOne = document.querySelector("#section-true-false");
        const subcatTwo = document.querySelector("#section-furniture");
        const subcatThree = document.querySelector("#section-three");
        const subcatFour = document.querySelector("#section-four");
        const category = document.querySelectorAll(".categories-list li");
        const btnPrev = document.querySelectorAll(".btn-prev");

        function confirm() {
            introSection.style.display = "none";
            catSection.style.display = "block";
        }

        btnConfirm.addEventListener("click", confirm);

        [...btnPrev].forEach(el => {
            el.addEventListener("click", function () {
                this.parentElement.parentElement.style.display = "none";
                catSection.style.display = "block";
            })
        });

        for (let i = 0; i < category.length; i++) {
            category[i].addEventListener("click", function () {

                if (this.children[0].getAttribute("data-cat") === "1") {
                    catSection.style.display = "none";
                    subcatOne.style.display = "block";

                } else if (this.children[0].getAttribute("data-cat") === "2") {
                    catSection.style.display = "none";
                    subcatTwo.style.display = "block";

                } else if (this.children[0].getAttribute("data-cat") === "3") {
                    catSection.style.display = "none";
                    subcatThree.style.display = "block";

                } else if (this.children[0].getAttribute("data-cat") === "4") {
                    catSection.style.display = "none";
                    subcatFour.style.display = "block";
                }
            })
        }
    }

    sections();

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


    //section 1
    function trueOrFalse() {

        const sectionOneList = document.querySelector("#section-one-list");
        const sentences = [
            {answer: "false", phrase: " Las fritas patatas son muy sanas."},
            {answer: "true", phrase: "El presidente es una profesion muy seria."},
            {answer: "true", phrase: " Cuando la gente esta triste, escucha la musica."},
            {answer: "true", phrase: "Osos tienen las cabezas muy grandes."},
            {answer: "true", phrase: "Mi profesor de espanol es baja."},
            {answer: "true", phrase: "Vaticano es un pais pequeno."},
            {answer: "false", phrase: "Cuando hace frio, vamos a la playa."},
            {answer: "false", phrase: " Mi abuela es una mujer muy joven."},
            {answer: "true", phrase: "Varsovia es una ciudad vieja."},
            {answer: "true", phrase: " Michael Jordan es un hombre alto."},
            {answer: "false", phrase: "Baloncesto es un deporte dificil."},
            {answer: "false", phrase: " Chino no es un idioma complicado."},
            {answer: "false", phrase: "Perros no son animales simpaticos."},
            {answer: "true", phrase: "Bill Gates es una persona rica."},
            {answer: "false", phrase: " Justin Bieber es pobre."}

        ];

        let randoms = generateObj(sentences);

        const phrases = randoms.map(random => {
            return sentences[random];

        });

        phrases.forEach(el => {
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


            function yesAnswer() {
                if (el.answer === yesBtn.dataset.bool) {
                    newItem.style.color = "#50c3b7";
                } else {
                    newItem.style.color = "red";
                }
            }

            function noAnswer() {
                if (el.answer === noBtn.dataset.bool) {
                    newItem.style.color = "#50c3b7";
                } else {
                    newItem.style.color = "red";
                }
            }

            yesBtn.addEventListener("click", yesAnswer);
            noBtn.addEventListener("click", noAnswer);

        });
    }

    trueOrFalse();


    //section 2 //

    function furnitureMatch() {

        const words = ["espejo", "ordenador", "mesa", "sofa", "ventana", "cuaderno", "frigorifico"];
        const answers = [
            "sirve para mirarnos por la manana o por la noche",
            "podemos verificar las informaciones, hablar con nuestros amigos",
            "hizo de madera, podemos poner la comida sobre ella",
            "en frente de la tele en cada sala de estar",
            "nos da la luz en una habitacion",
            "la decoracion en un muro de una habitacion",
            "el lugar frio donde ponemos la comida",

       ];

        let word = [];
        for (let i = 0; i < words.length; i++) {
            word.push('<li data-index="' + (i + 1) + '">' + words[i] + '</li>');
        }

        let answer = [];
        for (let i = 0; i < answers.length; i++) {
            answer.push('<li data-index="' + (i + 1) + '">' + answers[i] + '</li>');
        }

        function shuffle(o){
            for(let j,x,i = o.length;i;j = Math.floor(Math.random()*i),x=o[--i],o[i]=o[j],o[j]=x);
            return o;
        }

        answer = shuffle(answer);
        word = shuffle(word);

        $('.source').html(word);
        $('.target').html(answer);

        $(".source li").draggable({
            revert: "invalid",
            revertDuration: 200,
            cursor: "move"
        });

        $(".target li").droppable({
            accept: function(draggable){


                if(parseInt(draggable.data('index'),10) === parseInt($(this).data('index'),10)){
                    return true;
                }else{
                    return false;
                }
            },
            drop: function(event, ui){
                const that =$(this);
                that.css('color', '#50c3b7').effect('bounce');
                that.droppable('disable');
                (ui.draggable).draggable('disable');

            }

        });

    }
    furnitureMatch();

    //section 3

    function guessWeather() {

        const sectionThreeBox = document.querySelector("#section-three-box");
        const weather = [
            {word: "nieve", def: "la cosa blanca durante el invierno"},
            {word: "sol", def: "algo amarillo en el cielo"},
            {word: "nublado", def: "cuando el cielo esta gris o muy sombre"},
            {word: "hace frio", def: "en esta situaction necestias un gorro, una chaqueta, una bufanda, unos guantes"},
            {word: "calor", def: "necesitas un traje de bano, sombrero y hawaianas"},
            {word: "hielo", def: "cuando hace frio esto esta en el rio o en el lago y podemos patinar sobre esto "},
            {word: "otono", def: "la temporada cuando las hojas son de naranja, amarillo y marron"},
            {word: "invierno", def: "la temporada con Papa Noel y la Noche Vieja"},
            {word: "verano", def: "la temporada cuando tenemos las vacaciones y somos muuuy felices :)"},
            {word: "primavera", def: "la temporada con las cosas verdes "},
            {word: "lluvia", def: "la situacion cuando necesitas las paraguas"},
            {word: "tormenta", def: "cunado tienes miedo porque hay mucho ruido, el cielo esta negro o blanco "},

        ];

        let randoms = generateObj(weather);

        const weatherList = randoms.map(random => {
            return weather[random];

        });

        weatherList.forEach(el=>{

            const newItem = document.createElement("div");
            const weatherDef = document.createElement("p");
            const input = document.createElement("input");
            const check = document.createElement("button");

            newItem.classList.add("weatherItem");
            newItem.appendChild(weatherDef);
            newItem.appendChild(input);
            newItem.appendChild(check);
            sectionThreeBox.appendChild(newItem);
            weatherDef.innerText = el.def;
            weatherDef.classList.add("weatherText");
            check.innerText = "verificar";
            check.classList.add("checkBtn");


        function removeGuessedWord() {
            if(input.value === el.word) {
                newItem.parentElement.removeChild(newItem);
            }else{
                input.style.border = "3px solid red";
            }
            const inputs = document.querySelectorAll("input");

            if(inputs.length === 9){
                const finalInfo = document.querySelector(".finalInfo");
                finalInfo.style.opacity = 1;
            }

        }

        check.addEventListener("click", removeGuessedWord);

        });

    }

    guessWeather();

    //section 4

    function slider() {

        const butPrev = document.querySelector("#prevPicture");
        const butNext = document.querySelector("#nextPicture");
        const slide = document.querySelector(".sliderList").children;
        const tab = [];

        for (let i = 0; i < slide.length; i++) {
            tab.push(slide[i]);
        }

        let index = 0;
        tab[index].classList.add('visible');


        const next = function () {
            tab[index].classList.remove('visible');
            index++;
            if (index >= tab.length) {
                index = 0;
            }
            tab[index].classList.add("visible");

        };

        const prev = function () {
            tab[index].classList.remove('visible');
            index--;
            if (index < 0) {
                index = tab.length - 1;
            }

            tab[index].classList.add("visible");
        };

        butPrev.addEventListener("click", prev);
        butNext.addEventListener("click", next);
    }
    slider();

    //section 5a
    function quiz() {
        const exerciseBtn = document.querySelector("#exercise-btn");
        const subCat5 = document.querySelector("#section4ex");
        const answers = document.querySelectorAll(".answers input");

        [...answers].forEach(el=> {
            el.addEventListener("click", function () {
                const datasetVal = el.getAttribute("data-ans");
                 if(datasetVal === "ok"){
                 el.nextElementSibling.style.color = "#50c3b7";
                 }else{
                 el.nextElementSibling.style.color = "red";
                 }
            })
        });

        exerciseBtn.addEventListener("click", function () {
            this.parentElement.parentElement.style = "none";
            subCat5.style.display = "block";
        });
    }
    quiz();

});