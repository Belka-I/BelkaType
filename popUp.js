function fn1 () {
    let message
    let newWin = window.open("about:blank", "hello", "width=200,height=200");
    if(isText1 == "True"){
        mustResult = 120;
        mustMiss = 5;
        if(mustResult<=symbolsPerMinute.textContent && mustMiss>=errorPercent.textContent){
            message = "Ура, уровень пройден!"
            localStorage.setItem("beginOrDone1", "True");
        }
        else{
            message = "Увы, уровень не пройден("
        }
    }
    
    if(isText2 == "True"){
        mustResult = 140;
        mustMiss = 4;
        if(mustResult<=symbolsPerMinute.textContent &&mustMiss>=errorPercent.textContent){
            message = "Ура, уровень пройден!"
            localStorage.setItem("beginOrDone2", "True");
        }
        else{
            message = "Увы, уровень не пройден("
        }
    }
    

    if(isText3 == "True"){
        mustResult = 160;
        mustMiss = 3;
        if(mustResult<=symbolsPerMinute.textContent &&mustMiss>=errorPercent.textContent){
            message = "Ура, уровень пройден!"
            localStorage.setItem("beginOrDone3", "True");
        }
        else{
            message = "Увы, уровень не пройден("
        }
    }


    if(isText4 == "True"){
        mustResult = 180;
        mustMiss = 2;
        if(mustResult<=symbolsPerMinute.textContent &&mustMiss>=errorPercent.textContent){
            message = "Ура, уровень пройден!"
            localStorage.setItem("beginOrDone4", "True");
        }
        else{
            message = "Увы, уровень не пройден("
        }
    }


    if(isText5 == "True"){
        mustResult = 190;
        mustMiss = 1;
        if(mustResult<=symbolsPerMinute.textContent &&mustMiss>=errorPercent.textContent){
            message = "Ура, уровень пройден!"
            localStorage.setItem("beginOrDone5", "True");
        }
        else{
            message = "Увы, уровень не пройден("
        }
    }


    if(isText6 == "True"){
        mustResult = 210;
        mustMiss = 0;
        if(mustResult<=symbolsPerMinute.textContent &&mustMiss>=errorPercent.textContent){
            message = "Ура, уровень пройден!"
            localStorage.setItem("beginOrDone6", "True");
        }
        else{
            message = "Увы, уровень не пройден("
        }
    }


    newWin.document.write("Твой результат <br \/> Скорость: ", symbolsPerMinute.textContent, "<br \/> Ошибки:", errorPercent.textContent, "<br \/>", message);
}



var beginOrDone = document.getElementById('Lavel1');
let isDone1 = localStorage.getItem("beginOrDone1")
if (isDone1=="True"){
    beginOrDone.innerHTML = 'Выполнено';
}




var beginOrDone = document.getElementById('Lavel2');
let isDone2 = localStorage.getItem("beginOrDone2")
if (isDone2=="True"){
    beginOrDone.innerHTML = 'Выполнено';
}

var beginOrDone = document.getElementById('Lavel3');
let isDone3 = localStorage.getItem("beginOrDone3")
if (isDone3=="True"){
    beginOrDone.innerHTML = 'Выполнено';
}

var beginOrDone = document.getElementById('Lavel4');
let isDone4 = localStorage.getItem("beginOrDone4")
if (isDone4=="True"){
    beginOrDone.innerHTML = 'Выполнено';
}

var beginOrDone = document.getElementById('Lavel5');
let isDone5 = localStorage.getItem("beginOrDone5")
if (isDone5=="True"){
    beginOrDone.innerHTML = 'Выполнено';
}

var beginOrDone = document.getElementById('Lavel6');
let isDone6 = localStorage.getItem("beginOrDone6")
if (isDone6=="True"){
    beginOrDone.innerHTML = 'Выполнено';
}


function fn2(){
	if(isTextTest1){
		let BestResultSpeed
		let BestResultMiss 
		let ResultSpeed 
		let ResultMiss 
		let SpeedResultOut
		let MissResultOut
		let newWin = window.open("about:blank", "hello", "width=200,height=200");
		SpeedResultOut = Number(localStorage.getItem("BestSpeed"))
		MissResultOut = Number(localStorage.getItem("BestMiss"))
		NumberSpeed = Number(symbolsPerMinute.textContent)
		NumberMiss = Number(errorPercent.textContent)
		if(SpeedResultOut < NumberSpeed){
			BestResultSpeed = NumberSpeed
		}
		else{
			BestResultSpeed = NumberSpeed
		}
		
		BestResultMiss = NumberMiss
		
		
		ResultSpeed = localStorage.setItem("BestSpeed", BestResultSpeed)
		ResultMiss = localStorage.setItem("BestMiss", BestResultMiss)
		SpeedResultOut = localStorage.getItem("BestSpeed")
		MissResultOut = localStorage.getItem("BestMiss")
		
		newWin.document.write("Твой результат <br \/> Скорость: ", symbolsPerMinute.textContent, "<br \/> Ошибки:", errorPercent.textContent, "<br \/> Твой лучший результат:","<br \/> Скорость: ", SpeedResultOut, "<br \/> Ошибки: ", MissResultOut);
	
    
    }
    
	
}



var DoneSpeed1 = document.getElementById('Speed1');
let OutSpeed = Number(localStorage.getItem("BestSpeed"))
DoneSpeed1.innerHTML = "Скорость: " + OutSpeed + " зн/мин";

var DoneMiss1 = document.getElementById('Miss1');
let OutMiss = Number(localStorage.getItem("BestMiss"))
DoneMiss1.innerHTML = "Ошибки: " + OutMiss ;




