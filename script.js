const input = document.querySelector("input");
const letters = Array.from(document.querySelectorAll("[data-letters]"));
const specs = Array.from(document.querySelectorAll("[data-spec]"));
const textExample = document.querySelector("#textExample");
const symbolsPerMinute = document.querySelector("#symbolsPerMinute");
const errorPercent = document.querySelector("#errorPercent");


let text = ``;
let isText1 = localStorage.getItem("text1")
let isText2 = localStorage.getItem("text2")
let isText3 = localStorage.getItem("text3")
let isText4 = localStorage.getItem("text4")
let isText5 = localStorage.getItem("text5")
let isText6 = localStorage.getItem("text6")

let isTextTest1 = localStorage.getItem("test1")
let isTextTest2 = localStorage.getItem("test2")
let isTextTest3 = localStorage.getItem("test3")
let isTextTest4 = localStorage.getItem("test4")
let isTextTest5 = localStorage.getItem("test5")
let isTextTest6 = localStorage.getItem("test6")
let isTextTest7 = localStorage.getItem("test7")
let isTextTest8 = localStorage.getItem("test8")
let isTextTest9 = localStorage.getItem("test9")
let isTextTest10 = localStorage.getItem("test10")


if(isText1 == "True"){
	text = "Эйч - загадочный и холодный на вид джентльмен, но внутри него пылает жажда правосудия. Преследуя свои мотивы, он намерен найти заказчика серии многомиллионных ограблений, потрясших Лос-Анджелес. В этой запутанной игре у каждого своя роль, но виновные обязательно познают гнев человеческий..."
}
if(isText2 == "True"){
	text = "Вдохновившись самопожертвованием Супермена, Брюс Уэйн вновь обретает веру в человечество. Он заручается поддержкой новой союзницы Дианы Принс, чтобы сразиться с ещё более могущественным противником. Бэтмен и Чудо-женщина набирают команду сверхлюдей для борьбы с пробудившейся угрозой."
}
if(isText3 == "True"){
	text = "Майор полиции Игорь Гром известен всему Санкт-Петербургу своим пробивным характером и непримиримой позицией по отношению к преступникам всех мастей. Неимоверная сила, аналитический склад ума и неподкупность – всё это делает майора Грома идеальным полицейским, не знающим преград. Но всё резко меняется с появлением человека в маске Чумного Доктора."
}
if(isText4 == "True"){
	text = "Отважной воительнице по имени Райя и её верному спутнику Тук-Туку предстоит покинуть родное королевство Кумандра, чтобы отыскать последнего оставшегося в мире дракона, и с его помощью вернуть надежду на победу над могущественным врагом."
}
if(isText5 == "True"){
	text = "Предыстория экстравагантной и коварной Круэллы Де Виль из диснеевской классики «101 далматинец». В 1970-х молодая Эстелла, которой только предстоит стать злодейкой, начинает покорять мир британской моды. Она знакомится с баронессой фон Хельман, главой престижного модного дома, и эта встреча становится началом восхождения Круэллы – тёмной стороны личности Эстеллы, которая была с ней с самого детства."
}
if(isText6 == "True"){
	text = "Непримечательный и незаметный человек живёт обычной жизнью, пока однажды, спасая женщину от нападения бандитов, не отправляет одного из хулиганов в больницу. Лишь позже он узнаёт, что это был брат влиятельного гангстера, который теперь жаждет мести."
}


if(isTextTest1 == "True"){
	text = "Диспетчер службы спасения, бывший полицейский Асгер Хольм, принимает звонок от похищенной женщины. Когда связь обрывается, приходит время начать поиски жертвы и похитителя, и каждая прошедшая минута уменьшает шансы на благополучный исход. Однако, вскоре Асгер понимает, что это совсем не обычное похищение…"
}
if(isTextTest2 == "True"){
	text = "Бла Бла2"
}

if(isTextTest3 == "True"){
	text = "Бла Бла3"
}

if(isTextTest4 == "True"){
	text = "Бла Бла4"
}

if(isTextTest5 == "True"){
	text = "Бла Бла5"
}

if(isTextTest6 == "True"){
	text = "Бла Бла6"
}

if(isTextTest7 == "True"){
	text = "Бла Бла7"
}


if(isTextTest8 == "True"){
	text = "Бла Бла8"
}

if(isTextTest9 == "True"){
	text = "Бла Бла9"
}

if(isTextTest10 == "True"){
	text = "Бла Бла10"
}



const party = createParty(text);

init();

function init() {
	input.addEventListener("keydown", keydownHandler);
	input.addEventListener("keyup", keyupHandler);

	viewUpdate();
}

function keydownHandler(event) {
	event.preventDefault();

	const letter = letters.find((x) => x.dataset.letters.includes(event.key));

	if (letter) {
		letter.classList.add("pressed");
		press(event.key);
		return;
	}

	let key = event.key.toLowerCase();

	if (key === " ") {
		key = "space";
		press(" ");
	}

	if (key === "enter") {
		press("\n");
	}

	const ownSpecs = specs.filter((x) => x.dataset.spec === key);

	if (ownSpecs.length) {
		ownSpecs.forEach((spec) => spec.classList.add("pressed"));
		return;
	}

	console.warn("Не известный вид клавиши.", event);
}

function keyupHandler(event) {
	event.preventDefault();

	const letter = letters.find((x) => x.dataset.letters.includes(event.key));

	if (letter) {
		letter.classList.remove("pressed");

		return;
	}

	let key = event.key.toLowerCase();

	if (key === " ") {
		key = "space";
	}

	const ownSpecs = specs.filter((x) => x.dataset.spec === key);

	if (ownSpecs.length) {
		ownSpecs.forEach((spec) => spec.classList.remove("pressed"));
		return;
	}
}

function createParty(text) {
	const party = {
		text,
		strings: [],
		currentStringIndex: 0,
		currentPressedIndex: 0,
		errors: [],
		started: false,

		statisticFlag: false,
		timerCounter: 0,
		startTimer: 0,
		errorCounter: 0,
		commonCounter: 0,
	};

	party.text = party.text.replace(/\n/g, "\n ");
	const words = party.text.split(" ");

	let string = [];
	for (const word of words) {
		const newStringLength =
			[...string, word].join(" ").length + !word.includes("\n");

		if (newStringLength > party.maxStringLength) {
			
		}

		string.push(word);

		if (word.includes("\n")) {
			party.strings.push(string.join(" "));
			string = [];
		}
	}

	if (string.length) {
		party.strings.push(string.join(" "));
	}

	return party;
}

function press(letter) {
	party.started = true;

	if (!party.statisticFlag) {
		party.statisticFlag = true;
		party.startTimer = Date.now();
	}

	const string = party.strings[party.currentStringIndex];
	const mustLetter = string[party.currentPressedIndex];

	if (letter === mustLetter) {
		party.currentPressedIndex++;

		if (string.length <= party.currentPressedIndex) {
			party.currentPressedIndex = 0;
			party.currentStringIndex++;
			

			party.statisticFlag = false;
			party.timerCounter = Date.now() - party.startTimer;
		}
		party.commonCounter++;	
	} else if (!party.errors.includes(mustLetter)) {
		party.errors.push(mustLetter);
		party.errorCounter++;
	}
	
	viewUpdate();
}

function viewUpdate() {
	const string = party.strings[party.currentStringIndex];

	const showedStrings = party.strings.slice(
		party.currentStringIndex
	);

	const div = document.createElement("div");

	const firstLine = document.createElement("div");
	firstLine.classList.add("line");
	div.append(firstLine);

	const done = document.createElement("span");
	done.classList.add("done");
	done.textContent = string.slice(0, party.currentPressedIndex);
	firstLine.append(
		done,
		...string
			.slice(party.currentPressedIndex)
			.split("")
	);

	for (let i = 1; i < showedStrings.length; i++) {
		const line = document.createElement("div");
		line.classList.add("line");
		div.append(line);

		line.append(
			...showedStrings[i].split("").map((letter) => {

				return letter;
			})
		);
	}

	textExample.innerHTML = "";
	textExample.append(div);

	input.value = string.slice(0, party.currentPressedIndex);
	
	if(party.commonCounter>1){
		symbolsPerMinute.textContent = Math.round((party.commonCounter * 60000)/(Date.now() - party.startTimer))
	}
	
	errorPercent.textContent =party.errorCounter;


	if(party.commonCounter == (text.length - 1)){
		
		if(isText1== "True" || isText2== "True" || isText3== "True" || isText4== "True" || isText5== "True" || isText6== "True"){
			fn1()
			
		}

		if(isTextTest1== "True" || isTextTest2== "True" || isTextTest3== "True" || isTextTest4== "True" || isTextTest5== "True" || isTextTest6== "True" || isTextTest7== "True" || isTextTest8== "True" || isTextTest9== "True" || isTextTest10== "True"){
			fn2()
			
		}
	}
	
}















