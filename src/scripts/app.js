import sections from "./_sections.js";
import trueOrFalse from "./_section_true_false.js";
import furnitureMatch from "./_section_furniture.js";
import guessWeather from "./_section_weather.js";
import slider from "./_section_slider.js";
import quiz from "./_section_quiz.js";

document.addEventListener("DOMContentLoaded", function() {

    sections();
    trueOrFalse();
    furnitureMatch();
    guessWeather();
    slider();
    quiz();

});