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

export default furnitureMatch;