let ofset = -100;
let count = 2;
let ofsetTwo = -825;
let countFirstSlider = 0;
let count3 = 1;
let ofset3 = 0;
let al = 0;
const sliderLine = document.querySelector('.slider__line');
const sliderLine1 = document.querySelector('.slidertwo__line-two');

const sliderLine3 = document.querySelector('.sliderthree__line-three');

const counter3 = document.querySelector('.txt-3');
const counter = document.querySelector('.txt');
const counter1 = document.querySelector('.txt1');
const hoimeLine = document.querySelector('.home-span');
const homeButton = document.querySelector('.home');
const recommendLine = document.querySelector('.recomend-span');
const recommendButton = document.querySelector('.recommend');
const exploreLine = document.querySelector('.explore-span');
const exploreButton = document.querySelector('.explore');
const helpLine = document.querySelector('.help-span');
const helpButton = document.querySelector('.help');
const aboutLine = document.querySelector('.about-span');
const aboutButton = document.querySelector('.about');
const line = '▬▬▬';

counter3.innerHTML = count3;
counter.innerHTML = count;
counter1.innerHTML = count;
hoimeLine.innerHTML = line;
homeButton.style.color = 'white';

const a = () => {
  if (al === 0) {
    alert('This site is developed only for DeskTop');
    al++;
  }
};

a();

document.querySelector('.home').addEventListener('click', () => {
  event.preventDefault();
  hoimeLine.innerHTML = line;
  homeButton.style.color = 'white';
  recommendLine.innerHTML = '';
  recommendButton.style.color = 'grey';
  exploreLine.innerHTML = '';
  exploreButton.style.color = 'grey';
  helpLine.innerHTML = '';
  helpButton.style.color = 'grey';
  aboutLine.innerHTML = '';
  aboutButton.style.color = 'grey';
});

document.querySelector('.recommend').addEventListener('click', () => {
  event.preventDefault();
  hoimeLine.innerHTML = '';
  homeButton.style.color = 'grey';
  recommendLine.innerHTML = '▬▬▬';
  recommendButton.style.color = 'white';
  exploreLine.innerHTML = '';
  exploreButton.style.color = 'grey';
  helpLine.innerHTML = '';
  helpButton.style.color = 'grey';
  aboutLine.innerHTML = '';
  aboutButton.style.color = 'grey';
});

document.querySelector('.explore').addEventListener('click', () => {
  event.preventDefault();
  hoimeLine.innerHTML = '';
  homeButton.style.color = 'grey';
  recommendLine.innerHTML = '';
  recommendButton.style.color = 'grey';
  exploreLine.innerHTML = '▬▬▬';
  exploreButton.style.color = 'white';
  helpLine.innerHTML = '';
  helpButton.style.color = 'grey';
  aboutLine.innerHTML = '';
  aboutButton.style.color = 'grey';
});

document.querySelector('.help').addEventListener('click', () => {
  event.preventDefault();
  hoimeLine.innerHTML = '';
  homeButton.style.color = 'grey';
  recommendLine.innerHTML = '';
  recommendButton.style.color = 'grey';
  exploreLine.innerHTML = '';
  exploreButton.style.color = 'grey';
  helpLine.innerHTML = '▬▬▬';
  helpButton.style.color = 'white';
  aboutLine.innerHTML = '';
  aboutButton.style.color = 'grey';
});

document.querySelector('.about').addEventListener('click', () => {
  event.preventDefault();
  hoimeLine.innerHTML = '';
  homeButton.style.color = 'grey';
  recommendLine.innerHTML = '';
  recommendButton.style.color = 'grey';
  exploreLine.innerHTML = '';
  exploreButton.style.color = 'grey';
  helpLine.innerHTML = '';
  helpButton.style.color = 'grey';
  aboutLine.innerHTML = '▬▬▬';
  aboutButton.style.color = 'white';
  counter.innerHTML = 1;
  counter1.innerHTML = 1;
  sliderLine.style.left = 0 + 'vw';
  sliderLine1.style.left = 0 + 'px';
  count = 1;
  ofset = 0;
  ofsetTwo = 0;

});

document.querySelector('.slider-next').addEventListener('click', function () {
  if (ofset === -700) {
    count = 1;
    ofset = 0;
    ofsetTwo = 0;
    sliderLine.style.left = ofset + 'vw';
    sliderLine1.style.left = ofsetTwo + 'px';
    counter.innerHTML = count;
    counter1.innerHTML = count;
  } else {
    count += 1;
    ofset -= 100;
    ofsetTwo -= 825;
    sliderLine.style.left = ofset + 'vw';
    sliderLine1.style.left = ofsetTwo + 'px';
    counter.innerHTML = count;
    counter1.innerHTML = count;
  }
});

document.querySelector('.slider-prev').addEventListener('click', function () {
  if (ofset === 0) {
    ofset = -700;
    count = 8;
    ofsetTwo = -5770;
    sliderLine.style.left = ofset + 'vw';
    sliderLine1.style.left = ofsetTwo + 'px';
    counter.innerHTML = count;
    counter1.innerHTML = count;
  } else {
    count -= 1;
    ofset += 100;
    ofsetTwo += 825;
    sliderLine.style.left = ofset + 'vw';
    sliderLine1.style.left = ofsetTwo + 'px';
    counter.innerHTML = count;
    counter1.innerHTML = count;
  }
});

document.querySelector('.slider3-next').addEventListener('click', function () {
  console.log(ofset3);
  if (ofset3 === -1720) {
    ofset3 = 0;
    count3 = 1;
    sliderLine3.style.left = ofset3 + 'px';
    counter3.innerHTML = count3;
  } else {
    count3 += 1;
    ofset3 -= 860;
    sliderLine3.style.left = ofset3 + 'px';
    counter3.innerHTML = count3;
  }
});

document.querySelector('.slider3-prev').addEventListener('click', function () {
  if (ofset3 === 0) {
    ofset3 = -1720;
    count3 = 3;
    sliderLine3.style.left = ofset3 + 'px';
    counter3.innerHTML = count3;
  } else {
    count3 -= 1;
    ofset3 += 860;
    sliderLine3.style.left = ofset3 + 'px';
    counter3.innerHTML = count3;
  }
});
