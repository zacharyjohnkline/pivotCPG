"use strict";
const footerLinks = [
  "About",
  "Careers",
  "Thinking",
  "Work",
  "Offers",
  "Affiliates",
  "DE&I",
];

function populateFooterLinks(array) {
  let HTMLString = "";
  for (let i = 0; i < array.length; i++) {
    HTMLString += `<p class="footer-list-item">${array[i]}</p>`;
  }
  return HTMLString;
}

const footerHTML = `
<div class="footer-container">
<p class="footer-header">Contact Us</p>
<div class="footer-links">${populateFooterLinks(footerLinks)}</div>
</div>
<p class="footer-page-end">©2024 pivotCPG</p>
`;
