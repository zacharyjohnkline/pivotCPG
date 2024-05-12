"use strict";
const caseStudies = [
  //   {
  //     image: "./images/canaltoys.png",
  //     name: "CANAL TOYS",
  //     info: "See how we partnered with Canal Toys to realize their line of SoSlime toys.",
  //   },
  {
    image: "./images/weveel.jpg",
    name: "WEVEEL LLC",
    info: "See how we partnered with Weveel LLC to make stationery for kids a multi-sensory experience",
  },
  {
    image: "./images/makeitreal.png",
    name: "MAKE IT REAL",
    info: "Discover how we assisted Make It Real in raising the bar in the realm of fashionable kids crafts and toys.",
  },
  {
    image: "./images/leisurearts.jpg",
    name: "LEISURE ARTS",
    info: "Find out about how we streamlined the processes of Leisure Arts and expanded their reach into numerous categories.",
  },
];
function populateCaseStudies(array) {
  let htmlString = ``;
  for (let i = 0; i < array.length; i++) {
    htmlString += `<div class="case-list-item">
    <img src="${array[i].image}" class="case-image" />
    <p class="case-header">${array[i].name}</p>
    <p class="case-info">${array[i].info}</p>
    </div>`;
  }
  //   console.log(htmlString);
  return htmlString;
}
const casesHTML = `<div class="case-studies">${populateCaseStudies(
  caseStudies
)}</div>`;
