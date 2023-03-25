var kanvas = document.getElementById('kanvas');
var ctxKanvas = kanvas.getContext('2d');
function kanvasCrtanje(){
    var gore = 200,
        dole = 250,
        reverser = 50;
        ctxKanvas.fillStyle = 'rgb(255, 214, 117)';
        ctxKanvas.clearRect(0, 0, 650, 450);
        ctxKanvas.fillRect(0,0,650,450);
    for(let x = 0; x <= 650; x += 50){
        ctxKanvas.beginPath();
        ctxKanvas.strokeStyle = 'rgba(0, 0, 0, 0.5)';
        ctxKanvas.moveTo(x, 0);
        ctxKanvas.lineTo(x, 450);
        ctxKanvas.stroke();
        ctxKanvas.closePath();
    }
    for(let y = 0; y <= 450; y += 50){
        ctxKanvas.beginPath();
        ctxKanvas.strokeStyle = 'rgba(0,0,0,0.5)';
        ctxKanvas.moveTo(0, y);
        ctxKanvas.lineTo(650, y);
        ctxKanvas.stroke();
        ctxKanvas.closePath();
    }
    for(var x = 0; x <= 650; x += 50){
        if(x >= 100 && x <= 550){
            ctxKanvas.beginPath();
            ctxKanvas.strokeStyle = 'rgb(0,0,0)';
            ctxKanvas.moveTo(x, gore);
            ctxKanvas.lineTo(x, gore + 50);
            ctxKanvas.moveTo(x, gore);
            ctxKanvas.lineTo(x + reverser, gore);
            ctxKanvas.stroke();
            ctxKanvas.beginPath();
            ctxKanvas.strokeStyle = 'rgb(0,0,0)';
            ctxKanvas.moveTo(x, dole);
            ctxKanvas.lineTo(x, dole - 50);
            ctxKanvas.moveTo(x, dole);
            ctxKanvas.lineTo(x + reverser, dole)
            ctxKanvas.stroke();
            if(x < 300){
                gore -= 50;
                dole += 50;
            }
            else if(x > 300){
                gore += 50;
                dole -= 50;
                // pazi za reverser ako bude bugova na vrhovima baklava, nisam siguran je li se 100% uklaplja sa borderom
                reverser = -50
            }
        }
    }
}


function loadIgru(n){
    function prviIgracKanvasTekst(){
        ctxKanvas.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctxKanvas.fillRect(0,0,650,450);
        var string = "PRVI IGRAC!ODABERI STRANU",
            array = string.split("!"),
            fontSize = 50,
            x = 187,
            y = 100;
        ctxKanvas.beginPath();
        ctxKanvas.font = fontSize + "px italic bold Arial";
        ctxKanvas.fillStyle = "rgb(245, 174, 8)";
        for(var i = 0; i < array.length; i++){
            ctxKanvas.fillText(array[i], x, y);
            y += fontSize;
            x -= 80;
        }
        ctxKanvas.closePath
    }
    prviIgracKanvasTekst();
    
    function drugiIgracKanvasTekst(){
        ctxKanvas.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctxKanvas.fillRect(0,0,650,450);
        var string = "DRUGI IGRAC!ODABERI STRANU",
            array = string.split("!"),
            fontSize = 50,
            x = 187,
            y = 100;
        ctxKanvas.beginPath();
        ctxKanvas.font = fontSize + "px italic bold Arial";
        ctxKanvas.fillStyle = "rgb(245, 174, 8)";
        for(var i = 0; i < array.length; i++){
            ctxKanvas.fillText(array[i], x, y);
            y += fontSize;
            x -= 65;
        }
        ctxKanvas.closePath
    }

    function lijevinick(){
        var nick = prompt("Unesi nick (max 5 slova):", 'Blue');
        if (nick == null || nick == "Igrac1");
        lnick = nick.slice(0, 5);
        if(nick == null){
            lnick = 'Blue';
        }
        document.getElementById("lijevinick").innerHTML = lnick;
        ctxKanvas.clearRect(0,0,650,450);
        if(n == 1){
        kanvasCrtanje();
        }
        else if(n == 2){
        kanvasCrtanje2();
        }
        else if(n == 3){
            kanvasCrtanje3();
        }
        drugiIgracKanvasTekst();
    }
    function desninick(){
         var nick = prompt("Unesi nick (max 5 slova):", 'Red');
         if (nick == null || nick == "Igrac1");
            dnick = nick.slice(0, 5);
         if(nick == null){
             dnick = 'Red';
         }
         document.getElementById("desninick").innerHTML = dnick;
         if(n == 1){
        kanvasCrtanje();
        }
        else if(n == 2){
        kanvasCrtanje2();
        }
        else if(n == 3){
            kanvasCrtanje3();
        }
         drugiIgracKanvasTekst();
    }

    var lflag = 0;
    var dflag = 0;
    kanvas.onclick = function(event){
        var x = event.offsetX;
        if(x <= 325 && lflag == 0){
            lijevinick();
            lflag = 1;
        }
        if(dflag && lflag == 1){
            if(n == 1){
                igra();
            }
            else if(n == 2){
                igra2();
            }
            else if(n == 3){
                igra3();
            }
        }
        if(x > 325 && dflag == 0){
            desninick();
            dflag = 1;
        }
        if(dflag && lflag == 1){
            if(n == 1){
                igra();
            }
            else if(n == 2){
                igra2();
            }
            else if(n == 3){
                igra3();
            }
        }
    }
}
    
function igra(){
    kanvasCrtanje();

    ctxKanvas.beginPath();
    ctxKanvas.strokeStyle = 'rgb(0,0,0)';
    ctxKanvas.moveTo(150, 200);
    ctxKanvas.lineTo(150, 250);
    ctxKanvas.stroke();
    ctxKanvas.closePath();
    ctxKanvas.beginPath();
    ctxKanvas.strokeStyle = 'blue';
    ctxKanvas.moveTo(100, 200);
    ctxKanvas.lineTo(150, 250);
    ctxKanvas.stroke();
    ctxKanvas.closePath();
    ctxKanvas.beginPath();
    ctxKanvas.strokeStyle = 'blue';
    ctxKanvas.moveTo(100, 250);
    ctxKanvas.lineTo(150, 200);
    ctxKanvas.stroke();
    ctxKanvas.closePath();

    ctxKanvas.beginPath();
    ctxKanvas.strokeStyle = 'rgb(0,0,0)';
    ctxKanvas.moveTo(300, 50);
    ctxKanvas.lineTo(350,50);
    ctxKanvas.stroke();
    ctxKanvas.closePath();
    ctxKanvas.beginPath();
    ctxKanvas.strokeStyle = 'blue';
    ctxKanvas.moveTo(300, 0);
    ctxKanvas.lineTo(350, 50);
    ctxKanvas.stroke();
    ctxKanvas.closePath();
    ctxKanvas.beginPath();
    ctxKanvas.strokeStyle = 'blue';
    ctxKanvas.moveTo(350, 0);
    ctxKanvas.lineTo(300, 50);
    ctxKanvas.stroke();
    ctxKanvas.closePath();

    ctxKanvas.beginPath();
    ctxKanvas.strokeStyle = 'rgb(0,0,0)';
    ctxKanvas.moveTo(300, 400);
    ctxKanvas.lineTo(350, 400);
    ctxKanvas.stroke();
    ctxKanvas.closePath();
    ctxKanvas.beginPath();
    ctxKanvas.strokeStyle = 'red';
    ctxKanvas.moveTo(300, 450);
    ctxKanvas.lineTo(350, 400);
    ctxKanvas.stroke();
    ctxKanvas.closePath();
    ctxKanvas.beginPath();
    ctxKanvas.strokeStyle = 'red';
    ctxKanvas.moveTo(350, 450);
    ctxKanvas.lineTo(300, 400);
    ctxKanvas.stroke();
    ctxKanvas.closePath();

    ctxKanvas.beginPath();
    ctxKanvas.strokeStyle = 'rgb(0,0,0)';
    ctxKanvas.moveTo(500, 200);
    ctxKanvas.lineTo(500, 250);
    ctxKanvas.stroke();
    ctxKanvas.closePath();
    ctxKanvas.beginPath();
    ctxKanvas.strokeStyle = 'red';
    ctxKanvas.moveTo(550, 200);
    ctxKanvas.lineTo(500, 250);
    ctxKanvas.stroke();
    ctxKanvas.closePath();
    ctxKanvas.beginPath();
    ctxKanvas.strokeStyle = 'red';
    ctxKanvas.moveTo(550, 250);
    ctxKanvas.lineTo(500, 200);
    ctxKanvas.stroke();
    ctxKanvas.closePath();

    var korak = 3;
    var plavi = true;
    var crveni = false;
    var crvenipoeni = 2;
    var plavipoeni = 2;
    var flag1 = 0,
        flag2 = 0,
        flag3 = 0,
        flag4 = 0,
        flag5 = 0,
        flag6 = 0,
        flag7 = 0,
        flag8 = 0,
        flag9 = 0,
        flag10 = 0,
        flag11 = 0,
        flag12 = 0,
        flag13 = 0,
        flag14 = 0,
        flag15 = 0,
        flag16 = 0,
        flag17 = 0,
        flag18 = 0,
        flag19 = 0,
        flag20 = 0,
        flag21 = 0,
        flag22 = 0,
        flag23 = 0,
        flag24 = 0,
        flag25 = 0,
        flag26 = 0,
        flag27 = 0,
        flag28 = 0,
        flag29 = 0,
        flag30 = 0,
        flag31 = 0,
        flag32 = 0,
        flag33 = 0,
        flag34 = 0,
        flag35 = 0,
        flag36 = 0,
        flag37 = 0,
        flag38 = 0,
        flag39 = 0,
        flag40 = 0,
        flag41 = 0,
        flag42 = 0,
        flag43 = 0,
        flag44 = 0,
        flag45 = 0,
        flag46 = 0,
        flag47 = 0,
        flag48 = 0,
        flag49 = 0,
        flag50 = 0,
        flag51 = 0,
        flag52 = 0,
        flag53 = 0,
        flag54 = 0,
        flag55 = 0,
        flag56 = 0,
        flag57 = 0,
        flag58 = 0,
        flag59 = 0,
        flag60 = 0,
        zatvori1 = 0,
        zatvori2 = 0,
        zatvori3 = 0,
        zatvori4 = 0,
        zatvori5 = 0,
        zatvori6 = 0,
        zatvori7 = 0,
        zatvori8 = 0,
        zatvori9 = 0,
        zatvori10 = 0,
        zatvori11 = 0,
        zatvori12 = 0,
        zatvori13 = 0,
        zatvori14 = 0,
        zatvori15 = 0,
        zatvori16 = 0,
        zatvori17 = 0,
        zatvori18 = 0,
        zatvori19 = 0,
        zatvori20 = 0,
        zatvori21 = 0,
        zatvori22 = 0,
        zatvori23 = 0,
        zatvori24 = 0,
        zatvori25 = 0,
        zatvori26 = 0,
        zatvori27 = 0,
        zatvori28 = 0,
        zatvori29 = 0,
        zatvori30 = 0,
        zatvori31 = 0,
        zatvori32 = 0,
        zatvori33 = 0,
        zatvori34 = 0,
        zatvori35 = 0,
        zatvori36 = 0,
        zatvori37 = 0;

        ctxKanvas.fillStyle = 'red';
        ctxKanvas.fillRect(600, 200, 50, 50);
        var pogodak = 0;

    kanvas.onclick = function(event){
        if(zatvori1 == 1 && zatvori2 == 1 && zatvori3 == 1 && zatvori4 == 1 && zatvori5 == 1 && zatvori6 == 1 && zatvori7 == 1 && zatvori8 == 1 && zatvori9 == 1 && zatvori10 == 1 && zatvori11 == 1 && zatvori12 == 1 && zatvori13 == 1 && zatvori14 == 1 && zatvori15 == 1 && zatvori16 == 1 && zatvori17 == 1 && zatvori18 == 1 && zatvori19 == 1 && zatvori20 == 1 && zatvori21 == 1 && zatvori22 == 1 && zatvori23 == 1 && zatvori24 == 1 && zatvori25 == 1 && zatvori26 == 1 && zatvori27 == 1 && zatvori28 == 1 && zatvori29 == 1 && zatvori30 == 1 && zatvori31 == 1 && zatvori32 == 1 && zatvori33 == 1 && zatvori34 == 1 && zatvori35 == 1 && zatvori36 == 1 && zatvori37 == 1){
            ctxKanvas.fillStyle = 'rgb(0,0,0,0.7)';
            ctxKanvas.fillRect(0,0,650,450);
            if(crvenipoeni>plavipoeni){
                ctxKanvas.font = '90px bold';
                ctxKanvas.fillStyle = 'blue';
                ctxKanvas.fillText('POBJEDNIK JE', 15, 70);
                ctxKanvas.fillText(lnick, 250, 170);
            }
            else if(plavipoeni>crvenipoeni){
                ctxKanvas.font = '90px bold';
                ctxKanvas.fillStyle = 'red';
                ctxKanvas.fillText('POBJEDNIK JE', 15, 70);
                ctxKanvas.fillText(dnick, 250, 170);
            }
            else if(crvenipoeni==plavipoeni){
                ctxKanvas.font = '100px bold';
                ctxKanvas.fillStyle = 'yellow';
                ctxKanvas.fillText('NEMA POBJEDNIKA', 0, 110);
            }
            ctxKanvas.fillStyle = 'black';
            ctxKanvas.fillRect(150, 200, 350, 75);
            ctxKanvas.fillStyle = 'rgb(245,174,8)';
            ctxKanvas.font = '50px bold';
            ctxKanvas.fillText('Revanš', 265, 252);

            ctxKanvas.fillStyle = 'black';
            ctxKanvas.fillRect(150, 300, 350, 75);
            ctxKanvas.fillStyle = 'rgb(245,174,8)';
            ctxKanvas.font = '50px bold';
            ctxKanvas.fillText('Nova Igra', 225, 352);
            
            kanvas.onclick = function(event){
                var x = event.offsetX;
                var y = event.offsetY;
                if(x <= 500 && x >= 150 && y >= 200 && y <= 275){
                    igra();
                }
            }
        }
        else{
            pass = 0;
            var x = event.offsetX;
            var y = event.offsetY;
            if((x >= 195 && x <= 205) || (x >= 245 && x <= 265) || (x >= 295 && x <= 305) || (x >= 345 && x <= 355) || (x >= 395 && x <= 405) || (x >= 445 && x <= 455) || (y >= 95 && y <= 105) || (y >= 145 && y <= 155) || (y >= 195 && y <= 205) || (y >= 245 && y <= 255) || (y >= 295 && y <= 305) || (y >= 345 && y <= 355)){
                pass = 1;
            }
            if(pass == 1){
                var flag = 0;
                pogodak = 0;
                veckliknuto = 1;

                if(x >= 195 && x <= 205){
                    flag = 1;
                    if(y > 150 && y < 200 && flag1 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(200, 150);
                        ctxKanvas.lineTo(200, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag1 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 200 && y < 250 && flag2 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(200, 200);
                        ctxKanvas.lineTo(200, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag2 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 250 && y < 300 && flag3 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(200, 250);
                        ctxKanvas.lineTo(200, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag3 = 1;
                        veckliknuto = 0;
                    }
                }
                
                if(x >= 245 && x <= 255){
                    flag = 1;
                    if(y > 100 && y < 150 && flag4 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(250, 100);
                        ctxKanvas.lineTo(250, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag4 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 150 && y < 200 && flag5 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(250, 150);
                        ctxKanvas.lineTo(250, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag5 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 200 && y < 250 && flag6 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(250, 200);
                        ctxKanvas.lineTo(250, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag6 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 250 && y < 300 && flag7 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(250, 250);
                        ctxKanvas.lineTo(250, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag7 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 300 && y < 350 && flag8 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(250, 300);
                        ctxKanvas.lineTo(250, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag8 = 1;
                        veckliknuto = 0;
                    }
                }
                
                if(x >= 295 && x <= 305){
                    flag = 1;
                    if(y > 50 && y < 100 && flag9 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(300, 50);
                        ctxKanvas.lineTo(300, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag9 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 100 && y < 150 && flag10 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(300, 100);
                        ctxKanvas.lineTo(300, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag10 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 150 && y < 200 && flag11 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(300, 150);
                        ctxKanvas.lineTo(300, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag11 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 200 && y < 250 && flag12 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(300, 200);
                        ctxKanvas.lineTo(300, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag12 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 250 && y < 300 && flag13 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(300, 250);
                        ctxKanvas.lineTo(300, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag13 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 300 && y < 350 && flag14 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(300, 300);
                        ctxKanvas.lineTo(300, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag14 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 350 && y < 400 && flag15 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(300, 350);
                        ctxKanvas.lineTo(300, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag15 = 1;
                        veckliknuto = 0;
                    }
                }
                
                if(x >= 345 && x <= 355){
                    flag = 1;
                    if(y > 50 && y < 100 && flag16 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(350, 50);
                        ctxKanvas.lineTo(350, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag16 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 100 && y < 150 && flag17 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(350, 100);
                        ctxKanvas.lineTo(350, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag17 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 150 && y < 200 && flag18 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(350, 150);
                        ctxKanvas.lineTo(350, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag18 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 200 && y < 250 && flag19 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(350, 200);
                        ctxKanvas.lineTo(350, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag19 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 250 && y < 300 && flag20 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(350, 250);
                        ctxKanvas.lineTo(350, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag20 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 300 && y < 350 && flag21 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(350, 300);
                        ctxKanvas.lineTo(350, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag21 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 350 && y < 400 && flag22 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(350, 350);
                        ctxKanvas.lineTo(350, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag22 = 1;
                        veckliknuto = 0;
                    }
                }
                
                if(x >= 395 && x <= 405){
                    flag = 1;
                    if(y > 100 && y < 150 && flag23 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(400, 100);
                        ctxKanvas.lineTo(400, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag23 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 150 && y < 200 && flag24 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(400, 150);
                        ctxKanvas.lineTo(400, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag24 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 200 && y < 250 && flag25 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(400, 200);
                        ctxKanvas.lineTo(400, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag25 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 250 && y < 300 && flag26 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(400, 250);
                        ctxKanvas.lineTo(400, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag26 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 300 && y < 350 && flag27 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(400, 300);
                        ctxKanvas.lineTo(400, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag27 = 1;
                        veckliknuto = 0;
                    }
                    
                }

                if(x >= 445 && x <= 455){
                    flag = 1;
                    if(y > 150 && y < 200 && flag28 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(450, 150);
                        ctxKanvas.lineTo(450, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag28 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 200 && y < 250 && flag29 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(450, 200);
                        ctxKanvas.lineTo(450, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag29 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 250 && y < 300 && flag30 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(450, 250);
                        ctxKanvas.lineTo(450, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag30 = 1;
                        veckliknuto = 0;
                    }
                }

                if(y >= 95 && y <= 102 && flag == 0){
                    if(x > 250 && x < 300 && flag31 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(250, 100);
                        ctxKanvas.lineTo(300, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag31 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 300 && x < 350 && flag32 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(300, 100);
                        ctxKanvas.lineTo(350, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag32 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 350 && x < 400 && flag33 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(350, 100);
                        ctxKanvas.lineTo(400, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag33 = 1;
                        veckliknuto = 0;
                    }
                }

                if(y >= 145 && y <= 155 && flag == 0){
                    if(x > 200 && x < 250 && flag34 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(200, 150);
                        ctxKanvas.lineTo(250, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag34 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 250 && x < 300 && flag35 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(250, 150);
                        ctxKanvas.lineTo(300, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag35 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 300 && x < 350 && flag36 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(300, 150);
                        ctxKanvas.lineTo(350, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag36 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 350 && x < 400 && flag37 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(350, 150);
                        ctxKanvas.lineTo(400, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag37 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 400 && x < 450 && flag38 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(400, 150);
                        ctxKanvas.lineTo(450, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag38 = 1;
                        veckliknuto = 0;
                    }
                }

                if(y >= 195 && y <= 205 && flag == 0){
                    if(x > 150 && x < 200 && flag39 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(150, 200);
                        ctxKanvas.lineTo(200, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag39 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 200 && x < 250 && flag40 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(200, 200);
                        ctxKanvas.lineTo(250, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag40 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 250 && x < 300 && flag41 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(250, 200);
                        ctxKanvas.lineTo(300, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag41 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 300 && x < 350 && flag42 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(300, 200);
                        ctxKanvas.lineTo(350, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag42 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 350 && x < 400 && flag43 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(350, 200);
                        ctxKanvas.lineTo(400, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag43 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 400 && x < 450 && flag44 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(400, 200);
                        ctxKanvas.lineTo(450, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag44 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 450 && x < 500 && flag45 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(450, 200);
                        ctxKanvas.lineTo(500, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag45 = 1;
                        veckliknuto = 0;
                    }
                }

                if(y >= 245 && y <= 255 && flag == 0){
                    if(x > 150 && x < 200 && flag46 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(150, 250);
                        ctxKanvas.lineTo(200, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag46 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 200 && x < 250 && flag47 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(200, 250);
                        ctxKanvas.lineTo(250, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag47 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 250 && x < 300 && flag48 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(250, 250);
                        ctxKanvas.lineTo(300, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag48 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 300 && x < 350 && flag49 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(300, 250);
                        ctxKanvas.lineTo(350, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag49 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 350 && x < 400 && flag50 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(350, 250);
                        ctxKanvas.lineTo(400, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag50 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 400 && x < 450 && flag51 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(400, 250);
                        ctxKanvas.lineTo(450, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag51 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 450 && x < 500 && flag52 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(450, 250);
                        ctxKanvas.lineTo(500, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag52 = 1;
                        veckliknuto = 0;
                    }
                }

                if(y >= 295 && y <= 305 && flag == 0){
                    if(x > 200 && x < 250 && flag53 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(200, 300);
                        ctxKanvas.lineTo(250, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag53 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 250 && x < 300 && flag54 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(250, 300);
                        ctxKanvas.lineTo(300, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag54 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 300 && x < 350 && flag55 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(300, 300);
                        ctxKanvas.lineTo(350, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag55 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 350 && x < 400 && flag56 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(350, 300);
                        ctxKanvas.lineTo(400, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag56 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 400 && x < 450 && flag57 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(400, 300);
                        ctxKanvas.lineTo(450, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag57 = 1;
                        veckliknuto = 0;
                    }
                }


                if(y >= 345 && y <= 355 && flag == 0){
                    if(x > 250 && x < 300 && flag58 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(250, 350);
                        ctxKanvas.lineTo(300, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag58 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 300 && x < 350 && flag59 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(300, 350);
                        ctxKanvas.lineTo(350, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag59 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 350 && x < 400 && flag60 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(350, 350);
                        ctxKanvas.lineTo(400, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag60 = 1;
                        veckliknuto = 0;
                    }
                }

                if(flag1 == 1 && flag39 == 1 && zatvori1 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(150, 150);
                        ctxKanvas.lineTo(200, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(200, 150);
                        ctxKanvas.lineTo(150, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        plavipoeni++;
                        zatvori1 = 1;
                        pogodak = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(150, 150);
                        ctxKanvas.lineTo(200, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(200, 150);
                        ctxKanvas.lineTo(150, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori1 = 1;
                    }
                }

                if(flag39 == 1 && flag2 == 1 && flag46 == 1 && zatvori2 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(150, 200);
                        ctxKanvas.lineTo(200, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(200, 200);
                        ctxKanvas.lineTo(150, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori2 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(150, 200);
                        ctxKanvas.lineTo(200, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(200, 200);
                        ctxKanvas.lineTo(150, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori2 = 1;
                    }
                }

                if(flag46 == 1 && flag3 == 1 && zatvori3 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(150, 250);
                        ctxKanvas.lineTo(200, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(200, 250);
                        ctxKanvas.lineTo(150, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori3 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(150, 250);
                        ctxKanvas.lineTo(200, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(200, 250);
                        ctxKanvas.lineTo(150, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori3 = 1;
                    }
                }

                if(flag4 == 1 && flag34 == 1 && zatvori4 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(200, 100);
                        ctxKanvas.lineTo(250, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(250, 100);
                        ctxKanvas.lineTo(200, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori4 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(200, 100);
                        ctxKanvas.lineTo(250, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(250, 100);
                        ctxKanvas.lineTo(200, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori4 = 1;
                    }
                }

                if(flag5 == 1 && flag34 == 1 && flag40 == 1 && flag1 == 1 && zatvori5 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(200, 150);
                        ctxKanvas.lineTo(250, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(250, 150);
                        ctxKanvas.lineTo(200, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori5 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(200, 150);
                        ctxKanvas.lineTo(250, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(250, 150);
                        ctxKanvas.lineTo(200, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori5 = 1;
                    }
                }

                if(flag6 == 1 && flag40 == 1 && flag2 == 1 && flag47 == 1 && zatvori6 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(200, 200);
                        ctxKanvas.lineTo(250, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(250, 200);
                        ctxKanvas.lineTo(200, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori6 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(200, 200);
                        ctxKanvas.lineTo(250, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(250, 200);
                        ctxKanvas.lineTo(200, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori6 = 1;
                    }
                }

                if(flag7 == 1 && flag47 == 1 && flag3 == 1 && flag53 == 1 && zatvori7 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(200, 250);
                        ctxKanvas.lineTo(250, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(250, 250);
                        ctxKanvas.lineTo(200, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori7 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(200, 250);
                        ctxKanvas.lineTo(250, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(250, 250);
                        ctxKanvas.lineTo(200, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori7 = 1;
                    }
                }

                if(flag8 == 1 && flag53 == 1 && zatvori8 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(200, 300);
                        ctxKanvas.lineTo(250, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(250, 300);
                        ctxKanvas.lineTo(200, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori8 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(200, 300);
                        ctxKanvas.lineTo(250, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(250, 300);
                        ctxKanvas.lineTo(200, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori8 = 1;
                    }
                }

                if(flag9 == 1 && flag31 == 1 && zatvori9 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(250, 50);
                        ctxKanvas.lineTo(300, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 50);
                        ctxKanvas.lineTo(250, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori9 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(250, 50);
                        ctxKanvas.lineTo(300, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 50);
                        ctxKanvas.lineTo(250, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori9 = 1;
                    }
                }

                if(flag10 == 1 && flag31 == 1 && flag35 == 1 && flag4 == 1 && zatvori10 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(250, 100);
                        ctxKanvas.lineTo(300, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 100);
                        ctxKanvas.lineTo(250, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori10 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(250, 100);
                        ctxKanvas.lineTo(300, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 100);
                        ctxKanvas.lineTo(250, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori10 = 1;
                    }
                }
                
                if(flag11 == 1 && flag35 == 1 && flag41 == 1 && flag5 == 1 && zatvori11 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(250, 150);
                        ctxKanvas.lineTo(300, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 150);
                        ctxKanvas.lineTo(250, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori11 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(250, 150);
                        ctxKanvas.lineTo(300, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 150);
                        ctxKanvas.lineTo(250, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori11 = 1;
                    }
                }

                if(flag12 == 1 && flag41 == 1 && flag48 == 1 && flag6 == 1 && zatvori12 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(250, 200);
                        ctxKanvas.lineTo(300, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 200);
                        ctxKanvas.lineTo(250, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori12 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(250, 200);
                        ctxKanvas.lineTo(300, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 200);
                        ctxKanvas.lineTo(250, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori12 = 1;
                    }
                }

                if(flag13 == 1 && flag48 == 1 && flag54 == 1 && flag7 == 1 && zatvori13 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(250, 250);
                        ctxKanvas.lineTo(300, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 250);
                        ctxKanvas.lineTo(250, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori13 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(250, 250);
                        ctxKanvas.lineTo(300, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 250);
                        ctxKanvas.lineTo(250, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori13 = 1;
                    }
                }

                if(flag14 == 1 && flag54 == 1 && flag58 == 1 && flag8 == 1 && zatvori14 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(250, 300);
                        ctxKanvas.lineTo(300, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 300);
                        ctxKanvas.lineTo(250, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori14 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(250, 300);
                        ctxKanvas.lineTo(300, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 300);
                        ctxKanvas.lineTo(250, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori14 = 1;
                    }
                }

                if(flag15 == 1 && flag58 == 1 && zatvori15 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(250, 350);
                        ctxKanvas.lineTo(300, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 350);
                        ctxKanvas.lineTo(250, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori15 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(250, 350);
                        ctxKanvas.lineTo(300, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 350);
                        ctxKanvas.lineTo(250, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori15 = 1;
                    }
                }

                if(flag16 == 1 && flag32 == 1 && flag9 == 1 && zatvori16 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 50);
                        ctxKanvas.lineTo(350, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 50);
                        ctxKanvas.lineTo(300, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori16 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 50);
                        ctxKanvas.lineTo(350, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 50);
                        ctxKanvas.lineTo(300, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori16 = 1;
                    }
                }

                if(flag17 == 1 && flag36 == 1 && flag10 == 1 && flag32 == 1 && zatvori17 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 100);
                        ctxKanvas.lineTo(350, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 100);
                        ctxKanvas.lineTo(300, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori17 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 100);
                        ctxKanvas.lineTo(350, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 100);
                        ctxKanvas.lineTo(300, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori17 = 1;
                    }
                }

                if(flag18 == 1 && flag42 == 1 && flag11 == 1 && flag36 == 1 && zatvori18 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 150);
                        ctxKanvas.lineTo(350, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 150);
                        ctxKanvas.lineTo(300, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori18 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 150);
                        ctxKanvas.lineTo(350, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 150);
                        ctxKanvas.lineTo(300, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori18 = 1;
                    }
                }

                if(flag19 == 1 && flag49 == 1 && flag12 == 1 && flag42 == 1 && zatvori19 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 200);
                        ctxKanvas.lineTo(350, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 200);
                        ctxKanvas.lineTo(300, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori19 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 200);
                        ctxKanvas.lineTo(350, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 200);
                        ctxKanvas.lineTo(300, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori19 = 1;
                    }
                }

                if(flag20 == 1 && flag55 == 1 && flag13 == 1 && flag49 == 1 && zatvori20 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 250);
                        ctxKanvas.lineTo(350, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 250);
                        ctxKanvas.lineTo(300, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori20 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 250);
                        ctxKanvas.lineTo(350, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 250);
                        ctxKanvas.lineTo(300, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori20 = 1;
                    }
                }

                if(flag21 == 1 && flag59 == 1 && flag14 == 1 && flag55 == 1 && zatvori21 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 300);
                        ctxKanvas.lineTo(350, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 300);
                        ctxKanvas.lineTo(300, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori21 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 300);
                        ctxKanvas.lineTo(350, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 300);
                        ctxKanvas.lineTo(300, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori21 = 1;
                    }
                }

                if(flag22 == 1 && flag59 == 1 && flag15 == 1 && zatvori22 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 350);
                        ctxKanvas.lineTo(350, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 350);
                        ctxKanvas.lineTo(300, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori22 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 350);
                        ctxKanvas.lineTo(350, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 350);
                        ctxKanvas.lineTo(300, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori22 = 1;
                    }
                }

                if(flag16 == 1 && flag33 == 1 && zatvori23 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 50);
                        ctxKanvas.lineTo(400, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(400, 50);
                        ctxKanvas.lineTo(350, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori23 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 50);
                        ctxKanvas.lineTo(400, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(400, 50);
                        ctxKanvas.lineTo(350, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori23 = 1;
                    }
                }

                if(flag17 == 1 && flag33 == 1 && flag37 == 1 && flag23 == 1 && zatvori24 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 100);
                        ctxKanvas.lineTo(400, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(400, 100);
                        ctxKanvas.lineTo(350, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori24 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 100);
                        ctxKanvas.lineTo(400, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(400, 100);
                        ctxKanvas.lineTo(350, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori24 = 1;
                    }
                }

                if(flag18 == 1 && flag37 == 1 && flag43 == 1 && flag24 == 1 && zatvori25 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 150);
                        ctxKanvas.lineTo(400, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(400, 150);
                        ctxKanvas.lineTo(350, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori25 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 150);
                        ctxKanvas.lineTo(400, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(400, 150);
                        ctxKanvas.lineTo(350, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori25 = 1;
                    }
                }

                if(flag19 == 1 && flag43 == 1 && flag50 == 1 && flag25 == 1 && zatvori26 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 200);
                        ctxKanvas.lineTo(400, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(400, 200);
                        ctxKanvas.lineTo(350, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori26 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 200);
                        ctxKanvas.lineTo(400, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(400, 200);
                        ctxKanvas.lineTo(350, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori26 = 1;
                    }
                }

                if(flag20 == 1 && flag50 == 1 && flag56 == 1 && flag26 == 1 && zatvori27 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 250);
                        ctxKanvas.lineTo(400, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(400, 250);
                        ctxKanvas.lineTo(350, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori27 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 250);
                        ctxKanvas.lineTo(400, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(400, 250);
                        ctxKanvas.lineTo(350, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori27 = 1;
                    }
                }

                if(flag21 == 1 && flag56 == 1 && flag60 == 1 && flag27 == 1 && zatvori28 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 300);
                        ctxKanvas.lineTo(400, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(400, 300);
                        ctxKanvas.lineTo(350, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori28 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 300);
                        ctxKanvas.lineTo(400, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(400, 300);
                        ctxKanvas.lineTo(350, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori28 = 1;
                    }
                }

                if(flag22 == 1 && flag60 == 1 && zatvori29 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 350);
                        ctxKanvas.lineTo(400, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(400, 350);
                        ctxKanvas.lineTo(350, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori29 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 350);
                        ctxKanvas.lineTo(400, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(400, 350);
                        ctxKanvas.lineTo(350, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori29 = 1;
                    }
                }

                if(flag38 == 1 && flag23 == 1 && zatvori30 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(400, 100);
                        ctxKanvas.lineTo(450, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(450, 100);
                        ctxKanvas.lineTo(400, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori30 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(400, 100);
                        ctxKanvas.lineTo(450, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(450, 100);
                        ctxKanvas.lineTo(400, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori30 = 1;
                    }
                }

                if(flag38 == 1 && flag44 == 1 && flag24 == 1 && flag28 == 1 && zatvori31 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(400, 150);
                        ctxKanvas.lineTo(450, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(450, 150);
                        ctxKanvas.lineTo(400, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori31 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(400, 150);
                        ctxKanvas.lineTo(450, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(450, 150);
                        ctxKanvas.lineTo(400, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori31 = 1;
                    }
                }

                if(flag44 == 1 && flag51 == 1 && flag25 == 1 && flag29 == 1 && zatvori32 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(400, 200);
                        ctxKanvas.lineTo(450, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(450, 200);
                        ctxKanvas.lineTo(400, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori32 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(400, 200);
                        ctxKanvas.lineTo(450, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(450, 200);
                        ctxKanvas.lineTo(400, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori32 = 1;
                    }
                }

                if(flag51 == 1 && flag57 == 1 && flag26 == 1 && flag30 == 1 && zatvori33 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(400, 250);
                        ctxKanvas.lineTo(450, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(450, 250);
                        ctxKanvas.lineTo(400, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori33 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(400, 250);
                        ctxKanvas.lineTo(450, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(450, 250);
                        ctxKanvas.lineTo(400, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori33 = 1;
                    }
                }

                if(flag57 == 1 && flag27 == 1 && zatvori34 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(400, 300);
                        ctxKanvas.lineTo(450, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(450, 300);
                        ctxKanvas.lineTo(400, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori34 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(400, 300);
                        ctxKanvas.lineTo(450, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(450, 300);
                        ctxKanvas.lineTo(400, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori34 = 1;
                    }
                }

                if(flag28 == 1 && flag45 == 1 && zatvori35 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(450, 150);
                        ctxKanvas.lineTo(500, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(500, 150);
                        ctxKanvas.lineTo(450, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori35 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(450, 150);
                        ctxKanvas.lineTo(500, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(500, 150);
                        ctxKanvas.lineTo(450, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori35 = 1;
                    }
                }

                if(flag29 == 1 && flag45 == 1 && flag52 == 1 && zatvori36 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(450, 200);
                        ctxKanvas.lineTo(500, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(500, 200);
                        ctxKanvas.lineTo(450, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori36 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(450, 200);
                        ctxKanvas.lineTo(500, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(500, 200);
                        ctxKanvas.lineTo(450, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori36 = 1;
                    }
                }

                if(flag30 == 1 && flag52 == 1 && zatvori37 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(450, 250);
                        ctxKanvas.lineTo(500, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(500, 250);
                        ctxKanvas.lineTo(450, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori37 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(450, 250);
                        ctxKanvas.lineTo(500, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(500, 250);
                        ctxKanvas.lineTo(450, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori37 = 1;
                    }
                }
                if(zatvori1 == 1 && zatvori2 == 1 && zatvori3 == 1 && zatvori4 == 1 && zatvori5 == 1 && zatvori6 == 1 && zatvori7 == 1 && zatvori8 == 1 && zatvori9 == 1 && zatvori10 == 1 && zatvori11 == 1 && zatvori12 == 1 && zatvori13 == 1 && zatvori14 == 1 && zatvori15 == 1 && zatvori16 == 1 && zatvori17 == 1 && zatvori18 == 1 && zatvori19 == 1 && zatvori20 == 1 && zatvori21 == 1 && zatvori22 == 1 && zatvori23 == 1 && zatvori24 == 1 && zatvori25 == 1 && zatvori26 == 1 && zatvori27 == 1 && zatvori28 == 1 && zatvori29 == 1 && zatvori30 == 1 && zatvori31 == 1 && zatvori32 == 1 && zatvori33 == 1 && zatvori34 == 1 && zatvori35 == 1 && zatvori36 == 1 && zatvori37 == 1){
                    ctxKanvas.fillStyle = 'rgb(0,0,0,0.7)';
                    ctxKanvas.fillRect(0,0,650,450);
                    if(crvenipoeni>plavipoeni){
                        ctxKanvas.font = '90px bold';
                        ctxKanvas.fillStyle = 'blue';
                        ctxKanvas.fillText('POBJEDNIK JE', 15, 70);
                        ctxKanvas.fillText(lnick, 250, 170);
                    }
                    else if(plavipoeni>crvenipoeni){
                        ctxKanvas.font = '90px bold';
                        ctxKanvas.fillStyle = 'red';
                        ctxKanvas.fillText('POBJEDNIK JE', 15, 70);
                        ctxKanvas.fillText(dnick, 250, 170);
                    }
                    else if(crvenipoeni==plavipoeni){
                        ctxKanvas.font = '100px bold';
                        ctxKanvas.fillStyle = 'yellow';
                        ctxKanvas.fillText('NEMA POBJEDNIKA', 0, 110);
                    }
                    ctxKanvas.fillStyle = 'black';
                    ctxKanvas.fillRect(150, 200, 350, 75);
                    ctxKanvas.fillStyle = 'rgb(245,174,8)';
                    ctxKanvas.font = '50px bold';
                    ctxKanvas.fillText('Revanš', 265, 252);

                    ctxKanvas.fillStyle = 'black';
                    ctxKanvas.fillRect(150, 300, 350, 75);
                    ctxKanvas.fillStyle = 'rgb(245,174,8)';
                    ctxKanvas.font = '50px bold';
                    ctxKanvas.fillText('Nova Igra', 225, 352);

                    kanvas.onclick = function(event){
                        var x = event.offsetX;
                        var y = event.offsetY;
                        if(x <= 500 && x >= 150 && y >= 200 && y <= 275){
                            igra();
                        }
                        else if(x <= 500 && x >= 150 && y >= 300 && y <= 375){
                            novaigra();
                        }
                    }
            
        }
            if(pogodak != 1 && veckliknuto == 0){

                korak++;
                if(korak % 2 == 1){
                    plavi = true;
                    crveni = false;
                }
                else if(korak % 2 == 0){
                    plavi = false;
                    crveni = true;
                }
                if(plavi == true){
                    ctxKanvas.fillStyle = 'red';
                    ctxKanvas.fillRect(600, 200, 50, 50);
                    ctxKanvas.fillStyle = 'rgb(255, 214, 117)';
                    ctxKanvas.fillRect(0, 200, 50, 50);
                }
                else if(crveni == true){
                    ctxKanvas.fillStyle = 'blue';
                    ctxKanvas.fillRect(0, 200, 50, 50);
                    ctxKanvas.fillStyle = 'rgb(255, 214, 117)';
                    ctxKanvas.fillRect(600, 200, 50, 50);
                }
            }
            }
        }
    }

}

function novaigra(){
    ctxKanvas.clearRect(0,0,650,450);
    ctxKanvas.fillStyle = 'gray';
    ctxKanvas.fillRect(0,0,650,450);
    ctxKanvas.fillStyle = 'black';
    ctxKanvas.fillRect(150,50,350,100);
    ctxKanvas.fillRect(150,175,350,100);
    ctxKanvas.fillRect(150,300,350,100);

    ctxKanvas.fillStyle = 'rgb(245,174,8)';
    ctxKanvas.font = '50px bold';
    ctxKanvas.fillText('Velika Baklava', 175, 125);

    ctxKanvas.fillStyle = 'rgb(245,174,8)';
    ctxKanvas.font = '50px bold';
    ctxKanvas.fillText('Mala Baklava', 175, 245);

    ctxKanvas.fillStyle = 'rgb(245,174,8)';
    ctxKanvas.font = '50px bold';
    ctxKanvas.fillText('Kvadrat', 245, 365);

    kanvas.onclick = function(event){
        var x = event.offsetX;
        var y = event.offsetY;
        if(x <= 500 && x >= 150 && y >= 50 && y <= 150){
            kanvasCrtanje();
            loadIgru(1);
        }
        else if(x <= 500 && x >= 150 && y >= 175 && y <= 275){
            kanvasCrtanje2();
            loadIgru(2);
        }
        else if(x <= 500 && x >= 150 && y >= 300 && y <= 400){
            kanvasCrtanje3();
            loadIgru(3);
        }
    }
}

function kanvasCrtanje2(){
    var gore = 200,
        dole = 250,
        reverser = 50;
        ctxKanvas.fillStyle = 'rgb(255, 214, 117)';
        ctxKanvas.clearRect(0, 0, 650, 450);
        ctxKanvas.fillRect(0,0,650,450);
    for(let x = 0; x <= 650; x += 50){
        ctxKanvas.beginPath();
        ctxKanvas.strokeStyle = 'rgba(0, 0, 0, 0.5)';
        ctxKanvas.moveTo(x, 0);
        ctxKanvas.lineTo(x, 450);
        ctxKanvas.stroke();
        ctxKanvas.closePath();
    }
    for(let y = 0; y <= 450; y += 50){
        ctxKanvas.beginPath();
        ctxKanvas.strokeStyle = 'rgba(0,0,0,0.5)';
        ctxKanvas.moveTo(0, y);
        ctxKanvas.lineTo(650, y);
        ctxKanvas.stroke();
        ctxKanvas.closePath();
    }
    for(var x = 0; x <= 650; x += 50){
        if(x >= 150 && x <= 500){
            ctxKanvas.beginPath();
            ctxKanvas.strokeStyle = 'rgb(0,0,0)';
            ctxKanvas.moveTo(x, gore);
            ctxKanvas.lineTo(x, gore + 50);
            if(x != 350){
                ctxKanvas.moveTo(x, gore);
                ctxKanvas.lineTo(x + reverser, gore);
            }
            ctxKanvas.stroke();
            ctxKanvas.beginPath();
            ctxKanvas.strokeStyle = 'rgb(0,0,0)';
            ctxKanvas.moveTo(x, dole);
            ctxKanvas.lineTo(x, dole - 50);
            if(x != 350){
                ctxKanvas.moveTo(x, dole);
                ctxKanvas.lineTo(x + reverser, dole)
            }
            ctxKanvas.stroke();
            if(x < 300){
                gore -= 50;
                dole += 50;
            }
            else if(x > 300){
                gore += 50;
                dole -= 50;
                // pazi za reverser ako bude bugova na vrhovima baklava, nisam siguran je li se 100% uklaplja sa borderom
                reverser = -50
            }
        }
    }

}


novaigra();
















































































function igra2(){
    kanvasCrtanje2();

    ctxKanvas.beginPath();
    ctxKanvas.strokeStyle = 'rgb(0,0,0)';
    ctxKanvas.moveTo(200, 200);
    ctxKanvas.lineTo(200, 250);
    ctxKanvas.stroke();
    ctxKanvas.closePath();
    ctxKanvas.beginPath();
    ctxKanvas.strokeStyle = 'blue';
    ctxKanvas.moveTo(150, 200);
    ctxKanvas.lineTo(200, 250);
    ctxKanvas.stroke();
    ctxKanvas.closePath();
    ctxKanvas.beginPath();
    ctxKanvas.strokeStyle = 'blue';
    ctxKanvas.moveTo(150, 250);
    ctxKanvas.lineTo(200, 200);
    ctxKanvas.stroke();
    ctxKanvas.closePath();

    ctxKanvas.beginPath();
    ctxKanvas.strokeStyle = 'rgb(0,0,0)';
    ctxKanvas.moveTo(300, 100);
    ctxKanvas.lineTo(350,100);
    ctxKanvas.stroke();
    ctxKanvas.closePath();
    ctxKanvas.beginPath();
    ctxKanvas.strokeStyle = 'blue';
    ctxKanvas.moveTo(300, 50);
    ctxKanvas.lineTo(350, 100);
    ctxKanvas.stroke();
    ctxKanvas.closePath();
    ctxKanvas.beginPath();
    ctxKanvas.strokeStyle = 'blue';
    ctxKanvas.moveTo(350, 50);
    ctxKanvas.lineTo(300, 100);
    ctxKanvas.stroke();
    ctxKanvas.closePath();

    ctxKanvas.beginPath();
    ctxKanvas.strokeStyle = 'rgb(0,0,0)';
    ctxKanvas.moveTo(300, 350);
    ctxKanvas.lineTo(350, 350);
    ctxKanvas.stroke();
    ctxKanvas.closePath();
    ctxKanvas.beginPath();
    ctxKanvas.strokeStyle = 'red';
    ctxKanvas.moveTo(300, 400);
    ctxKanvas.lineTo(350, 350);
    ctxKanvas.stroke();
    ctxKanvas.closePath();
    ctxKanvas.beginPath();
    ctxKanvas.strokeStyle = 'red';
    ctxKanvas.moveTo(350, 400);
    ctxKanvas.lineTo(300, 350);
    ctxKanvas.stroke();
    ctxKanvas.closePath();

    ctxKanvas.beginPath();
    ctxKanvas.strokeStyle = 'rgb(0,0,0)';
    ctxKanvas.moveTo(450, 200);
    ctxKanvas.lineTo(450, 250);
    ctxKanvas.stroke();
    ctxKanvas.closePath();
    ctxKanvas.beginPath();
    ctxKanvas.strokeStyle = 'red';
    ctxKanvas.moveTo(500, 200);
    ctxKanvas.lineTo(450, 250);
    ctxKanvas.stroke();
    ctxKanvas.closePath();
    ctxKanvas.beginPath();
    ctxKanvas.strokeStyle = 'red';
    ctxKanvas.moveTo(500, 250);
    ctxKanvas.lineTo(450, 200);
    ctxKanvas.stroke();
    ctxKanvas.closePath();

    var korak = 3;
    var plavi = true;
    var crveni = false;
    var crvenipoeni = 2;
    var plavipoeni = 2;
    var flag1 = 0,
        flag2 = 0,
        flag3 = 0,
        flag5 = 0,
        flag6 = 0,
        flag7 = 0,
        flag10 = 0,
        flag11 = 0,
        flag12 = 0,
        flag13 = 0,
        flag14 = 0,
        flag17 = 0,
        flag18 = 0,
        flag19 = 0,
        flag20 = 0,
        flag21 = 0,
        flag24 = 0,
        flag25 = 0,
        flag26 = 0,
        flag35 = 0,
        flag36 = 0,
        flag37 = 0,
        flag40 = 0,
        flag41 = 0,
        flag42 = 0,
        flag43 = 0,
        flag44 = 0,
        flag47 = 0,
        flag48 = 0,
        flag49 = 0,
        flag50 = 0,
        flag51 = 0,
        flag54 = 0,
        flag55 = 0,
        flag56 = 0,
        zatvori5 = 0,
        zatvori6 = 0,
        zatvori7 = 0,
        zatvori9 = 0,
        zatvori10 = 0,
        zatvori11 = 0,
        zatvori12 = 0,
        zatvori13 = 0,
        zatvori14 = 0,
        zatvori16 = 0,
        zatvori17 = 0,
        zatvori18 = 0,
        zatvori19 = 0,
        zatvori20 = 0,
        zatvori21 = 0,
        zatvori23 = 0,
        zatvori24 = 0,
        zatvori25 = 0,
        zatvori26 = 0,
        zatvori27 = 0,
        zatvori28 = 0,
        zatvori31 = 0,
        zatvori32 = 0,
        zatvori33 = 0;

        ctxKanvas.fillStyle = 'red';
        ctxKanvas.fillRect(600, 200, 50, 50);
        var pogodak = 0;

    kanvas.onclick = function(event){
        if(zatvori5 == 1 && zatvori6 == 1 && zatvori7 == 1 &&  zatvori10 == 1 && zatvori11 == 1 && zatvori12 == 1 && zatvori13 == 1 && zatvori14 == 1 &&  zatvori17 == 1 && zatvori18 == 1 && zatvori19 == 1 && zatvori20 == 1 && zatvori21 == 1 &&  zatvori24 == 1 && zatvori25 == 1 && zatvori26 == 1 && zatvori27 == 1 && zatvori28 == 1 && zatvori31 == 1 && zatvori32 == 1 && zatvori33 == 1){
            ctxKanvas.fillStyle = 'rgb(0,0,0,0.7)';
            ctxKanvas.fillRect(0,0,650,450);
            if(crvenipoeni>plavipoeni){
                ctxKanvas.font = '90px bold';
                ctxKanvas.fillStyle = 'blue';
                ctxKanvas.fillText('POBJEDNIK JE', 15, 70);
                ctxKanvas.fillText(lnick, 250, 170);
            }
            else if(plavipoeni>crvenipoeni){
                ctxKanvas.font = '90px bold';
                ctxKanvas.fillStyle = 'red';
                ctxKanvas.fillText('POBJEDNIK JE', 15, 70);
                ctxKanvas.fillText(dnick, 250, 170);
            }
            else if(crvenipoeni==plavipoeni){
                ctxKanvas.font = '100px bold';
                ctxKanvas.fillStyle = 'yellow';
                ctxKanvas.fillText('NEMA POBJEDNIKA', 0, 110);
            }
            ctxKanvas.fillStyle = 'black';
            ctxKanvas.fillRect(150, 200, 350, 75);
            ctxKanvas.fillStyle = 'rgb(245,174,8)';
            ctxKanvas.font = '50px bold';
            ctxKanvas.fillText('Revanš', 265, 252);

            ctxKanvas.fillStyle = 'black';
            ctxKanvas.fillRect(150, 300, 350, 75);
            ctxKanvas.fillStyle = 'rgb(245,174,8)';
            ctxKanvas.font = '50px bold';
            ctxKanvas.fillText('Nova Igra', 225, 352);
            
            kanvas.onclick = function(event){
                var x = event.offsetX;
                var y = event.offsetY;
                if(x <= 500 && x >= 150 && y >= 200 && y <= 275){
                    igra();
                }
            }
        }
        else{
            pass = 0;
            var x = event.offsetX;
            var y = event.offsetY;
            if((x >= 195 && x <= 205) || (x >= 245 && x <= 265) || (x >= 295 && x <= 305) || (x >= 345 && x <= 355) || (x >= 395 && x <= 405) || (x >= 445 && x <= 455) || (y >= 95 && y <= 105) || (y >= 145 && y <= 155) || (y >= 195 && y <= 205) || (y >= 245 && y <= 255) || (y >= 295 && y <= 305) || (y >= 345 && y <= 355)){
                pass = 1;
            }
            if(pass == 1){
                var flag = 0;
                pogodak = 0;
                veckliknuto = 1;

                if(x >= 245 && x <= 255){
                    flag = 1;
                    if(y > 150 && y < 200 && flag5 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(250, 150);
                        ctxKanvas.lineTo(250, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag5 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 200 && y < 250 && flag6 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(250, 200);
                        ctxKanvas.lineTo(250, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag6 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 250 && y < 300 && flag7 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(250, 250);
                        ctxKanvas.lineTo(250, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag7 = 1;
                        veckliknuto = 0;
                    }
                }
                if(x >= 295 && x <= 305){
                    flag = 1;
                    if(y > 100 && y < 150 && flag10 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(300, 100);
                        ctxKanvas.lineTo(300, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag10 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 150 && y < 200 && flag11 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(300, 150);
                        ctxKanvas.lineTo(300, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag11 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 200 && y < 250 && flag12 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(300, 200);
                        ctxKanvas.lineTo(300, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag12 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 250 && y < 300 && flag13 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(300, 250);
                        ctxKanvas.lineTo(300, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag13 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 300 && y < 350 && flag14 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(300, 300);
                        ctxKanvas.lineTo(300, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag14 = 1;
                        veckliknuto = 0;
                    }
                }
                
                if(x >= 345 && x <= 355){
                    flag = 1;
                    if(y > 100 && y < 150 && flag17 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(350, 100);
                        ctxKanvas.lineTo(350, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag17 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 150 && y < 200 && flag18 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(350, 150);
                        ctxKanvas.lineTo(350, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag18 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 200 && y < 250 && flag19 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(350, 200);
                        ctxKanvas.lineTo(350, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag19 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 250 && y < 300 && flag20 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(350, 250);
                        ctxKanvas.lineTo(350, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag20 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 300 && y < 350 && flag21 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(350, 300);
                        ctxKanvas.lineTo(350, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag21 = 1;
                        veckliknuto = 0;
                    }
                }
                
                if(x >= 395 && x <= 405){
                    flag = 1;
                    if(y > 150 && y < 200 && flag24 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(400, 150);
                        ctxKanvas.lineTo(400, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag24 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 200 && y < 250 && flag25 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(400, 200);
                        ctxKanvas.lineTo(400, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag25 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 250 && y < 300 && flag26 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(400, 250);
                        ctxKanvas.lineTo(400, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag26 = 1;
                        veckliknuto = 0;
                    }
                    
                    
                }

                if(y >= 145 && y <= 155 && flag == 0){
                    
                    if(x > 250 && x < 300 && flag35 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(250, 150);
                        ctxKanvas.lineTo(300, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag35 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 300 && x < 350 && flag36 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(300, 150);
                        ctxKanvas.lineTo(350, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag36 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 350 && x < 400 && flag37 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(350, 150);
                        ctxKanvas.lineTo(400, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag37 = 1;
                        veckliknuto = 0;
                    }
                }

                if(y >= 195 && y <= 205 && flag == 0){
                    if(x > 200 && x < 250 && flag40 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(200, 200);
                        ctxKanvas.lineTo(250, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag40 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 250 && x < 300 && flag41 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(250, 200);
                        ctxKanvas.lineTo(300, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag41 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 300 && x < 350 && flag42 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(300, 200);
                        ctxKanvas.lineTo(350, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag42 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 350 && x < 400 && flag43 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(350, 200);
                        ctxKanvas.lineTo(400, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag43 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 400 && x < 450 && flag44 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(400, 200);
                        ctxKanvas.lineTo(450, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag44 = 1;
                        veckliknuto = 0;
                    }
        
                }

                if(y >= 245 && y <= 255 && flag == 0){
                    
                    if(x > 200 && x < 250 && flag47 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(200, 250);
                        ctxKanvas.lineTo(250, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag47 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 250 && x < 300 && flag48 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(250, 250);
                        ctxKanvas.lineTo(300, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag48 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 300 && x < 350 && flag49 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(300, 250);
                        ctxKanvas.lineTo(350, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag49 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 350 && x < 400 && flag50 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(350, 250);
                        ctxKanvas.lineTo(400, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag50 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 400 && x < 450 && flag51 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(400, 250);
                        ctxKanvas.lineTo(450, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag51 = 1;
                        veckliknuto = 0;
                    }

                }

                if(y >= 295 && y <= 305 && flag == 0){

                    if(x > 250 && x < 300 && flag54 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(250, 300);
                        ctxKanvas.lineTo(300, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag54 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 300 && x < 350 && flag55 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(300, 300);
                        ctxKanvas.lineTo(350, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag55 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 350 && x < 400 && flag56 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(350, 300);
                        ctxKanvas.lineTo(400, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag56 = 1;
                        veckliknuto = 0;
                    }
                    
                }


                if(flag5 == 1 &&  flag40 == 1 && zatvori5 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(200, 150);
                        ctxKanvas.lineTo(250, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(250, 150);
                        ctxKanvas.lineTo(200, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori5 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(200, 150);
                        ctxKanvas.lineTo(250, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(250, 150);
                        ctxKanvas.lineTo(200, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori5 = 1;
                    }
                }

                if(flag6 == 1 && flag40 == 1 && flag47 == 1 && zatvori6 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(200, 200);
                        ctxKanvas.lineTo(250, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(250, 200);
                        ctxKanvas.lineTo(200, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori6 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(200, 200);
                        ctxKanvas.lineTo(250, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(250, 200);
                        ctxKanvas.lineTo(200, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori6 = 1;
                    }
                }

                if(flag7 == 1 && flag47 == 1  && zatvori7 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(200, 250);
                        ctxKanvas.lineTo(250, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(250, 250);
                        ctxKanvas.lineTo(200, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori7 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(200, 250);
                        ctxKanvas.lineTo(250, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(250, 250);
                        ctxKanvas.lineTo(200, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori7 = 1;
                    }
                }

                

                if(flag10 == 1 && flag35 == 1 && zatvori10 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(250, 100);
                        ctxKanvas.lineTo(300, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 100);
                        ctxKanvas.lineTo(250, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori10 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(250, 100);
                        ctxKanvas.lineTo(300, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 100);
                        ctxKanvas.lineTo(250, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori10 = 1;
                    }
                }
                
                if(flag11 == 1 && flag35 == 1 && flag41 == 1 && flag5 == 1 && zatvori11 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(250, 150);
                        ctxKanvas.lineTo(300, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 150);
                        ctxKanvas.lineTo(250, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori11 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(250, 150);
                        ctxKanvas.lineTo(300, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 150);
                        ctxKanvas.lineTo(250, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori11 = 1;
                    }
                }

                if(flag12 == 1 && flag41 == 1 && flag48 == 1 && flag6 == 1 && zatvori12 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(250, 200);
                        ctxKanvas.lineTo(300, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 200);
                        ctxKanvas.lineTo(250, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori12 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(250, 200);
                        ctxKanvas.lineTo(300, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 200);
                        ctxKanvas.lineTo(250, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori12 = 1;
                    }
                }

                if(flag13 == 1 && flag48 == 1 && flag54 == 1 && flag7 == 1 && zatvori13 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(250, 250);
                        ctxKanvas.lineTo(300, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 250);
                        ctxKanvas.lineTo(250, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori13 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(250, 250);
                        ctxKanvas.lineTo(300, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 250);
                        ctxKanvas.lineTo(250, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori13 = 1;
                    }
                }

                if(flag14 == 1 && flag54 == 1 && zatvori14 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(250, 300);
                        ctxKanvas.lineTo(300, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 300);
                        ctxKanvas.lineTo(250, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori14 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(250, 300);
                        ctxKanvas.lineTo(300, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 300);
                        ctxKanvas.lineTo(250, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori14 = 1;
                    }
                }


                if(flag17 == 1 && flag36 == 1 && flag10 == 1 && zatvori17 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 100);
                        ctxKanvas.lineTo(350, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 100);
                        ctxKanvas.lineTo(300, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori17 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 100);
                        ctxKanvas.lineTo(350, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 100);
                        ctxKanvas.lineTo(300, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori17 = 1;
                    }
                }

                if(flag18 == 1 && flag42 == 1 && flag11 == 1 && flag36 == 1 && zatvori18 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 150);
                        ctxKanvas.lineTo(350, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 150);
                        ctxKanvas.lineTo(300, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori18 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 150);
                        ctxKanvas.lineTo(350, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 150);
                        ctxKanvas.lineTo(300, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori18 = 1;
                    }
                }

                if(flag19 == 1 && flag49 == 1 && flag12 == 1 && flag42 == 1 && zatvori19 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 200);
                        ctxKanvas.lineTo(350, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 200);
                        ctxKanvas.lineTo(300, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori19 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 200);
                        ctxKanvas.lineTo(350, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 200);
                        ctxKanvas.lineTo(300, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori19 = 1;
                    }
                }

                if(flag20 == 1 && flag55 == 1 && flag13 == 1 && flag49 == 1 && zatvori20 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 250);
                        ctxKanvas.lineTo(350, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 250);
                        ctxKanvas.lineTo(300, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori20 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 250);
                        ctxKanvas.lineTo(350, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 250);
                        ctxKanvas.lineTo(300, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori20 = 1;
                    }
                }

                if(flag21 == 1 && flag14 == 1 && flag55 == 1 && zatvori21 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 300);
                        ctxKanvas.lineTo(350, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 300);
                        ctxKanvas.lineTo(300, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori21 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 300);
                        ctxKanvas.lineTo(350, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 300);
                        ctxKanvas.lineTo(300, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori21 = 1;
                    }
                }



                if(flag17 == 1 && flag37 == 1 && zatvori24 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 100);
                        ctxKanvas.lineTo(400, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(400, 100);
                        ctxKanvas.lineTo(350, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori24 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 100);
                        ctxKanvas.lineTo(400, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(400, 100);
                        ctxKanvas.lineTo(350, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori24 = 1;
                    }
                }

                if(flag18 == 1 && flag37 == 1 && flag43 == 1 && flag24 == 1 && zatvori25 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 150);
                        ctxKanvas.lineTo(400, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(400, 150);
                        ctxKanvas.lineTo(350, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori25 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 150);
                        ctxKanvas.lineTo(400, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(400, 150);
                        ctxKanvas.lineTo(350, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori25 = 1;
                    }
                }

                if(flag19 == 1 && flag43 == 1 && flag50 == 1 && flag25 == 1 && zatvori26 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 200);
                        ctxKanvas.lineTo(400, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(400, 200);
                        ctxKanvas.lineTo(350, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori26 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 200);
                        ctxKanvas.lineTo(400, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(400, 200);
                        ctxKanvas.lineTo(350, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori26 = 1;
                    }
                }

                if(flag20 == 1 && flag50 == 1 && flag56 == 1 && flag26 == 1 && zatvori27 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 250);
                        ctxKanvas.lineTo(400, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(400, 250);
                        ctxKanvas.lineTo(350, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori27 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 250);
                        ctxKanvas.lineTo(400, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(400, 250);
                        ctxKanvas.lineTo(350, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori27 = 1;
                    }
                }

                if(flag21 == 1 && flag56 == 1 &&  zatvori28 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 300);
                        ctxKanvas.lineTo(400, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(400, 300);
                        ctxKanvas.lineTo(350, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori28 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 300);
                        ctxKanvas.lineTo(400, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(400, 300);
                        ctxKanvas.lineTo(350, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori28 = 1;
                    }
                }



                if( flag44 == 1 && flag24 == 1 &&  zatvori31 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(400, 150);
                        ctxKanvas.lineTo(450, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(450, 150);
                        ctxKanvas.lineTo(400, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori31 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(400, 150);
                        ctxKanvas.lineTo(450, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(450, 150);
                        ctxKanvas.lineTo(400, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori31 = 1;
                    }
                }

                if(flag44 == 1 &&  flag25 == 1 && zatvori32 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(400, 200);
                        ctxKanvas.lineTo(450, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(450, 200);
                        ctxKanvas.lineTo(400, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori32 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(400, 200);
                        ctxKanvas.lineTo(450, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(450, 200);
                        ctxKanvas.lineTo(400, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori32 = 1;
                    }
                }

                if(flag51 == 1 && flag26 == 1 && zatvori33 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(400, 250);
                        ctxKanvas.lineTo(450, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(450, 250);
                        ctxKanvas.lineTo(400, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori33 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(400, 250);
                        ctxKanvas.lineTo(450, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(450, 250);
                        ctxKanvas.lineTo(400, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori33 = 1;
                    }
                }

                
                if(zatvori5 == 1 && zatvori6 == 1 && zatvori7 == 1 &&  zatvori10 == 1 && zatvori11 == 1 && zatvori12 == 1 && zatvori13 == 1 && zatvori14 == 1 &&  zatvori17 == 1 && zatvori18 == 1 && zatvori19 == 1 && zatvori20 == 1 && zatvori21 == 1 &&  zatvori24 == 1 && zatvori25 == 1 && zatvori26 == 1 && zatvori27 == 1 && zatvori28 == 1 && zatvori31 == 1 && zatvori32 == 1 && zatvori33 == 1){
                    ctxKanvas.fillStyle = 'rgb(0,0,0,0.7)';
                    ctxKanvas.fillRect(0,0,650,450);
                    if(crvenipoeni>plavipoeni){
                        ctxKanvas.font = '90px bold';
                        ctxKanvas.fillStyle = 'blue';
                        ctxKanvas.fillText('POBJEDNIK JE', 15, 70);
                        ctxKanvas.fillText(lnick, 250, 170);
                    }
                    else if(plavipoeni>crvenipoeni){
                        ctxKanvas.font = '90px bold';
                        ctxKanvas.fillStyle = 'red';
                        ctxKanvas.fillText('POBJEDNIK JE', 15, 70);
                        ctxKanvas.fillText(dnick, 250, 170);
                    }
                    else if(crvenipoeni==plavipoeni){
                        ctxKanvas.font = '100px bold';
                        ctxKanvas.fillStyle = 'yellow';
                        ctxKanvas.fillText('NEMA POBJEDNIKA', 0, 110);
                    }
                    ctxKanvas.fillStyle = 'black';
                    ctxKanvas.fillRect(150, 200, 350, 75);
                    ctxKanvas.fillStyle = 'rgb(245,174,8)';
                    ctxKanvas.font = '50px bold';
                    ctxKanvas.fillText('Revanš', 265, 252);

                    ctxKanvas.fillStyle = 'black';
                    ctxKanvas.fillRect(150, 300, 350, 75);
                    ctxKanvas.fillStyle = 'rgb(245,174,8)';
                    ctxKanvas.font = '50px bold';
                    ctxKanvas.fillText('Nova Igra', 225, 352);

                    kanvas.onclick = function(event){
                        var x = event.offsetX;
                        var y = event.offsetY;
                        if(x <= 500 && x >= 150 && y >= 200 && y <= 275){
                            igra2();
                        }
                        else if(x <= 500 && x >= 150 && y >= 300 && y <= 375){
                            novaigra();
                        }
                    }
                
            
        }
            if(pogodak != 1 && veckliknuto == 0){

                korak++;
                if(korak % 2 == 1){
                    plavi = true;
                    crveni = false;
                }
                else if(korak % 2 == 0){
                    plavi = false;
                    crveni = true;
                }
                if(plavi == true){
                    ctxKanvas.fillStyle = 'red';
                    ctxKanvas.fillRect(600, 200, 50, 50);
                    ctxKanvas.fillStyle = 'rgb(255, 214, 117)';
                    ctxKanvas.fillRect(0, 200, 50, 50);
                }
                else if(crveni == true){
                    ctxKanvas.fillStyle = 'blue';
                    ctxKanvas.fillRect(0, 200, 50, 50);
                    ctxKanvas.fillStyle = 'rgb(255, 214, 117)';
                    ctxKanvas.fillRect(600, 200, 50, 50);
                }
            }
            }
        }
    }

}






function kanvasCrtanje3(){
        ctxKanvas.fillStyle = 'rgb(255, 214, 117)';
        ctxKanvas.clearRect(0, 0, 650, 450);
        ctxKanvas.fillRect(0,0,650,450);
    for(let x = 0; x <= 650; x += 50){
        ctxKanvas.beginPath();
        ctxKanvas.strokeStyle = 'rgba(0, 0, 0, 0.5)';
        ctxKanvas.moveTo(x, 0);
        ctxKanvas.lineTo(x, 450);
        ctxKanvas.stroke();
        ctxKanvas.closePath();
    }
    for(let y = 0; y <= 450; y += 50){
        ctxKanvas.beginPath();
        ctxKanvas.strokeStyle = 'rgba(0,0,0,0.5)';
        ctxKanvas.moveTo(0, y);
        ctxKanvas.lineTo(650, y);
        ctxKanvas.stroke();
        ctxKanvas.closePath();
    }
    ctxKanvas.strokeStyle = 'black';
    ctxKanvas.beginPath();
    ctxKanvas.rect(150,50,350,350);
    ctxKanvas.stroke();
    ctxKanvas.closePath();
    ctxKanvas.beginPath();
    ctxKanvas.rect(100,200,50,50);
    ctxKanvas.stroke();
    ctxKanvas.closePath();
    ctxKanvas.beginPath();
    ctxKanvas.rect(300,0,50,50);
    ctxKanvas.stroke();
    ctxKanvas.closePath();
    ctxKanvas.beginPath();
    ctxKanvas.rect(300,400,50,50);
    ctxKanvas.stroke();
    ctxKanvas.closePath();
    ctxKanvas.beginPath();
    ctxKanvas.rect(500,200,50,50);
    ctxKanvas.stroke();
    ctxKanvas.closePath();
}























function igra3(){
    kanvasCrtanje3();

    ctxKanvas.beginPath();
    ctxKanvas.strokeStyle = 'rgb(0,0,0)';
    ctxKanvas.moveTo(150, 200);
    ctxKanvas.lineTo(150, 250);
    ctxKanvas.stroke();
    ctxKanvas.closePath();
    ctxKanvas.beginPath();
    ctxKanvas.strokeStyle = 'blue';
    ctxKanvas.moveTo(100, 200);
    ctxKanvas.lineTo(150, 250);
    ctxKanvas.stroke();
    ctxKanvas.closePath();
    ctxKanvas.beginPath();
    ctxKanvas.strokeStyle = 'blue';
    ctxKanvas.moveTo(100, 250);
    ctxKanvas.lineTo(150, 200);
    ctxKanvas.stroke();
    ctxKanvas.closePath();

    ctxKanvas.beginPath();
    ctxKanvas.strokeStyle = 'rgb(0,0,0)';
    ctxKanvas.moveTo(300, 50);
    ctxKanvas.lineTo(350,50);
    ctxKanvas.stroke();
    ctxKanvas.closePath();
    ctxKanvas.beginPath();
    ctxKanvas.strokeStyle = 'blue';
    ctxKanvas.moveTo(300, 0);
    ctxKanvas.lineTo(350, 50);
    ctxKanvas.stroke();
    ctxKanvas.closePath();
    ctxKanvas.beginPath();
    ctxKanvas.strokeStyle = 'blue';
    ctxKanvas.moveTo(350, 0);
    ctxKanvas.lineTo(300, 50);
    ctxKanvas.stroke();
    ctxKanvas.closePath();

    ctxKanvas.beginPath();
    ctxKanvas.strokeStyle = 'rgb(0,0,0)';
    ctxKanvas.moveTo(300, 400);
    ctxKanvas.lineTo(350, 400);
    ctxKanvas.stroke();
    ctxKanvas.closePath();
    ctxKanvas.beginPath();
    ctxKanvas.strokeStyle = 'red';
    ctxKanvas.moveTo(300, 450);
    ctxKanvas.lineTo(350, 400);
    ctxKanvas.stroke();
    ctxKanvas.closePath();
    ctxKanvas.beginPath();
    ctxKanvas.strokeStyle = 'red';
    ctxKanvas.moveTo(350, 450);
    ctxKanvas.lineTo(300, 400);
    ctxKanvas.stroke();
    ctxKanvas.closePath();

    ctxKanvas.beginPath();
    ctxKanvas.strokeStyle = 'rgb(0,0,0)';
    ctxKanvas.moveTo(500, 200);
    ctxKanvas.lineTo(500, 250);
    ctxKanvas.stroke();
    ctxKanvas.closePath();
    ctxKanvas.beginPath();
    ctxKanvas.strokeStyle = 'red';
    ctxKanvas.moveTo(550, 200);
    ctxKanvas.lineTo(500, 250);
    ctxKanvas.stroke();
    ctxKanvas.closePath();
    ctxKanvas.beginPath();
    ctxKanvas.strokeStyle = 'red';
    ctxKanvas.moveTo(550, 250);
    ctxKanvas.lineTo(500, 200);
    ctxKanvas.stroke();
    ctxKanvas.closePath();

    var korak = 3;
    var plavi = true;
    var crveni = false;
    var crvenipoeni = 2;
    var plavipoeni = 2;
    var flag1 = 0,
        flag2 = 0,
        flag3 = 0,
        flag4 = 0,
        flag5 = 0,
        flag6 = 0,
        flag7 = 0,
        flag8 = 0,
        flag9 = 0,
        flag10 = 0,
        flag11 = 0,
        flag12 = 0,
        flag13 = 0,
        flag14 = 0,
        flag15 = 0,
        flag16 = 0,
        flag17 = 0,
        flag18 = 0,
        flag19 = 0,
        flag20 = 0,
        flag21 = 0,
        flag22 = 0,
        flag23 = 0,
        flag24 = 0,
        flag25 = 0,
        flag26 = 0,
        flag27 = 0,
        flag28 = 0,
        flag29 = 0,
        flag30 = 0,
        flag31 = 0,
        flag32 = 0,
        flag33 = 0,
        flag34 = 0,
        flag35 = 0,
        flag36 = 0,
        flag37 = 0,
        flag38 = 0,
        flag39 = 0,
        flag40 = 0,
        flag41 = 0,
        flag42 = 0,
        flag43 = 0,
        flag44 = 0,
        flag45 = 0,
        flag46 = 0,
        flag47 = 0,
        flag48 = 0,
        flag49 = 0,
        flag50 = 0,
        flag51 = 0,
        flag52 = 0,
        flag53 = 0,
        flag54 = 0,
        flag55 = 0,
        flag56 = 0,
        flag57 = 0,
        flag58 = 0,
        flag59 = 0,
        flag60 = 0,
        zatvori1 = 0,
        zatvori2 = 0,
        zatvori3 = 0,
        zatvori4 = 0,
        zatvori5 = 0,
        zatvori6 = 0,
        zatvori7 = 0,
        zatvori8 = 0,
        zatvori9 = 0,
        zatvori10 = 0,
        zatvori11 = 0,
        zatvori12 = 0,
        zatvori13 = 0,
        zatvori14 = 0,
        zatvori15 = 0,
        zatvori16 = 0,
        zatvori17 = 0,
        zatvori18 = 0,
        zatvori19 = 0,
        zatvori20 = 0,
        zatvori21 = 0,
        zatvori22 = 0,
        zatvori23 = 0,
        zatvori24 = 0,
        zatvori25 = 0,
        zatvori26 = 0,
        zatvori27 = 0,
        zatvori28 = 0,
        zatvori29 = 0,
        zatvori30 = 0,
        zatvori31 = 0,
        zatvori32 = 0,
        zatvori33 = 0,
        zatvori34 = 0,
        zatvori35 = 0,
        zatvori36 = 0,
        zatvori37 = 0;

    var nflag1 = 0,
        nflag2 = 0,
        nflag3 = 0,
        nflag4 = 0,
        nflag5 = 0,
        nflag6 = 0,
        nflag7 = 0,
        nflag8 = 0,
        nflag9 = 0,
        nflag10 = 0,
        nflag11 = 0,
        nflag12 = 0,
        nflag13 = 0,
        nflag14 = 0,
        nflag15 = 0,
        nflag16 = 0,
        nflag17 = 0,
        nflag18 = 0,
        nflag19 = 0,
        nflag20 = 0,
        nflag21 = 0,
        nflag22 = 0,
        nflag23 = 0,
        nflag24 = 0,
        nzatvori1 = 0,
        nzatvori2 = 0,
        nzatvori3 = 0,
        nzatvori4 = 0,
        nzatvori5 = 0,
        nzatvori6 = 0,
        nzatvori7 = 0,
        nzatvori8 = 0,
        nzatvori9 = 0,
        nzatvori10 = 0,
        nzatvori11 = 0,
        nzatvori12 = 0;


        ctxKanvas.fillStyle = 'red';
        ctxKanvas.fillRect(600, 200, 50, 50);
        var pogodak = 0;

    kanvas.onclick = function(event){
        if(zatvori1 == 1 && zatvori2 == 1 && zatvori3 == 1 && zatvori4 == 1 && zatvori5 == 1 && zatvori6 == 1 && zatvori7 == 1 && zatvori8 == 1 && zatvori9 == 1 && zatvori10 == 1 && zatvori11 == 1 && zatvori12 == 1 && zatvori13 == 1 && zatvori14 == 1 && zatvori15 == 1 && zatvori16 == 1 && zatvori17 == 1 && zatvori18 == 1 && zatvori19 == 1 && zatvori20 == 1 && zatvori21 == 1 && zatvori22 == 1 && zatvori23 == 1 && zatvori24 == 1 && zatvori25 == 1 && zatvori26 == 1 && zatvori27 == 1 && zatvori28 == 1 && zatvori29 == 1 && zatvori30 == 1 && zatvori31 == 1 && zatvori32 == 1 && zatvori33 == 1 && zatvori34 == 1 && zatvori35 == 1 && zatvori36 == 1 && zatvori37 == 1 && nzatvori1 == 1 && nzatvori2 == 1 && nzatvori3 == 1 && nzatvori4 == 1 && nzatvori5 == 1 && nzatvori6 == 1 && nzatvori7 == 1 && nzatvori8 == 1 && nzatvori9 == 1 && nzatvori10 == 1 && nzatvori11 == 1 && nzatvori12 == 1 ){
            ctxKanvas.fillStyle = 'rgb(0,0,0,0.7)';
            ctxKanvas.fillRect(0,0,650,450);
            if(crvenipoeni>plavipoeni){
                ctxKanvas.font = '90px bold';
                ctxKanvas.fillStyle = 'blue';
                ctxKanvas.fillText('POBJEDNIK JE', 15, 70);
                ctxKanvas.fillText(lnick, 250, 170);
            }
            else if(plavipoeni>crvenipoeni){
                ctxKanvas.font = '90px bold';
                ctxKanvas.fillStyle = 'red';
                ctxKanvas.fillText('POBJEDNIK JE', 15, 70);
                ctxKanvas.fillText(dnick, 250, 170);
            }
            else if(crvenipoeni==plavipoeni){
                ctxKanvas.font = '100px bold';
                ctxKanvas.fillStyle = 'yellow';
                ctxKanvas.fillText('NEMA POBJEDNIKA', 0, 110);
            }
            ctxKanvas.fillStyle = 'black';
            ctxKanvas.fillRect(150, 200, 350, 75);
            ctxKanvas.fillStyle = 'rgb(245,174,8)';
            ctxKanvas.font = '50px bold';
            ctxKanvas.fillText('Revanš', 265, 252);

            ctxKanvas.fillStyle = 'black';
            ctxKanvas.fillRect(150, 300, 350, 75);
            ctxKanvas.fillStyle = 'rgb(245,174,8)';
            ctxKanvas.font = '50px bold';
            ctxKanvas.fillText('Nova Igra', 225, 352);
            
            kanvas.onclick = function(event){
                var x = event.offsetX;
                var y = event.offsetY;
                if(x <= 500 && x >= 150 && y >= 200 && y <= 275){
                    igra3();
                }
            }
        }
        else{
            pass = 0;
            var x = event.offsetX;
            var y = event.offsetY;
            if((x >= 195 && x <= 205) || (x >= 245 && x <= 265) || (x >= 295 && x <= 305) || (x >= 345 && x <= 355) || (x >= 395 && x <= 405) || (x >= 445 && x <= 455) || (y >= 95 && y <= 105) || (y >= 145 && y <= 155) || (y >= 195 && y <= 205) || (y >= 245 && y <= 255) || (y >= 295 && y <= 305) || (y >= 345 && y <= 355)){
                pass = 1;
            }
            if(pass == 1){
                var flag = 0;
                pogodak = 0;
                veckliknuto = 1;

                if(x >= 195 && x <= 205){
                    flag = 1;

                    if(y > 50 && y < 100 && nflag1 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(200, 50);
                        ctxKanvas.lineTo(200, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        nflag1 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 100 && y < 150 && nflag2 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(200, 100);
                        ctxKanvas.lineTo(200, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        nflag2 = 1;
                        veckliknuto = 0;
                    }   
                    if(y > 300 && y < 350 && nflag3 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(200, 300);
                        ctxKanvas.lineTo(200, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        nflag3 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 350 && y < 400 && nflag4 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(200, 350);
                        ctxKanvas.lineTo(200, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        nflag4 = 1;
                        veckliknuto = 0;
                    }   
                        

                    if(y > 150 && y < 200 && flag1 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(200, 150);
                        ctxKanvas.lineTo(200, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag1 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 200 && y < 250 && flag2 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(200, 200);
                        ctxKanvas.lineTo(200, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag2 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 250 && y < 300 && flag3 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(200, 250);
                        ctxKanvas.lineTo(200, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag3 = 1;
                        veckliknuto = 0;
                    }
                }
                
                if(x >= 245 && x <= 255){
                    flag = 1;

                    if(y > 50 && y < 100 && nflag5 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(250, 50);
                        ctxKanvas.lineTo(250, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        nflag5 = 1;
                        veckliknuto = 0;
                    }
                        if(y > 350 && y < 400 && nflag6 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(250, 350);
                        ctxKanvas.lineTo(250, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        nflag6 = 1;
                        veckliknuto = 0;
                    }

                    if(y > 100 && y < 150 && flag4 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(250, 100);
                        ctxKanvas.lineTo(250, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag4 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 150 && y < 200 && flag5 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(250, 150);
                        ctxKanvas.lineTo(250, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag5 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 200 && y < 250 && flag6 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(250, 200);
                        ctxKanvas.lineTo(250, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag6 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 250 && y < 300 && flag7 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(250, 250);
                        ctxKanvas.lineTo(250, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag7 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 300 && y < 350 && flag8 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(250, 300);
                        ctxKanvas.lineTo(250, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag8 = 1;
                        veckliknuto = 0;
                    }
                }
                
                if(x >= 295 && x <= 305){
                    flag = 1;
                    if(y > 50 && y < 100 && flag9 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(300, 50);
                        ctxKanvas.lineTo(300, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag9 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 100 && y < 150 && flag10 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(300, 100);
                        ctxKanvas.lineTo(300, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag10 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 150 && y < 200 && flag11 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(300, 150);
                        ctxKanvas.lineTo(300, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag11 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 200 && y < 250 && flag12 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(300, 200);
                        ctxKanvas.lineTo(300, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag12 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 250 && y < 300 && flag13 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(300, 250);
                        ctxKanvas.lineTo(300, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag13 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 300 && y < 350 && flag14 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(300, 300);
                        ctxKanvas.lineTo(300, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag14 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 350 && y < 400 && flag15 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(300, 350);
                        ctxKanvas.lineTo(300, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag15 = 1;
                        veckliknuto = 0;
                    }
                }
                
                if(x >= 345 && x <= 355){
                    flag = 1;
                    if(y > 50 && y < 100 && flag16 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(350, 50);
                        ctxKanvas.lineTo(350, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag16 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 100 && y < 150 && flag17 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(350, 100);
                        ctxKanvas.lineTo(350, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag17 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 150 && y < 200 && flag18 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(350, 150);
                        ctxKanvas.lineTo(350, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag18 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 200 && y < 250 && flag19 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(350, 200);
                        ctxKanvas.lineTo(350, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag19 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 250 && y < 300 && flag20 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(350, 250);
                        ctxKanvas.lineTo(350, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag20 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 300 && y < 350 && flag21 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(350, 300);
                        ctxKanvas.lineTo(350, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag21 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 350 && y < 400 && flag22 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(350, 350);
                        ctxKanvas.lineTo(350, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag22 = 1;
                        veckliknuto = 0;
                    }
                }
                
                if(x >= 395 && x <= 405){
                    flag = 1;

                    if(y > 50 && y < 100 && nflag7 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(400, 50);
                        ctxKanvas.lineTo(400, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        nflag7 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 350 && y < 400 && nflag8 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(400, 350);
                        ctxKanvas.lineTo(400, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        nflag8 = 1;
                        veckliknuto = 0;
                    }




                    if(y > 100 && y < 150 && flag23 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(400, 100);
                        ctxKanvas.lineTo(400, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag23 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 150 && y < 200 && flag24 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(400, 150);
                        ctxKanvas.lineTo(400, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag24 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 200 && y < 250 && flag25 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(400, 200);
                        ctxKanvas.lineTo(400, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag25 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 250 && y < 300 && flag26 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(400, 250);
                        ctxKanvas.lineTo(400, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag26 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 300 && y < 350 && flag27 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(400, 300);
                        ctxKanvas.lineTo(400, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag27 = 1;
                        veckliknuto = 0;
                    }
                    
                }

                if(x >= 445 && x <= 455){
                    flag = 1;

                    if(y > 50 && y < 100 && nflag9 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(450, 50);
                        ctxKanvas.lineTo(450, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        nflag9 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 100 && y < 150 && nflag10 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(450, 100);
                        ctxKanvas.lineTo(450, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        nflag10 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 300 && y < 350 && nflag11 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(450, 300);
                        ctxKanvas.lineTo(450, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        nflag11 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 350 && y < 400 && nflag12 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(450, 350);
                        ctxKanvas.lineTo(450, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        nflag12 = 1;
                        veckliknuto = 0;
                    }


                    if(y > 150 && y < 200 && flag28 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(450, 150);
                        ctxKanvas.lineTo(450, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag28 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 200 && y < 250 && flag29 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(450, 200);
                        ctxKanvas.lineTo(450, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag29 = 1;
                        veckliknuto = 0;
                    }
                    if(y > 250 && y < 300 && flag30 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(450, 250);
                        ctxKanvas.lineTo(450, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag30 = 1;
                        veckliknuto = 0;
                    }
                }

                if(y >= 95 && y <= 102 && flag == 0){


                    if(x > 150 && x < 200 && nflag13 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(150, 100);
                        ctxKanvas.lineTo(200, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        nflag13 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 200 && x < 250 && nflag14 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(200, 100);
                        ctxKanvas.lineTo(250, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        nflag14 = 1;
                        veckliknuto = 0;
                    }

                    if(x > 400 && x < 450 && nflag15 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(400, 100);
                        ctxKanvas.lineTo(450, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        nflag15 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 450 && x < 500 && nflag16 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(450, 100);
                        ctxKanvas.lineTo(500, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        nflag16 = 1;
                        veckliknuto = 0;
                    }


                    if(x > 250 && x < 300 && flag31 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(250, 100);
                        ctxKanvas.lineTo(300, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag31 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 300 && x < 350 && flag32 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(300, 100);
                        ctxKanvas.lineTo(350, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag32 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 350 && x < 400 && flag33 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(350, 100);
                        ctxKanvas.lineTo(400, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag33 = 1;
                        veckliknuto = 0;
                    }
                }

                if(y >= 145 && y <= 155 && flag == 0){

                    if(x > 150 && x < 200 && nflag17 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(150, 150);
                        ctxKanvas.lineTo(200, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        nflag17 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 450 && x < 500 && nflag18 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(450, 150);
                        ctxKanvas.lineTo(500, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        nflag18 = 1;
                        veckliknuto = 0;
                    }





                    if(x > 200 && x < 250 && flag34 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(200, 150);
                        ctxKanvas.lineTo(250, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag34 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 250 && x < 300 && flag35 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(250, 150);
                        ctxKanvas.lineTo(300, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag35 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 300 && x < 350 && flag36 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(300, 150);
                        ctxKanvas.lineTo(350, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag36 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 350 && x < 400 && flag37 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(350, 150);
                        ctxKanvas.lineTo(400, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag37 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 400 && x < 450 && flag38 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(400, 150);
                        ctxKanvas.lineTo(450, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag38 = 1;
                        veckliknuto = 0;
                    }
                }

                if(y >= 195 && y <= 205 && flag == 0){
                    if(x > 150 && x < 200 && flag39 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(150, 200);
                        ctxKanvas.lineTo(200, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag39 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 200 && x < 250 && flag40 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(200, 200);
                        ctxKanvas.lineTo(250, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag40 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 250 && x < 300 && flag41 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(250, 200);
                        ctxKanvas.lineTo(300, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag41 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 300 && x < 350 && flag42 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(300, 200);
                        ctxKanvas.lineTo(350, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag42 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 350 && x < 400 && flag43 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(350, 200);
                        ctxKanvas.lineTo(400, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag43 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 400 && x < 450 && flag44 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(400, 200);
                        ctxKanvas.lineTo(450, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag44 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 450 && x < 500 && flag45 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(450, 200);
                        ctxKanvas.lineTo(500, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag45 = 1;
                        veckliknuto = 0;
                    }
                }

                if(y >= 245 && y <= 255 && flag == 0){
                    if(x > 150 && x < 200 && flag46 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(150, 250);
                        ctxKanvas.lineTo(200, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag46 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 200 && x < 250 && flag47 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(200, 250);
                        ctxKanvas.lineTo(250, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag47 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 250 && x < 300 && flag48 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(250, 250);
                        ctxKanvas.lineTo(300, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag48 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 300 && x < 350 && flag49 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(300, 250);
                        ctxKanvas.lineTo(350, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag49 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 350 && x < 400 && flag50 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(350, 250);
                        ctxKanvas.lineTo(400, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag50 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 400 && x < 450 && flag51 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(400, 250);
                        ctxKanvas.lineTo(450, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag51 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 450 && x < 500 && flag52 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(450, 250);
                        ctxKanvas.lineTo(500, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag52 = 1;
                        veckliknuto = 0;
                    }
                }

                if(y >= 295 && y <= 305 && flag == 0){

                    if(x > 150 && x < 200 && nflag19 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(150, 300);
                        ctxKanvas.lineTo(200, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        nflag19 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 450 && x < 500 && nflag20 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(450, 300);
                        ctxKanvas.lineTo(500, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        nflag20 = 1;
                        veckliknuto = 0;
                    }




                    if(x > 200 && x < 250 && flag53 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(200, 300);
                        ctxKanvas.lineTo(250, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag53 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 250 && x < 300 && flag54 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(250, 300);
                        ctxKanvas.lineTo(300, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag54 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 300 && x < 350 && flag55 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(300, 300);
                        ctxKanvas.lineTo(350, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag55 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 350 && x < 400 && flag56 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(350, 300);
                        ctxKanvas.lineTo(400, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag56 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 400 && x < 450 && flag57 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(400, 300);
                        ctxKanvas.lineTo(450, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag57 = 1;
                        veckliknuto = 0;
                    }
                }


                if(y >= 345 && y <= 355 && flag == 0){

                        
                    if(x > 150 && x < 200 && nflag21 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(150, 350);
                        ctxKanvas.lineTo(200, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        nflag21 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 200 && x < 250 && nflag22 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(200, 350);
                        ctxKanvas.lineTo(250, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        nflag22 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 400 && x < 450 && nflag23 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(400, 350);
                        ctxKanvas.lineTo(450, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        nflag23 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 450 && x < 500 && nflag24 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(450, 350);
                        ctxKanvas.lineTo(500, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        nflag24 = 1;
                        veckliknuto = 0;
                    }


                    if(x > 250 && x < 300 && flag58 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(250, 350);
                        ctxKanvas.lineTo(300, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag58 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 300 && x < 350 && flag59 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(300, 350);
                        ctxKanvas.lineTo(350, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag59 = 1;
                        veckliknuto = 0;
                    }
                    if(x > 350 && x < 400 && flag60 == 0){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'rgb(0,0,0)';
                        ctxKanvas.moveTo(350, 350);
                        ctxKanvas.lineTo(400, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        flag60 = 1;
                        veckliknuto = 0;
                    }
                }

                if(nflag1 == 1 && nflag13== 1 && nzatvori1 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(150, 50);
                        ctxKanvas.lineTo(200, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(200, 50);
                        ctxKanvas.lineTo(150, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        plavipoeni++;
                        nzatvori1 = 1;
                        pogodak = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(150, 50);
                        ctxKanvas.lineTo(200, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(200, 50);
                        ctxKanvas.lineTo(150, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        nzatvori1 = 1;
                    }
                }
                if(nflag2 == 1 && nflag13 == 1 && nflag17 == 1 && nzatvori2 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(150, 100);
                        ctxKanvas.lineTo(200, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(200, 100);
                        ctxKanvas.lineTo(150, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        plavipoeni++;
                        nzatvori2 = 1;
                        pogodak = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(150, 100);
                        ctxKanvas.lineTo(200, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(200, 100);
                        ctxKanvas.lineTo(150, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        nzatvori2 = 1;
                    }
                }
                if(nflag3 == 1 && nflag21 == 1 && nflag19 == 1 && nzatvori3 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(150, 300);
                        ctxKanvas.lineTo(200, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(200, 300);
                        ctxKanvas.lineTo(150, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        plavipoeni++;
                        nzatvori3 = 1;
                        pogodak = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(150, 300);
                        ctxKanvas.lineTo(200, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(200, 300);
                        ctxKanvas.lineTo(150, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        nzatvori3 = 1;
                    }
                }
                if(nflag4 == 1 && nflag21 == 1 && nzatvori4 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(150, 350);
                        ctxKanvas.lineTo(200, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(200, 350);
                        ctxKanvas.lineTo(150, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        plavipoeni++;
                        nzatvori4 = 1;
                        pogodak = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(150, 350);
                        ctxKanvas.lineTo(200, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(200, 350);
                        ctxKanvas.lineTo(150, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        nzatvori4 = 1;
                    }
                }
                if(nflag1 == 1 && nflag5 == 1 && nflag14 == 1 && nzatvori5 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(200, 50);
                        ctxKanvas.lineTo(250, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(250, 50);
                        ctxKanvas.lineTo(200, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        plavipoeni++;
                        nzatvori5 = 1;
                        pogodak = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(200, 50);
                        ctxKanvas.lineTo(250, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(250, 50);
                        ctxKanvas.lineTo(200, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        nzatvori5 = 1;
                    }
                }
                if(nflag4 == 1 && nflag6 == 1 && nflag22 == 1 && nzatvori6 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(200, 350);
                        ctxKanvas.lineTo(250, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(250, 350);
                        ctxKanvas.lineTo(200, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        plavipoeni++;
                        nzatvori6 = 1;
                        pogodak = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(200, 350);
                        ctxKanvas.lineTo(250, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(250, 350);
                        ctxKanvas.lineTo(200, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        nzatvori6 = 1;
                    }
                }
                if(nflag7 == 1 && nflag9 == 1 && nflag15 == 1 && nzatvori7 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(400, 50);
                        ctxKanvas.lineTo(450, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(450, 50);
                        ctxKanvas.lineTo(400, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        plavipoeni++;
                        nzatvori7 = 1;
                        pogodak = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(400, 50);
                        ctxKanvas.lineTo(450, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(450, 50);
                        ctxKanvas.lineTo(400, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        nzatvori7 = 1;
                    }
                }
                if(nflag8 == 1 && nflag12 == 1 && nflag23 == 1 && nzatvori8 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(400, 350);
                        ctxKanvas.lineTo(450, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(450, 350);
                        ctxKanvas.lineTo(400, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        plavipoeni++;
                        nzatvori8 = 1;
                        pogodak = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(400, 350);
                        ctxKanvas.lineTo(450, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(450, 350);
                        ctxKanvas.lineTo(400, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        nzatvori8 = 1;
                    }
                }
                if(nflag9 == 1 && nflag16 == 1 && nzatvori9 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(450, 50);
                        ctxKanvas.lineTo(500, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(500, 50);
                        ctxKanvas.lineTo(450, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        plavipoeni++;
                        nzatvori9 = 1;
                        pogodak = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(450, 50);
                        ctxKanvas.lineTo(500, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(500, 50);
                        ctxKanvas.lineTo(450, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        nzatvori9 = 1;
                    }
                }
                if(nflag10 == 1 && nflag16 == 1 && nflag18 == 1 && nzatvori10 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(450, 100);
                        ctxKanvas.lineTo(500, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(500, 100);
                        ctxKanvas.lineTo(450, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        plavipoeni++;
                        nzatvori10 = 1;
                        pogodak = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(450, 100);
                        ctxKanvas.lineTo(500, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(500, 100);
                        ctxKanvas.lineTo(450, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        nzatvori10 = 1;
                    }
                }
                if(nflag11 == 1 && nflag20 == 1 && nflag24 == 1 && nzatvori11 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(450, 300);
                        ctxKanvas.lineTo(500, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(500, 300);
                        ctxKanvas.lineTo(450, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        plavipoeni++;
                        nzatvori11 = 1;
                        pogodak = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(450, 300);
                        ctxKanvas.lineTo(500, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(500, 300);
                        ctxKanvas.lineTo(450, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        nzatvori11 = 1;
                    }
                }
                if(nflag12 == 1 && nflag24 == 1 && nzatvori12 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(450, 350);
                        ctxKanvas.lineTo(500, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(500, 350);
                        ctxKanvas.lineTo(450, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        plavipoeni++;
                        nzatvori12 = 1;
                        pogodak = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(450, 350);
                        ctxKanvas.lineTo(500, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(500, 350);
                        ctxKanvas.lineTo(450, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        nzatvori12 = 1;
                    }
                }


                if(flag1 == 1 && flag39 == 1 && nflag17 == 1 && zatvori1 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(150, 150);
                        ctxKanvas.lineTo(200, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(200, 150);
                        ctxKanvas.lineTo(150, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        plavipoeni++;
                        zatvori1 = 1;
                        pogodak = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(150, 150);
                        ctxKanvas.lineTo(200, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(200, 150);
                        ctxKanvas.lineTo(150, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori1 = 1;
                    }
                }

                if(flag39 == 1 && flag2 == 1 && flag46 == 1 && zatvori2 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(150, 200);
                        ctxKanvas.lineTo(200, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(200, 200);
                        ctxKanvas.lineTo(150, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori2 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(150, 200);
                        ctxKanvas.lineTo(200, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(200, 200);
                        ctxKanvas.lineTo(150, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori2 = 1;
                    }
                }

                if(flag46 == 1 && flag3 == 1 && nflag19 == 1 && zatvori3 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(150, 250);
                        ctxKanvas.lineTo(200, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(200, 250);
                        ctxKanvas.lineTo(150, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori3 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(150, 250);
                        ctxKanvas.lineTo(200, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(200, 250);
                        ctxKanvas.lineTo(150, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori3 = 1;
                    }
                }

                if(flag4 == 1 && flag34 == 1 && nflag2 == 1 && nflag14 == 1 && zatvori4 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(200, 100);
                        ctxKanvas.lineTo(250, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(250, 100);
                        ctxKanvas.lineTo(200, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori4 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(200, 100);
                        ctxKanvas.lineTo(250, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(250, 100);
                        ctxKanvas.lineTo(200, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori4 = 1;
                    }
                }

                if(flag5 == 1 && flag34 == 1 && flag40 == 1 && flag1 == 1 && zatvori5 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(200, 150);
                        ctxKanvas.lineTo(250, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(250, 150);
                        ctxKanvas.lineTo(200, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori5 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(200, 150);
                        ctxKanvas.lineTo(250, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(250, 150);
                        ctxKanvas.lineTo(200, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori5 = 1;
                    }
                }

                if(flag6 == 1 && flag40 == 1 && flag2 == 1 && flag47 == 1 && zatvori6 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(200, 200);
                        ctxKanvas.lineTo(250, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(250, 200);
                        ctxKanvas.lineTo(200, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori6 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(200, 200);
                        ctxKanvas.lineTo(250, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(250, 200);
                        ctxKanvas.lineTo(200, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori6 = 1;
                    }
                }

                if(flag7 == 1 && flag47 == 1 && flag3 == 1 && flag53 == 1 && zatvori7 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(200, 250);
                        ctxKanvas.lineTo(250, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(250, 250);
                        ctxKanvas.lineTo(200, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori7 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(200, 250);
                        ctxKanvas.lineTo(250, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(250, 250);
                        ctxKanvas.lineTo(200, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori7 = 1;
                    }
                }

                if(flag8 == 1 && flag53 == 1 && nflag3 ==1 && nflag22 == 1 && zatvori8 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(200, 300);
                        ctxKanvas.lineTo(250, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(250, 300);
                        ctxKanvas.lineTo(200, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori8 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(200, 300);
                        ctxKanvas.lineTo(250, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(250, 300);
                        ctxKanvas.lineTo(200, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori8 = 1;
                    }
                }

                if(flag9 == 1 && flag31 == 1 && nflag5 == 1 && zatvori9 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(250, 50);
                        ctxKanvas.lineTo(300, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 50);
                        ctxKanvas.lineTo(250, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori9 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(250, 50);
                        ctxKanvas.lineTo(300, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 50);
                        ctxKanvas.lineTo(250, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori9 = 1;
                    }
                }

                if(flag10 == 1 && flag31 == 1 && flag35 == 1 && flag4 == 1 && zatvori10 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(250, 100);
                        ctxKanvas.lineTo(300, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 100);
                        ctxKanvas.lineTo(250, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori10 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(250, 100);
                        ctxKanvas.lineTo(300, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 100);
                        ctxKanvas.lineTo(250, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori10 = 1;
                    }
                }
                
                if(flag11 == 1 && flag35 == 1 && flag41 == 1 && flag5 == 1 && zatvori11 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(250, 150);
                        ctxKanvas.lineTo(300, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 150);
                        ctxKanvas.lineTo(250, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori11 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(250, 150);
                        ctxKanvas.lineTo(300, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 150);
                        ctxKanvas.lineTo(250, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori11 = 1;
                    }
                }

                if(flag12 == 1 && flag41 == 1 && flag48 == 1 && flag6 == 1 && zatvori12 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(250, 200);
                        ctxKanvas.lineTo(300, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 200);
                        ctxKanvas.lineTo(250, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori12 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(250, 200);
                        ctxKanvas.lineTo(300, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 200);
                        ctxKanvas.lineTo(250, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori12 = 1;
                    }
                }

                if(flag13 == 1 && flag48 == 1 && flag54 == 1 && flag7 == 1 && zatvori13 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(250, 250);
                        ctxKanvas.lineTo(300, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 250);
                        ctxKanvas.lineTo(250, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori13 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(250, 250);
                        ctxKanvas.lineTo(300, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 250);
                        ctxKanvas.lineTo(250, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori13 = 1;
                    }
                }

                if(flag14 == 1 && flag54 == 1 && flag58 == 1 && flag8 == 1 && zatvori14 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(250, 300);
                        ctxKanvas.lineTo(300, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 300);
                        ctxKanvas.lineTo(250, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori14 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(250, 300);
                        ctxKanvas.lineTo(300, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 300);
                        ctxKanvas.lineTo(250, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori14 = 1;
                    }
                }

                if(nflag6 == 1 && flag58 == 1 && flag15 == 1 && zatvori15 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(250, 350);
                        ctxKanvas.lineTo(300, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 350);
                        ctxKanvas.lineTo(250, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori15 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(250, 350);
                        ctxKanvas.lineTo(300, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 350);
                        ctxKanvas.lineTo(250, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori15 = 1;
                    }
                }

                if(flag16 == 1 && flag32 == 1 && flag9 == 1 && zatvori16 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 50);
                        ctxKanvas.lineTo(350, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 50);
                        ctxKanvas.lineTo(300, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori16 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 50);
                        ctxKanvas.lineTo(350, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 50);
                        ctxKanvas.lineTo(300, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori16 = 1;
                    }
                }

                if(flag17 == 1 && flag36 == 1 && flag10 == 1 && flag32 == 1 && zatvori17 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 100);
                        ctxKanvas.lineTo(350, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 100);
                        ctxKanvas.lineTo(300, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori17 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 100);
                        ctxKanvas.lineTo(350, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 100);
                        ctxKanvas.lineTo(300, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori17 = 1;
                    }
                }

                if(flag18 == 1 && flag42 == 1 && flag11 == 1 && flag36 == 1 && zatvori18 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 150);
                        ctxKanvas.lineTo(350, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 150);
                        ctxKanvas.lineTo(300, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori18 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 150);
                        ctxKanvas.lineTo(350, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 150);
                        ctxKanvas.lineTo(300, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori18 = 1;
                    }
                }

                if(flag19 == 1 && flag49 == 1 && flag12 == 1 && flag42 == 1 && zatvori19 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 200);
                        ctxKanvas.lineTo(350, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 200);
                        ctxKanvas.lineTo(300, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori19 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 200);
                        ctxKanvas.lineTo(350, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 200);
                        ctxKanvas.lineTo(300, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori19 = 1;
                    }
                }

                if(flag20 == 1 && flag55 == 1 && flag13 == 1 && flag49 == 1 && zatvori20 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 250);
                        ctxKanvas.lineTo(350, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 250);
                        ctxKanvas.lineTo(300, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori20 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 250);
                        ctxKanvas.lineTo(350, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 250);
                        ctxKanvas.lineTo(300, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori20 = 1;
                    }
                }

                if(flag21 == 1 && flag59 == 1 && flag14 == 1 && flag55 == 1 && zatvori21 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 300);
                        ctxKanvas.lineTo(350, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 300);
                        ctxKanvas.lineTo(300, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori21 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 300);
                        ctxKanvas.lineTo(350, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 300);
                        ctxKanvas.lineTo(300, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori21 = 1;
                    }
                }

                if(flag22 == 1 && flag59 == 1 && flag15 == 1 && zatvori22 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(300, 350);
                        ctxKanvas.lineTo(350, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 350);
                        ctxKanvas.lineTo(300, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori22 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(300, 350);
                        ctxKanvas.lineTo(350, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 350);
                        ctxKanvas.lineTo(300, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori22 = 1;
                    }
                }

                if(flag16 == 1 && flag33 == 1 && nflag7 == 1 && zatvori23 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 50);
                        ctxKanvas.lineTo(400, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(400, 50);
                        ctxKanvas.lineTo(350, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori23 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 50);
                        ctxKanvas.lineTo(400, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(400, 50);
                        ctxKanvas.lineTo(350, 100);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori23 = 1;
                    }
                }

                if(flag17 == 1 && flag33 == 1 && flag37 == 1 && flag23 == 1 && zatvori24 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 100);
                        ctxKanvas.lineTo(400, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(400, 100);
                        ctxKanvas.lineTo(350, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori24 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 100);
                        ctxKanvas.lineTo(400, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(400, 100);
                        ctxKanvas.lineTo(350, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori24 = 1;
                    }
                }

                if(flag18 == 1 && flag37 == 1 && flag43 == 1 && flag24 == 1 && zatvori25 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 150);
                        ctxKanvas.lineTo(400, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(400, 150);
                        ctxKanvas.lineTo(350, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori25 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 150);
                        ctxKanvas.lineTo(400, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(400, 150);
                        ctxKanvas.lineTo(350, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori25 = 1;
                    }
                }

                if(flag19 == 1 && flag43 == 1 && flag50 == 1 && flag25 == 1 && zatvori26 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 200);
                        ctxKanvas.lineTo(400, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(400, 200);
                        ctxKanvas.lineTo(350, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori26 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 200);
                        ctxKanvas.lineTo(400, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(400, 200);
                        ctxKanvas.lineTo(350, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori26 = 1;
                    }
                }

                if(flag20 == 1 && flag50 == 1 && flag56 == 1 && flag26 == 1 && zatvori27 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 250);
                        ctxKanvas.lineTo(400, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(400, 250);
                        ctxKanvas.lineTo(350, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori27 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 250);
                        ctxKanvas.lineTo(400, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(400, 250);
                        ctxKanvas.lineTo(350, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori27 = 1;
                    }
                }

                if(flag21 == 1 && flag56 == 1 && flag60 == 1 && flag27 == 1 && zatvori28 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 300);
                        ctxKanvas.lineTo(400, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(400, 300);
                        ctxKanvas.lineTo(350, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori28 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 300);
                        ctxKanvas.lineTo(400, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(400, 300);
                        ctxKanvas.lineTo(350, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori28 = 1;
                    }
                }

                if(flag22 == 1 && flag60 == 1 && nflag8 == 1 && zatvori29 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(350, 350);
                        ctxKanvas.lineTo(400, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(400, 350);
                        ctxKanvas.lineTo(350, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori29 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(350, 350);
                        ctxKanvas.lineTo(400, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(400, 350);
                        ctxKanvas.lineTo(350, 400);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori29 = 1;
                    }
                }

                if(flag38 == 1 && flag23 == 1 && nflag10 == 1 && nflag15 == 1 && zatvori30 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(400, 100);
                        ctxKanvas.lineTo(450, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(450, 100);
                        ctxKanvas.lineTo(400, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori30 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(400, 100);
                        ctxKanvas.lineTo(450, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(450, 100);
                        ctxKanvas.lineTo(400, 150);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori30 = 1;
                    }
                }

                if(flag38 == 1 && flag44 == 1 && flag24 == 1 && flag28 == 1 && zatvori31 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(400, 150);
                        ctxKanvas.lineTo(450, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(450, 150);
                        ctxKanvas.lineTo(400, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori31 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(400, 150);
                        ctxKanvas.lineTo(450, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(450, 150);
                        ctxKanvas.lineTo(400, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori31 = 1;
                    }
                }

                if(flag44 == 1 && flag51 == 1 && flag25 == 1 && flag29 == 1 && zatvori32 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(400, 200);
                        ctxKanvas.lineTo(450, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(450, 200);
                        ctxKanvas.lineTo(400, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori32 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(400, 200);
                        ctxKanvas.lineTo(450, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(450, 200);
                        ctxKanvas.lineTo(400, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori32 = 1;
                    }
                }

                if(flag51 == 1 && flag57 == 1 && flag26 == 1 && flag30 == 1 && zatvori33 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(400, 250);
                        ctxKanvas.lineTo(450, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(450, 250);
                        ctxKanvas.lineTo(400, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori33 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(400, 250);
                        ctxKanvas.lineTo(450, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(450, 250);
                        ctxKanvas.lineTo(400, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori33 = 1;
                    }
                }

                if(flag57 == 1 && flag27 == 1 && nflag11 == 1 && nflag23 == 1 && zatvori34 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(400, 300);
                        ctxKanvas.lineTo(450, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(450, 300);
                        ctxKanvas.lineTo(400, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori34 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(400, 300);
                        ctxKanvas.lineTo(450, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(450, 300);
                        ctxKanvas.lineTo(400, 350);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori34 = 1;
                    }
                }

                if(flag28 == 1 && flag45 == 1 && nflag18 == 1 && zatvori35 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(450, 150);
                        ctxKanvas.lineTo(500, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(500, 150);
                        ctxKanvas.lineTo(450, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori35 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(450, 150);
                        ctxKanvas.lineTo(500, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(500, 150);
                        ctxKanvas.lineTo(450, 200);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori35 = 1;
                    }
                }

                if(flag29 == 1 && flag45 == 1 && flag52 == 1 && zatvori36 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(450, 200);
                        ctxKanvas.lineTo(500, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(500, 200);
                        ctxKanvas.lineTo(450, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori36 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(450, 200);
                        ctxKanvas.lineTo(500, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(500, 200);
                        ctxKanvas.lineTo(450, 250);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori36 = 1;
                    }
                }

                if(flag30 == 1 && flag52 == 1 && nflag20 == 1 && zatvori37 == 0){
                    if(plavi == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(450, 250);
                        ctxKanvas.lineTo(500, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'red';
                        ctxKanvas.moveTo(500, 250);
                        ctxKanvas.lineTo(450, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        plavipoeni++;
                        zatvori37 = 1;
                    }
                    else if(crveni == true){
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(450, 250);
                        ctxKanvas.lineTo(500, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        ctxKanvas.beginPath();
                        ctxKanvas.strokeStyle = 'blue';
                        ctxKanvas.moveTo(500, 250);
                        ctxKanvas.lineTo(450, 300);
                        ctxKanvas.stroke();
                        ctxKanvas.closePath();
                        pogodak = 1;
                        crvenipoeni++;
                        zatvori37 = 1;
                    }
                }
                if(zatvori1 == 1 && zatvori2 == 1 && zatvori3 == 1 && zatvori4 == 1 && zatvori5 == 1 && zatvori6 == 1 && zatvori7 == 1 && zatvori8 == 1 && zatvori9 == 1 && zatvori10 == 1 && zatvori11 == 1 && zatvori12 == 1 && zatvori13 == 1 && zatvori14 == 1 && zatvori15 == 1 && zatvori16 == 1 && zatvori17 == 1 && zatvori18 == 1 && zatvori19 == 1 && zatvori20 == 1 && zatvori21 == 1 && zatvori22 == 1 && zatvori23 == 1 && zatvori24 == 1 && zatvori25 == 1 && zatvori26 == 1 && zatvori27 == 1 && zatvori28 == 1 && zatvori29 == 1 && zatvori30 == 1 && zatvori31 == 1 && zatvori32 == 1 && zatvori33 == 1 && zatvori34 == 1 && zatvori35 == 1 && zatvori36 == 1 && zatvori37 == 1 && nzatvori1 == 1 && nzatvori2 == 1 && nzatvori3 == 1 && nzatvori4 == 1 && nzatvori5 == 1 && nzatvori6 == 1 && nzatvori7 == 1 && nzatvori8 == 1 && nzatvori9 == 1 && nzatvori10 == 1 && nzatvori11 == 1 && nzatvori12 == 1){
                    ctxKanvas.fillStyle = 'rgb(0,0,0,0.7)';
                    ctxKanvas.fillRect(0,0,650,450);
                    if(crvenipoeni>plavipoeni){
                        ctxKanvas.font = '90px bold';
                        ctxKanvas.fillStyle = 'blue';
                        ctxKanvas.fillText('POBJEDNIK JE', 15, 70);
                        ctxKanvas.fillText(lnick, 250, 170);
                    }
                    else if(plavipoeni>crvenipoeni){
                        ctxKanvas.font = '90px bold';
                        ctxKanvas.fillStyle = 'red';
                        ctxKanvas.fillText('POBJEDNIK JE', 15, 70);
                        ctxKanvas.fillText(dnick, 250, 170);
                    }
                    else if(crvenipoeni==plavipoeni){
                        ctxKanvas.font = '100px bold';
                        ctxKanvas.fillStyle = 'yellow';
                        ctxKanvas.fillText('NEMA POBJEDNIKA', 0, 110);
                    }
                    ctxKanvas.fillStyle = 'black';
                    ctxKanvas.fillRect(150, 200, 350, 75);
                    ctxKanvas.fillStyle = 'rgb(245,174,8)';
                    ctxKanvas.font = '50px bold';
                    ctxKanvas.fillText('Revanš', 265, 252);

                    ctxKanvas.fillStyle = 'black';
                    ctxKanvas.fillRect(150, 300, 350, 75);
                    ctxKanvas.fillStyle = 'rgb(245,174,8)';
                    ctxKanvas.font = '50px bold';
                    ctxKanvas.fillText('Nova Igra', 225, 352);

                    kanvas.onclick = function(event){
                        var x = event.offsetX;
                        var y = event.offsetY;
                        if(x <= 500 && x >= 150 && y >= 200 && y <= 275){
                            igra3();
                        }
                        else if(x <= 500 && x >= 150 && y >= 300 && y <= 375){
                            novaigra();
                        }
                    }
            
        }
            if(pogodak != 1 && veckliknuto == 0){

                korak++;
                if(korak % 2 == 1){
                    plavi = true;
                    crveni = false;
                }
                else if(korak % 2 == 0){
                    plavi = false;
                    crveni = true;
                }
                if(plavi == true){
                    ctxKanvas.fillStyle = 'red';
                    ctxKanvas.fillRect(600, 200, 50, 50);
                    ctxKanvas.fillStyle = 'rgb(255, 214, 117)';
                    ctxKanvas.fillRect(0, 200, 50, 50);
                }
                else if(crveni == true){
                    ctxKanvas.fillStyle = 'blue';
                    ctxKanvas.fillRect(0, 200, 50, 50);
                    ctxKanvas.fillStyle = 'rgb(255, 214, 117)';
                    ctxKanvas.fillRect(600, 200, 50, 50);
                }
            }
            }
        }
    }

}


/*
if(x<=275){
    while(x % 50 != 0){
        x--
    }
}
else if(x>275){
    while(x % 50 != 0){
        x++
    }
}

if(y<=75){
    while(y % 50 != 0){
        y--
    }
}
else if(y>75){
    while(y % 50 != 0){
        y++
    }
}
*/
