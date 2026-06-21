const body = document.querySelector("body");
const bodyClone = document.querySelector("#bodyClone")
let x;
let y;
body.addEventListener("mousemove", (e) => {
	x = e.clientX;
	y = e.clientY;
});
const interface = document.querySelector("#interface");
const interfaceGameOver = document.querySelector("#interfaceGameOver");
const interfaceShop = document.querySelector("#interfaceShop");
const interfaceStat = document.querySelector("#interfaceStat");
const interfaceAvatar = document.querySelector("#interfaceAvatar");

const all = document.querySelector("#lvl, #progress-bar, #progress-container");
const lvl = document.querySelector("#lvl");
const exp = document.querySelector("#exp");
let expValue = 71000;
const progressBar = document.querySelector("#progress-bar");
const progressContainer = document.querySelector("#progress-container");

const shopClose = document.querySelector(".shopClose");
const statClose = document.querySelector(".statClose");
const avatarClose = document.querySelector(".avatarClose");

const play = document.querySelector("#play");
const quit = document.querySelector("#quit");
const restart = document.querySelector("#restart");
const yesPause = document.querySelector("#yesPause");
const noPause = document.querySelector("#noPause");
const pause = document.querySelector("#pause");
const textPause = document.querySelector("#textPause");
const textParagraphe = document.querySelector("#textParagraphe");

const shop = document.querySelector("#shop");
const sliderShop = document.querySelector("#sliderShop");
const sliderShopValue = document.querySelector("#sliderShopValue");
const sliderPush = document.querySelector("#sliderPush");
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
const playerHealProgressBar = document.querySelector("#playerHealProgressBar");
const playerHealText = document.querySelector("#playerHealText");
let player1 = playerBody.getBoundingClientRect();
const monsterModel = document.querySelector(".monster-model");
let playerRect = playerBody.getBoundingClientRect();
let playerX = playerRect.left + playerRect.width / 2;
let playerY = playerRect.top + playerRect.height / 2;
function createMonsterClone() {
	const monsterClone = monsterModel.cloneNode(true);
	return monsterClone;
}
function createPlayerClone() {
	const playerClone = playerBody.cloneNode(true);
	return playerClone;
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
let hpMax = 100;
let playerStat = {
	level : level,
	levelUp : levelUp,
	point : pointStat,
	exp : expValue,
	hp: aStat,
	attack: zStat,
	speed: eStat
}
const path = document.querySelector("#path");
    setInterval (() => {
      path.classList.remove("rotateClose");
      path.classList.add("rotateOpen");
      setTimeout(() => {
      path.classList.remove("rotateOpen");
      path.classList.add("rotateClose");
    }, 1500);
  }, 3000);
function isMobileOrTablet() {
    return /Android|iPhone|iPad|iPod|Tablet/i.test(navigator.userAgent);
}
function interfaceWindows() {
	const windows = document.querySelector("#rotate-warning");
	if(isMobileOrTablet() && window.innerHeight > window.innerWidth){
		windows.style.display = "flex";
	}
	else{
		windows.style.display = "none";
	}
}
window.addEventListener("resize", interfaceWindows)
window.addEventListener("load", interfaceWindows)
function formatNumber(n) {
	if(n >= 1_000_000_000_000){
		return (n / 1_000_000_000_000).toFixed(1) + "T";
	}
	if(n >= 1_000_000_000){
		return (n / 1_000_000_000).toFixed(1) + "B";
	}
		if(n >= 1_000_000){
		return (n / 1_000_000).toFixed(1) + "M";
	}
	if(n >= 1_000){
		return (n / 1_000).toFixed(1) + "k";
	}
	return n;
}

let totalExp = 0;
let playerCloneTable = [];
let playerPupilLeftCloneTable = [];
let playerPupilRightCloneTable = [];
let eyeLeftTable = [];
let eyeRightTable = [];
let pupilLeftTable = [];
let pupilRightTable = [];
let w = 0;
let pauseTimeout = null
playerHealText.textContent = playerStat.hp;

// ! lvl + progresse Barre Lvl
setInterval(() => {
	if(level === 1){
		if(expValue >= levelUp){
			level += 1;
			pointStat += 3;
			expValue = expValue - levelUp;
			levelUp = Math.round(100 * Math.pow(1.15, level)); 
		}
	}else if(level >= 55){
		if(expValue >= levelUp){
			level += 1;
      pointStat += 3;
			expValue = expValue - levelUp;
			levelUp = Math.round(100 * Math.pow(1.5, level));
	}
  }else if(level >= 30){
		if(expValue >= levelUp){
			level += 1;
      pointStat += 3;
			expValue = expValue - levelUp;
			levelUp = Math.round(100 * Math.pow(1.2, level));
	}
  }else if(level >= 10){
		if(expValue >= levelUp){
			level += 1;
      pointStat += 3;
			expValue = expValue - levelUp;
			levelUp = Math.round(100 * Math.pow(1.175, level));
	}
	} else if(level >= 2){
		if(expValue >= levelUp){
			level += 1;
      pointStat += 3;
			expValue = expValue - levelUp;
			levelUp = Math.round(100 * Math.pow(1.15, level));
		}
	}
	exp.textContent = `Vous avez ${formatNumber(expValue)} / ${formatNumber(levelUp)} exp`;
	playerStat.level = level;
	playerStat.point = pointStat;
	playerStat.levelUp = levelUp;
	playerStat.exp = expValue;
  point.textContent = playerStat.point;
	totalExp += 10;
	expValue += 10;
	exp.dataset.min = playerStat.exp;
	exp.dataset.max = playerStat.levelUp;
	exp.dataset.exp = Number(totalExp);
	progressBar.style.width = expValue / levelUp * 100 + "%";
	lvl.textContent = "Level : " + level;
}, 10000);
hp.addEventListener("click", () => {
	if(playerStat.point <= 0){
		playerStat.point += 0;
	} else if (playerStat.point > 0){
		pointStat -= 1;
		aStat += a;
	}
	hp.textContent = "lvl : " + aStat;
	playerStat.hp = aStat;
	hpMax = aStat
	sliderHp.value = playerStat.hp;
	point.textContent = playerStat.point;
	playerStat.point = pointStat;
	playerHealText.textContent = playerStat.hp;
	playerBody.dataset.health = playerStat.hp;
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
	playerBody.dataset.attack = playerStat.attack;
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
	playerBody.dataset.speed = playerStat.speed;
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
console.log("test")
avatar.addEventListener("click", () => {
	console.log("hello")
	let i = 0;
	interfaceAvatar.style.display = "block";
	interface.style.display ="none";
	interfaceAvatar.classList.add("openInterface");
	interfaceAvatar.classList.remove("closeInterface");
	all.style.height = "0";
	all.style.width = "0";
	setTimeout(() => {
    playerClone = createPlayerClone();
		playerCloneTable.push(playerClone);
		
		playerClone.classList.add(`player-model`);
    interfaceAvatar.appendChild(playerClone);
	  playerClone.style.display = "inline-block"
		playerClone.style.setProperty("--animation", "paused");
	  playerClone.style.scale = "2"
	  playerClone.style.transform = "translate(-20%, 0%)"
	}, 350)
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
	hpMax = aStat;
	playerHealText.textContent = hpMax;
	playerHealProgressBar.style.width = hpMax + "%";
	playerBody.style.display = "inline-block";
	playerEyeLeft.style.setProperty("--animation", "running")
	playerEyeRight.style.setProperty("--animation", "running")
	playerHeal.style.display = "block";
	pause.style.display = "block";
	pause.textContent = "⏸️";
	let i = 0;
	const healProgress = setInterval(() => {
	if(hpMax <= 0){
		playerHealProgressBar.style.width = 0 + "%";
		playerHealText.textContent = 0;
		interfaceGameOver.style.display = "block";
		eyeLeftTable.forEach(eye => {
		eye.style.setProperty("--animation", "paused")
	  })
	  eyeRightTable.forEach(eye => {
		eye.style.setProperty("--animation", "paused")
	  })
	  playerEyeLeft.style.setProperty("--animation", "paused")
	  playerEyeRight.style.setProperty("--animation", "paused")
		clearInterval(healProgress)
	}
	else if(aStat !== hpMax){
		playerHealProgressBar.style.width = (hpMax / aStat) * 100 + "%"
		playerHealText.textContent = hpMax
	}
	else if(aStat === hpMax) {
		playerHealProgressBar.style.width = 100 + "%"
		playerHealText.textContent = hpMax
  }
	hpMax -= 1
  }, 100)
	while(i <= 9){
	i += 1;
	let delay = Math.floor(Math.random() * 10) + 1;
	const monsterClone = createMonsterClone();
	const x = Math.random() * window.innerWidth;
	const y = Math.random() * window.innerHeight;
	monsterClone.classList.add(`monster-model-${i}`);
	monsterClone.style.display = "flex";
	monsterClone.style.position = "absolute"; // je doit changer quand j aurais bien positionner les clone //
  monsterClone.style.left = x + "px";
  monsterClone.style.top = y + "px";
	const eyeLeft = monsterClone.querySelector(".monsterEyeLeft-model");
	const eyeRight = monsterClone.querySelector(".monsterEyeRight-model");
	const pupilLeft = monsterClone.querySelector(".monsterPupilLeft-model");
	const pupilRight = monsterClone.querySelector(".monsterPupilRight-model");
	eyeLeft.style.setProperty("--delay", delay + "s" );
  eyeRight.style.setProperty("--delay", delay + "s" );
	interface.appendChild(monsterClone);
	allMonsterClone.push(monsterClone);
	eyeLeftTable = eyeLeftTable.concat(eyeLeft);
	eyeRightTable = eyeRightTable.concat(eyeRight)
	pupilLeftTable = pupilLeftTable.concat(pupilLeft);
	pupilRightTable = pupilRightTable.concat(pupilRight);
	}
});
quit.addEventListener("click", () => {
	menu.style.left = "2%";
	play.style.right = "50%";
	playerBody.style.display = "none";
	playerHeal.style.display = "none";
	bodyClone.style.display = "none";
	pause.style.display = "none";
	interfaceGameOver.style.display = "none";
	allMonsterClone.forEach(monster => {
		monster.remove();
	})
	allMonsterClone = [];
	eyeLeftTable = [];
	eyeRightTable = [];
	pupilLeftTable = [];
	pupilRightTable = [];
})
restart.addEventListener("click", () => {
	allMonsterClone.forEach(monster => {
		monster.remove();
	})
	interfaceGameOver.style.display = "none";
	allMonsterClone = [];
	eyeLeftTable = [];
	eyeRightTable = [];
	pupilLeftTable = [];
	pupilRightTable = [];
	playerEyeRight.style.setProperty("--animation", "running")
	playerEyeLeft.style.setProperty("--animation", "running")
	hpMax = aStat;
	playerHealText.textContent = hpMax;
	playerHealProgressBar.style.width = (hpMax / aStat) * 100 + "%";
	let i = 0;
	const healProgress = setInterval(() => {
  if(hpMax <= 0){
		playerHealProgressBar.style.width = 0 + "%";
		playerHealText.textContent = 0;
		interfaceGameOver.style.display = "block";
		eyeLeftTable.forEach(eye => {
		eye.style.setProperty("--animation", "paused")
	  })
	  eyeRightTable.forEach(eye => {
		eye.style.setProperty("--animation", "paused")
	  })
	  playerEyeLeft.style.setProperty("--animation", "paused")
	  playerEyeRight.style.setProperty("--animation", "paused")
		clearInterval(healProgress)
	}
	else if(aStat !== hpMax){
		playerHealProgressBar.style.width = (hpMax / aStat) * 100 + "%"
		playerHealText.textContent = hpMax
	}
	else if(aStat === hpMax) {
		playerHealProgressBar.style.width = 100 + "%"
		playerHealText.textContent = hpMax
  }
	hpMax -= 1
	}, 100)
	while(i <= 9){
	i += 1;
	let delay = Math.floor(Math.random() * 10) + 1;
	const monsterClone = createMonsterClone();
	const x = Math.random() * window.innerWidth;
	const y = Math.random() * window.innerHeight;
	monsterClone.classList.add(`monster-model-${i}`);
	monsterClone.style.display = "flex";
	monsterClone.style.position = "absolute"; // je doit changer quand j aurais bien positionner les clone //
  monsterClone.style.left = x + "px";
  monsterClone.style.top = y + "px";
	const eyeLeft = monsterClone.querySelector(".monsterEyeLeft-model");
	const eyeRight = monsterClone.querySelector(".monsterEyeRight-model");
	const pupilLeft = monsterClone.querySelector(".monsterPupilLeft-model");
	const pupilRight = monsterClone.querySelector(".monsterPupilRight-model");
	eyeLeft.style.setProperty("--delay", delay + "s" );
  eyeRight.style.setProperty("--delay", delay + "s" );
	interface.appendChild(monsterClone);
	allMonsterClone.push(monsterClone);
	eyeLeftTable = eyeLeftTable.concat(eyeLeft);
	eyeRightTable = eyeRightTable.concat(eyeRight)
	pupilLeftTable = pupilLeftTable.concat(pupilLeft);
	pupilRightTable = pupilRightTable.concat(pupilRight);
	}
})
pause.addEventListener("click", () => {
	let i = 0;
	if(pauseTimeout !== null) {
		clearTimeout(pauseTimeout);
		pauseTimeout = null;
	}
		if(w === 0){
	    pause.textContent = "▶️";
		  textPause.style.display = "block";
		  textPause.classList.add("openTextPause");
		  textPause.classList.remove("closeTextPause");
		  bodyClone.style.display = "block";
			eyeLeftTable.forEach(eye => {
				eye.style.setProperty("--animation", "paused")
			})
			eyeRightTable.forEach(eye => {
				eye.style.setProperty("--animation", "paused")
			})
			playerEyeLeft.style.setProperty("--animation", "paused")
			playerEyeRight.style.setProperty("--animation", "paused")
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
		eyeLeftTable.forEach(eye => {
				eye.style.setProperty("--animation", "running")
			})
			eyeRightTable.forEach(eye => {
				eye.style.setProperty("--animation", "running")
			})
			playerEyeLeft.style.setProperty("--animation", "running")
			playerEyeRight.style.setProperty("--animation", "running")
		bodyClone.style.display = "none"
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
	bodyClone.style.display = "none";
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
	eyeLeftTable = [];
	eyeRightTable = [];
	pupilLeftTable = [];
	pupilRightTable = [];
	w = 0
})
noPause.addEventListener("click", () => {
	pause.textContent = "⏸️";
	textPause.classList.add("closeTextPause");
	textPause.classList.remove("openTextPause");
	textParagraphe.textContent = "";
	yesPause.style.opacity = "0";
	noPause.style.opacity = "0";
	bodyClone.style.display = "none";
	eyeLeftTable.forEach(eye => {
				eye.style.setProperty("--animation", "running")
			})
			eyeRightTable.forEach(eye => {
				eye.style.setProperty("--animation", "running")
			})
			playerEyeLeft.style.setProperty("--animation", "running")
			playerEyeRight.style.setProperty("--animation", "running")
	setTimeout(() => {
		textPause.style.display = "none";
	}, 500);
	w = 0;
})
sliderShop.addEventListener("click", () => {
	let rect = sliderPush.getBoundingClientRect();
	sliderPush.style.left = x + rect.width + "px";
})
all.addEventListener("mousemove", () => {
  exp.style.display = "inline-block";
	exp.style.left = x + "px";
  exp.style.top = y + "px";
	setTimeout(() => {
})
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
