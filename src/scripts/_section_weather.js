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

export default guessWeather;