/** 
 * Created by Dattlee on 29/11/2015. 
 */

window.onload=function() {

//create an area for the animation, 800=x, 600=y 
    var paper = new
        Raphael(document.getElementById("svg"), 800, 600);
//draw paper on 
    var backGround = paper.rect(0, 0, 800, 600);
    backGround.attr({fill: "black"});

    var options = {};
    options.time = 3000;
    var cont = false;


    var music = new Audio('VPT_Intro.mp3');

////                             //// 
////      Start Button          //// 
////                           //// 
    var startRect = paper.rect(300, -125, 200, 50);
    var text1 = paper.text(400, -95, "CLICK TO PLAY")

    startRect.attr(
        {
            gradient: '90-#526c7a-#64a0c1',
            stroke: '#3b4449',
            'stroke-width': 3,
            'stroke-linejoin': 'round',
        }
    );

    text1.attr({"font-family": "ralewayThin", "font-size": 20, "fill": "white"}); 


        var startButton = paper.set([startRect, text1]).attr({cursor: "pointer"});

    function begin() {
        startButton.animate({transform: "t0 400 s2"},
            500, 'bounce');
    }

    begin();

    startButton.hover(function () {
        startButton.g = startButton.glow({color: "#FFF", width: 30});
    },
        function () {startButton.g.remove();}
    );


    startButton.mousedown(startAnimation);

////                             //// 
////      Start Animation       //// 
////                           //// 


    function startAnimation() {
        startButton.g.remove();

        backGround.attr({"fill": "white"});
        startButton.remove();
        music.play();

        var tetronimoT = paper.path("M 475 700  l 0 -50 l -50 0 l 0 -50 l -50 0 l 0 50 l -50 0 l 0 50 z").attr(
            {
                gradient: '90-#0099ff-#b3e0ff',
                stroke: '#3b4449',
                'stroke-width': 5,
                'stroke-linejoin': 'round',
            }
        );

        tetronimoT.animate({transform: "T0,-350"}, 350, "elastic");


        var tetronimoL = paper.path("M 1000 250  l -100 0 l 0 50 l 50 0 l 0 100 l 50 0 z").attr(
            {
                gradient: '90-#ff1a1a-#ffcccc',
                stroke: '#3b4449',
                'stroke-width': 5,
                'stroke-linejoin': 'round',
            }
        );
        var tetronimoS = paper.path("M -25 250  l 0 -50 l -100 0 l 0 50 l -50 0 l 0 50 l 100 0 l 0 -50 z").attr(
            {
                gradient: '90-#00ff00-#ccffcc',
                stroke: '#3b4449',
                'stroke-width': 5,
                'stroke-linejoin': 'round',
            }
        );
        var tetronimoZ = paper.path("M 325 1000  l 0 -50 l -100 0 l 0 -50 l -50 0 l 0 100 z").attr(
            {
                gradient: '90-#ffff00-#ffffcc',
                stroke: '#3b4449',
                'stroke-width': 5,
                'stroke-linejoin': 'round',
            }
        );
        var tetronimoO = paper.path("M 525 -50  l 0 -100 l -100 0 l  0 100 z").attr(
            {
                gradient: '90-#ff00ff-#ffccff',
                stroke: '#3b4449',
                'stroke-width': 5,
                'stroke-linejoin': 'round',
            }
        );
        var tetronimoI = paper.path("M 475 650  l -50 0 l 0 200 l 50 0 z").attr(
            {
                gradient: '90-#00ff00-#ccffcc',
                stroke: '#3b4449',
                'stroke-width': 5,
                'stroke-linejoin': 'round',
            }
        );
        var tetronimoT2 = paper.path("M 1125 100  l 0 -50 l 50 0 l 0 -50  l 50 0 l 0 150 l -50 0 l 0 -50 z").attr(
            {
                gradient: '90-#ffff00-#ffffcc',
                stroke: '#3b4449',
                'stroke-width': 5,
                'stroke-linejoin': 'round',
            }
        );
        var tetronimoL2 = paper.path("M -150 -150  l 0 -50 l -100 0 l 0 -50 l -50 0 l 0 100 z").attr(
            {
                gradient: '90-#ff1a1a-#ffcccc',
                stroke: '#3b4449',
                'stroke-width': 5,
                'stroke-linejoin': 'round',
            }
        );
        var tetronimoO2 = paper.path("M -50 650  l -100 0 l 0 100 l 100 0 z").attr(
            {
                gradient: '90-#ff00ff-#ffccff',
                stroke: '#3b4449',
                'stroke-width': 5,
                'stroke-linejoin': 'round',
            }
        );


        setTimeout(function () {
            tetro2(tetronimoL);
        }, 400);
        setTimeout(function () {
            tetro3(tetronimoS);
        }, 800);
        setTimeout(function () {
            tetro4(tetronimoZ);
        }, 1200);
        setTimeout(function () {
            tetro5(tetronimoO);
        }, 1200);
        setTimeout(function () {
            tetro6(tetronimoI);
        }, 1600);
        setTimeout(function () {
            tetro7(tetronimoT2);
        }, 1600);
        setTimeout(function () {
            tetro8(tetronimoL2);
        }, 1600);
        setTimeout(function () {
            tetro9(tetronimoO2);
        }, 1600);

        var mesh = paper.set([tetronimoL, tetronimoS, tetronimoZ, tetronimoO, tetronimoI, tetronimoT2, tetronimoL2, tetronimoO2]);

        setTimeout(function () {
            leave(mesh)
        }, 2000);
        setTimeout(function () {
            removeElement(mesh)
        }, 4000);

        setTimeout(function () {
            removeElement(tetronimoT)
        }, 2800);
        setTimeout(spin, 2800);

        if (cont === false) {
            setTimeout(change, 10800);
            cont = true;
            setTimeout(grow, 6800);
        }
        else {
            setTimeout(theEnd, 7500);
            setTimeout(end, 10000);
        }

    };



    function spin () {
        var tetronimoT = paper.path("M 475 350  l 0 -50 l -50 0 l 0 -50 l -50 0 l 0 50 l -50 0 l 0 50 z").attr(
            {
                gradient: '90-#0099ff-#b3e0ff',
                stroke: '#3b4449',
                'stroke-width': 5,
                'stroke-linejoin': 'round',
            }
        );

        tetronimoT.animate({transform: "R720"}, 4000, "linear");

        setTimeout(function () {
            removeElement(tetronimoT)
        }, 4000);
    };

    function grow () {
        var tetronimoT = paper.path("M 475 350  l 0 -50 l -50 0 l 0 -50 l -50 0 l 0 50 l -50 0 l 0 50 z").attr(
            {
                gradient: '90-#ff1a1a-#ffcccc',
                stroke: '#3b4449',
                'stroke-width': 5,
                'stroke-linejoin': 'round',
            }
        );
        tetronimoT.animate({transform: "R720 s5"}, 4000, "linear");
        setTimeout(function (){removeElement(tetronimoT)}, 4000)

    };

    function change () {
        backGround.attr({fill: "black"});
        startAnimation();
    };

    function theEnd() {
        var fin = paper.image("images/the_end.jpg", 400, 300, 1, 1);
        fin.animate({transform:"S1000"}, 1000, "bounce");
        setTimeout(function(){removeElement(fin)}, 2500)
    };


    function end () {
        var thumbsUp = paper.image("images/thumbs_up.gif", 0, -100, 700, 700);
        var replay = paper.image("images/replay.png", 350, 250, 100, 100);
        replay.attr({cursor: "pointer"});
        replay.mousedown(startAnimation);
        replay.mousedown(function(){removeElement(replay)});
        replay.mousedown(function(){removeElement(thumbsUp)});
        backGround.attr({fill:"white"});
        cont = false;
    }


////                             //// 
////    Enter Tetris Blocks     //// 
////                           //// 

    function tetro2 (el){
        el.animate({transform:"T-475,0"}, 350, "bounce");
        backGround.attr({fill:"red"});
    }
    function tetro3 (el){
        el.animate({transform:"T450,0"}, 350, "bounce");
        backGround.attr({fill:"blue"});
    }
    function tetro4 (el){
        el.animate({transform:"T100,-600"}, 350, "bounce");
        backGround.attr({fill:"green"});
    }
    function tetro5 (el){
        el.animate({transform:"T0,300"}, 350, "bounce");
        backGround.attr({fill:"yellow"});
    }
    function tetro6 (el){
        el.animate({transform:"T0,-300"}, 200, "backIn");
        backGround.attr({fill:"pink"});
    }
    function tetro7 (el){
        el.animate({transform:"T-600,200"}, 200, "backIn");
        backGround.attr({fill:"orange"});
    }
    function tetro8 (el){
        el.animate({transform:"T475,400"}, 200, "backIn");
        backGround.attr({fill:"violet"});
    }
    function tetro9 (el){
        el.animate({transform:"T325,-300"}, 200, "backIn");
        backGround.attr({fill:"purple"});
    }

    function leave(el){
        el.animate({transform:"R360"},1600);
        backGround.attr({fill:"black"});
    }
    function removeElement(el){
        el.remove();
    }

};