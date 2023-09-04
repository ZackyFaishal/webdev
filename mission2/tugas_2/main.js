const jaki = document.getElementById("jaki");
const penjahat = document.getElementById("penjahat");

function jump() {
  if (jaki.classList != "jump") {
    jaki.classList.add("jump");

    setTimeout(function () {
      jaki.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function () {
  // posisi jaki Vertikal
  let jakiTop = parseInt(window.getComputedStyle(jaki).getPropertyValue("top"));

  // posisi penjahat horizontal
  let penjahatLeft = parseInt(
    window.getComputedStyle(penjahat).getPropertyValue("left")
  );

  // detect collision
  if (penjahatLeft < 50 && penjahatLeft > 0 && jakiTop >= 140) {
    // collision
    alert("Game Over!");
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});