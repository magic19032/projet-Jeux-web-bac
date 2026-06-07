const body = document.querySelector("body");
let x;
let y;
body.addEventListener("mousemove", (e) => {
	x = e.clientX;
	y = e.clientY;
	console.log(x, y);
});

const interface = document.querySelector("#interface");
const interfaceShop = document.querySelector("#interfaceShop");
const interfaceStat = document.querySelector("#interfaceStat");
const interfaceAvatar = document.querySelector("#interfaceAvatar");

const all = document.querySelector("#lvl, #progress-bar, #progress-container");
const lvl = document.querySelector("#lvl");
const exp = document.querySelector("#exp");
let expValue = 100000;
const progressBar = document.querySelector("#progress-bar");
const progressContainer = document.querySelector("#progress-container");

const shopClose = document.querySelector(".shopClose");
const statClose = document.querySelector(".statClose");
const avatarClose = document.querySelector(".avatarClose");

const play = document.querySelector("#play");
const yesPause = document.querySelector("#yesPause");
const noPause = document.querySelector("#noPause");
const pause = document.querySelector("#pause");
const textPause = document.querySelector("#textPause");
const textParagraphe = document.querySelector("#textParagraphe");

const shop = document.querySelector("#shop");
const sliderShop = document.querySelector("#sliderShop");
const item = document.querySelector("#item")
const stat = document.querySelector("#stat");
const avatar = document.querySelector("#avatar");
const menu = document.querySelector("#menu");
const playerBody = document.querySelector("#playerBody");
const playerEyeLeft = document.querySelector("#playerEyeLeft");
const playerEyeRight = document.querySelector("#playerEyeRight");
const playerPupilLeft = document.querySelector("#playerPupilLeft");
const playerPupilRight = document.querySelector("#playerPupilRight");
const playerPupil = [playerPupilLeft, playerPupilRight];
const playerHeal = document.querySelector("#playerHeal");
const playerHealProgress = document.querySelector("#playerHealProgress");
const playerHealProgressText = document.querySelector("#playerHealProgressText");
let player1 = playerBody.getBoundingClientRect();
const monsterModel = document.querySelector(".monster-model");
let playerRect = playerBody.getBoundingClientRect();
let playerX = playerRect.left + playerRect.width / 2;
let playerY = playerRect.top + playerRect.height / 2;
function createMonsterClone() {
	const monsterClone = monsterModel.cloneNode(true);
	return monsterClone;
}
let allMonsterClone = [];
let sliderHp = document.querySelector("#sliderHp");
let sliderAttack = document.querySelector("#sliderAttack");
let sliderSpeed = document.querySelector("#sliderSpeed");
let point = document.querySelector("#point");
let hp = document.querySelector("#hp");
let attack = document.querySelector("#attack");
let speed = document.querySelector("#speed");
let a = 10;
let z = 5;
let e = 2;
let aStat = 100;
let zStat = 10;
let eStat = 5;
let level = 1;
let levelUp = Math.round(100 * Math.pow(1.15, level));
let pointStat = 3;

let playerStat = {
	level : level,
	levelUp : levelUp,
	point : pointStat,
	exp : expValue,
	hp: aStat,
	attack: zStat,
	speed: eStat
}
let playerClone = "";
playerHealProgressText.textContent = playerStat.hp;
setInterval(() => {
	if(playerStat.level === 1){
		exp.textContent = `Vous avez ${expValue}/${levelUp} exp`;
		if(expValue >= levelUp){
			level += 1;
			pointStat += 3;
			expValue = expValue - levelUp;
			console.log(level)
			levelUp = Math.round(100 * Math.pow(1.15, level));
		}
	} else if(playerStat.level >= 2){
		exp.textContent = `Vous avez ${expValue}/${levelUp} exp`;
		if(expValue >= levelUp){
			level += 1;
      pointStat += 3;
			expValue = expValue - levelUp;
			console.log(level)
			levelUp = Math.round(100 * Math.pow(1.15, level));
		}
	}
	exp.textContent = `Vous avez ${expValue}/${levelUp} exp`;
	lvl.textContent = "Level : " + level;
	playerStat.level = level;
	playerStat.point = pointStat;
	playerStat.levelUp = levelUp;
  point.textContent = playerStat.point;
	expValue += 10;
}, 1);
setInterval(() => {
	progressBar.style.width = expValue / levelUp * 100 + "%";
}, 1)
hp.addEventListener("click", () => {
	if(playerStat.point <= 0){
		playerStat.point += 0;
	} else if (playerStat.point > 0){
		pointStat -= 1;
		aStat += a;
	}
	hp.textContent = "lvl : " + aStat;
	playerStat.hp = aStat;
	sliderHp.value = playerStat.hp;
	point.textContent = playerStat.point;
	playerStat.point = pointStat;
	playerHealProgressText.textContent = playerStat.hp;
	console.log(playerStat.hp)
})
attack.addEventListener("click", () => {
	if(playerStat.point <= 0){
		playerStat.point += 0;
	} else if (playerStat.point > 0){
		pointStat -= 1;
		zStat += z;
	}
	playerStat.attack = zStat;
	sliderAttack.value = playerStat.attack;
	attack.textContent = "lvl : " + zStat;
	point.textContent = playerStat.point;
	console.log(playerStat.attack)
})
speed.addEventListener("click", () => {
	if(playerStat.speed === 99){
		eStat += 1;
	} else if (playerStat.point <= 0 || playerStat.speed >= 100){
		pointStat += 0;
		eStat += 0;
	} else if (playerStat.point >= 0){
		pointStat -= 1;
		eStat += e;
	}
	playerStat.speed = eStat;
	sliderSpeed.value = playerStat.speed;
	speed.textContent = "lvl : " + eStat;
	point.textContent = playerStat.point;
	console.log(playerStat.speed)
})
shop.addEventListener("click", () => {
	console.log("hello")
	interfaceShop.style.display = "block";
	interface.style.display ="none";
	interfaceShop.classList.add("openInterface");
	interfaceShop.classList.remove("closeInterface");
	all.style.height = "0";
	all.style.width = "0";
	setTimeout(() => {
		all.style.height = "3vh";
		all.style.width = "20vw";
	}, 450);
})
stat.addEventListener("click", () => {
	interfaceStat.style.display = "block";
	interface.style.display ="none";
	interfaceStat.classList.add("openInterface");
	interfaceStat.classList.remove("closeInterface");
	all.style.height = "0";
		all.style.width = "0";
	setTimeout(() => {
		all.style.height = "3vh";
		all.style.width = "20vw";
	}, 450);
})
avatar.addEventListener("click", () => {
	console.log("hello")
	let i = 0;
	interfaceAvatar.style.display = "block";
	interface.style.display ="none";
	interfaceAvatar.classList.add("openInterface");
	interfaceAvatar.classList.remove("closeInterface");
	playerClone = playerBody.cloneNode(true)
  interfaceAvatar.appendChild(playerClone);
	playerClone.style.display = "inline-block"
	playerClone.style.scale = "2"
	playerClone.style.transform = "translate(-20%, 0%)"
	all.style.height = "0";
	all.style.width = "0";
	setTimeout(() => {
		all.style.height = "3vh";
		all.style.width = "20vw";
	}, 450);
})
shopClose.addEventListener("click", () => {
	interfaceShop.classList.remove("openInterface");
	interfaceShop.classList.add("closeInterface");
	all.style.height = "0";
	all.style.width = "0";
	setTimeout(() => {
	  interfaceShop.style.display = "none";
	}, 500);
	setTimeout(() => {
		interface.style.display = "block";
	}, 400);
	setTimeout(() => {
		all.style.height = "3vh";
		all.style.width = "20vw";
	}, 800);
})
statClose.addEventListener("click", () => {
	console.log("hello")
	interfaceStat.classList.remove("openInterface");
	interfaceStat.classList.add("closeInterface");
	all.style.height = "0";
	all.style.width = "0";
	setTimeout(() => {
	  interfaceStat.style.display = "none"
	}, 500);
	setTimeout(() => {
		interface.style.display = "block";
	}, 400);
	setTimeout(() => {
		all.style.height = "3vh";
		all.style.width = "20vw";
	}, 800);
})
avatarClose.addEventListener("click", () => {
	interfaceAvatar.classList.remove("openInterface");
	interfaceAvatar.classList.add("closeInterface");
	all.style.height = "0";
	all.style.width = "0";
	playerClone.remove();
	setTimeout(() => {
	  interfaceAvatar.style.display = "none"
	}, 500);
	setTimeout(() => {
		interface.style.display = "block";
	}, 400);
	setTimeout(() => {
		all.style.height = "3vh";
		all.style.width = "20vw";
	}, 800);
})

play.addEventListener("click", () => {
	menu.style.left = "-40%";
	play.style.right = "-40%";
	playerBody.style.display = "inline-block";
	playerHeal.style.display = "block";
	pause.style.display = "block";
	pause.textContent = "⏸️";
	let i = 0;
	while(i <= 9){
	i += 1;
	const monsterClone = createMonsterClone();
	const x = Math.random() * window.innerWidth;
	const y = Math.random() * window.innerHeight;
	monsterClone.classList.add("monster-model");
	monsterClone.style.display = "flex";
	monsterClone.style.position = "fixed";
  monsterClone.style.left = x + "px";
  monsterClone.style.top = y + "px";
	interface.appendChild(monsterClone);
	allMonsterClone.push(monsterClone);
	}
});
let w = 0;
let pauseTimeout = null
pause.addEventListener("click", () => {
	if(pauseTimeout !== null) {
		clearTimeout(pauseTimeout);
		pauseTimeout = null;
	}
		if(w === 0){
	  pause.textContent = "▶️";
		let i = 0;
		textPause.style.display = "block";
		textPause.classList.add("openTextPause");
		textPause.classList.remove("closeTextPause");
		pauseTimeout = setTimeout(() => {
			textParagraphe.textContent = "Voulez-vous vraiment quitter la partie ?";
			yesPause.style.opacity = "1";
			noPause.style.opacity = "1";
			w = 1;
			pauseTimeout = null;
		}, 500);
	}
	else if (w === 1){
		pause.textContent = "⏸️";
		textPause.classList.add("closeTextPause");
		textPause.classList.remove("openTextPause");
		textParagraphe.textContent = "";
		yesPause.style.opacity = "0";
		noPause.style.opacity = "0";
		pauseTimeout = setTimeout(() => {
			textPause.style.display = "none";
			w = 0;
			pauseTimeout = null;
		}, 500);
	}
})
yesPause.addEventListener("click", () => {
	menu.style.left = "2%";
	play.style.right = "50%";
	playerBody.style.display = "none";
	playerHeal.style.display = "none";
	pause.style.display = "none";
	textPause.classList.add("closeTextPause");
	textPause.classList.remove("openTextPause");
	textParagraphe.textContent = "";
	yesPause.style.opacity = "0";
	noPause.style.opacity = "0";
	setTimeout(() => {
		textPause.style.display = "none";
	}, 500);
	allMonsterClone.forEach(monsterClone => {
 		monsterClone.remove();
	})
	allMonsterClone = [];
	w = 0
})
noPause.addEventListener("click", () => {
	pause.textContent = "⏸️";
	textPause.classList.add("closeTextPause");
	textPause.classList.remove("openTextPause");
	textParagraphe.textContent = "";
	yesPause.style.opacity = "0";
	noPause.style.opacity = "0";
	setTimeout(() => {
		textPause.style.display = "none";
	}, 500);
	w = 0;
})
sliderShop.addEventListener("input", () => {
	const maxScroll = item.scrollWidth - item.clientWidth;
	const position = (sliderShop.value / 100) * maxScroll;
	console.log(sliderShop)
})
all.addEventListener("mousemove", () => {
  exp.style.display = "inline-block";
  exp.style.left = x + "px";
  exp.style.top = y + "px";
})
all.addEventListener("mouseleave", () => {
  exp.style.display = "none";
})

/*  Player */
document.addEventListener("keydown", (e) => {
	if(e.key === "ArrowUp"){
		playerPupil.forEach(pupil => {
			pupil.style.transform = "translate(-4px, -8px)";
		})
	} else if(e.key === "ArrowDown"){
		playerPupil.forEach(pupil => {
			pupil.style.transform = "translate(-4px, 0px)";
		})
	} else if(e.key === "ArrowLeft"){
		playerPupil.forEach(pupil => {
			pupil.style.transform = "translate(-8px, -4px)";
		})
	} else if(e.key === "ArrowRight"){
		playerPupil.forEach(pupil => {
			pupil.style.transform = "translate(0px, -4px)";
		})
	}
})
