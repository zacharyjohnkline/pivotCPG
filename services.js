"use strict";
const servicesList = [
  {
    name: "Design",
    info: "We create memorable products, immersive brands, and future forward design strategy your team will be enthusiastic about.",
  },
  {
    name: "Compliance",
    info: "Delivering peace of mind through strict compliance adherence is our mission in bringing your products from an idea to a reality.",
  },
  {
    name: "Sourcing",
    info: "Making sure to grow your bottom line ethically with our expertise in sourcing is paramount!",
  },
];

function populateServices(array) {
  let htmlString = ``;
  for (let i = 0; i < array.length; i++) {
    htmlString += `<div class="service-list-item"><p class="services-header">${array[i].name}</p><p class="services-info">${array[i].info}</p></div>`;
  }
  //   console.log(htmlString);
  return htmlString;
}

const servicesHTML = `<div class="services">
${populateServices(servicesList)}
</div>`;
