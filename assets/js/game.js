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
var enemy = {name: "Pikachu", lvl: 10, hpnow: 50, hptotal: 60, img: "assets/images/pikachufront.png"}
var hero = {name: "Mew", lvl: 15, hpnow: 65, hptotal: 75, img: "assets/images/mewback.png"}

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

