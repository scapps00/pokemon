var music = document.getElementById("music");
music.loop = true;

var enemyname = document.getElementById("enemyname");
var enemylvl = document.getElementById("enemylvl");
var enemystatus = document.getElementById("enemystatus");
var enemyhpbarfull = document.getElementById("enemyhpbarfull");
var enemyhp = document.getElementById("enemyhp");
var enemyimg = document.getElementById("enemyimg");
var heroname = document.getElementById("heroname");
var herolvl = document.getElementById("herolvl");
var herostatus = document.getElementById("herostatus");
var herohpbarfull = document.getElementById("herohpbarfull");
var herohp = document.getElementById("herohp");
var heroimg = document.getElementById("heroimg");
var fight = document.getElementById("fight");
var options = document.getElementById("options");
var move1 = "";
var fight = document.getElementById("fight");
var win = document.getElementById("win");
var rando = 0;
var placeholder = "";

function paralyzeenemy() {
	rando = Math.random();
	if (rando < .25 && hero.status == "") {
		placeholder = function() {		
			hero.status = "paralyzed";
			herostatus.textContent = "paralyzed";
			opt0.textContent = hero.name + " is paralyzed";
			opt1.textContent = "and can't move!";
			opt2.textContent = "";
			opt3.textContent = "";
		}
		setTimeout(placeholder, 2000);
		setTimeout(options, 4000);
	}
	else {
		setTimeout(options, 2000);
	}
}

function tacklehero() {
		enemy.hpnow = enemy.hpnow - 5 + enemy.defense
		enemyhp.textContent = "HP " + enemy.hpnow + "/" + enemy.hptotal;
		enemyhpbarfull.style.width = enemy.hpnow / enemy.hptotal * 100 + "%";
		setTimeout(options, 2000);

}

function tackleenemy() {
		hero.hpnow = hero.hpnow - 5 + hero.defense
		herohp.textContent = "HP " + hero.hpnow + "/" + hero.hptotal;
		herohpbarfull.style.width = hero.hpnow / hero.hptotal * 100 + "%";
		setTimeout(options, 2000);
}


function tailwhiphero() {
	enemy.defense--;
	setTimeout(options, 2000);
}

function tailwhipenemy() {
	enemy.defense--;
	setTimeout(options, 2000);
}

function electricshockenemy() {
	hero.hpnow = hero.hpnow - 10 + hero.defense;
	herohp.textContent = "HP " + hero.hpnow + "/" + hero.hptotal;
	herohpbarfull.style.width = hero.hpnow / hero.hptotal * 100 + "%";
	paralyzeenemy();
}

function psychichero() {
	enemy.hpnow = enemy.hpnow - 10 + hero.defense;
	enemyhp.textContent = "HP " + enemy.hpnow + "/" + enemy.hptotal;
	enemyhpbarfull.style.width = enemy.hpnow / enemy.hptotal * 100 + "%";
	setTimeout(options, 2000);
}

var enemy = {name: "Pikachu", type: "electric", status: "", lvl: 10, hpnow: 60, hptotal: 60, defense: 3, attack: 2, img: "assets/images/pikachufront.png", moves: [{name: "Tackle", effect: function() {tackleenemy()}}, {name: "Tail Whip", effect: function() {tailwhipenemy}}, {name: "Electric Shock", effect: function() {electricshockenemy()}}, ""]}
var hero = {name: "Mew", type: "psychic", status: "", lvl: 15, hpnow: 75, hptotal: 75, defense: 3, attack: 2, img: "assets/images/mewback.png", moves: [{name: "Tackle", effect: function() {tacklehero()}}, {name: "Tail Whip", effect: function() {tailwhiphero()}}, {name: "Psychic", effect: function() {psychichero()}}, ""]}

function randomizer() {
	random = Math.floor(Math.random() * 4);
	if (enemy.moves[random] == "") {
		randomizer();
	}
}

function lose() {
	opt0.textContent = "YOU LOSE!";
	opt1.textContent = "";
	opt2.textContent = "";
	opt3.textContent = "";
	music.pause();
	opt0.onclick = function() {
	}
	opt1.onclick = function() {
	}		
	opt2.onclick = function() {
	}		
	opt3.onclick = function() {
	}
}

function enemymove() {
	if (enemy.hpnow <= 0) {
		opt0.textContent = "YOU WIN!";
		opt1.textContent = "";
		opt2.textContent = "";
		opt3.textContent = "";
		win.play();
		music.pause();
		opt0.onclick = function() {
		}
		opt1.onclick = function() {
		}		
		opt2.onclick = function() {
		}		
		opt3.onclick = function() {
		}
	}
	else {
		randomizer();
		enemy.moves[2].effect();
		opt0.textContent = enemy.name + " used " + enemy.moves[random].name + "!";
		opt1.textContent = "";
		opt2.textContent = "";
		opt3.textContent = "";
		if (hero.hpnow <= 0) {
			setTimeout(lose, 2000);
		}
	}
}

function domove(x) {
	if (hero.status == "paralyzed") {
		random = Math.random();
		if (random < .45) {
			opt0.textContent = hero.name + " is no longer";
			opt1.textContent = "paralyzed!";
			opt2.textContent = "";
			opt3.textContent = "";
			hero.status = "";
			herostatus.textContent = "";
			setTimeout("domove("+x+")", 2000);
		}
		else {
			opt0.textContent = hero.name + " is paralyzed";
			opt1.textContent = "and can't move!";
			opt2.textContent = "";
			opt3.textContent = "";
			setTimeout(enemymove, 2000);
		}
	}
	else {
		fight.play();
		hero.moves[x].effect();
		opt0.textContent = hero.name + " used " + hero.moves[x].name + "!";
		opt1.textContent = "";
		opt2.textContent = "";
		opt3.textContent = "";
		setTimeout (enemymove, 2000);
	}
}

enemyname.textContent = enemy.name;
enemylvl.textContent = "Level: " + enemy.lvl;
enemyhp.textContent = "HP " + enemy.hpnow + "/" + enemy.hptotal;
enemyimg.src = enemy.img;
enemyhpbarfull.style.width = enemy.hpnow / enemy.hptotal * 100 + "%";

heroname.textContent = hero.name;
herolvl.textContent = "Level: " + hero.lvl;
herohp.textContent = "HP " + hero.hpnow + "/" + hero.hptotal;
heroimg.src = hero.img;
herohpbarfull.style.width = hero.hpnow / hero.hptotal * 100 + "%";

var options = function() {
	opt0.textContent = "FIGHT";
	opt1.textContent = "ITEMS";
	opt2.textContent = "QUIT";
	opt0.onclick = function() {
		opt0.textContent = hero.moves[0].name;
		opt0.onclick = function() {
			domove(0);
		}	
		if (hero.moves[1] !== "") {
			opt1.textContent = hero.moves[1].name;
			opt1.onclick = function () {
				domove(1);
			}
		}
		else {
			opt1.textContent = "";
		}
		if (hero.moves[2] !== "") {
			opt2.textContent = hero.moves[2].name;
			opt2.onclick = function () {
				domove(2);
			}
		}
		else {
			opt2.textContent = "";
		}
		if (hero.moves[3] !== "") {
			opt3.textContent = hero.moves[3].name;
			opt3.onclick = function () {
				domove(3);
			}
		}
		else {
			opt3.textContent = "";
		}
	}
}

options();