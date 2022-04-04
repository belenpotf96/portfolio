let progressValue = document.querySelector('.skillPercentageValue');
let progressColor = document.querySelector('.progressColor');
let progressTitle = document.querySelector('.skillPercentageTitle');
let counter = 0;
const progressData = { "skill": "Comunicaciones", "value": 100 };

// En esta sección se le dará funcionalidad a los medidores de habilidades de la página principal.

const skillValue = progressData.value;

function percentage(skillValue) {
    return 680 / 100 * skillValue;
}

progressColor.style.cssText = `stroke-dasharray: ${percentage(skillValue) + 2000};`;

progressTitle.innerHTML = progressData.skill;

setInterval(() => {
    progressValue.innerHTML = counter + "%";
    if (counter === progressData.value) {
        clearInterval();
    } else {
        counter += 1;
    }
}, 15.7);
