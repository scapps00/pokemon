var music = document.getElementById("music");
music.loop = true;

var enemyname = document.getElementById("enemyname");
var enemylvl = document.getElementById("enemylvl");
var enemyhpbarfull = document.getElementById("enemyhpbarfull");
var enemyhp = document.getElementById("enemyhp");
var enemyimg = document.getElementById("enemyimg");
var heroname = document.getElementById("heroname");
var herolvl = document.getElementById("herolvl");
var herohpbarfull = document.getElementById("herohpbarfull");
var herohp = document.getElementById("herohp");
var heroimg = document.getElementById("heroimg");
var fight = document.getElementById("fight");
var options = document.getElementById("options");
var move1 = "";
var fight = document.getElementById("fight");
var win = document.getElementById("win");
var random = 0;

function tacklehero() {
		enemy.hpnow = enemy.hpnow - 5
		enemyhp.textContent = "HP " + enemy.hpnow + "/" + enemy.hptotal;
		enemyhpbarfull.style.width = enemy.hpnow / enemy.hptotal * 100 + "%";

}

function tackleenemy() {
		hero.hpnow = hero.hpnow - 5
		herohp.textContent = "HP " + hero.hpnow + "/" + hero.hptotal;
		herohpbarfull.style.width = hero.hpnow / hero.hptotal * 100 + "%";
}

var enemy = {name: "Pikachu", lvl: 10, hpnow: 60, hptotal: 60, img: "assets/images/pikachufront.png", moves: [{name: "Tackle", effect: function() {tackleenemy()}}, "", "", ""]}
var hero = {name: "Mew", lvl: 15, hpnow: 75, hptotal: 75, img: "assets/images/mewback.png", moves: [{name: "Tackle", effect: function() {tacklehero()}}, "", "", ""]}

function randomizer() {
	random = Math.floor(Math.random() * 4);
	if (enemy.moves[random] == "") {
		randomizer();
	}
}

function enemymove() {
	if (enemy.hpnow == 0) {
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
		enemy.moves[random].effect();
		opt0.textContent = enemy.name + " used " + enemy.moves[random].name + "!";
		opt1.textContent = "";
		opt2.textContent = "";
		opt3.textContent = "";
		setTimeout(options, 2000);
	}
}

function domove(x) {
	fight.play();
	hero.moves[x].effect();
	opt0.textContent = hero.name + " used " + hero.moves[x].name + "!";
	opt1.textContent = "";
	opt2.textContent = "";
	opt3.textContent = "";
	setTimeout (enemymove, 2000);
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