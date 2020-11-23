import './_floating-labels.js';
import './_dashboard.js';

function processShowIfAttributes() {
  var showIfElems = Array.from(document.querySelectorAll("[show-if]"));
  var filterOutProcessed = showIfElems.filter(el => !el._processedByShowIf);
  var showIfAttributeValues = filterOutProcessed.map(el => el._processedByShowIf=true && el.getAttribute("show-if"));
  var uniqueValues = Array.from(new Set(showIfAttributeValues));

  if (uniqueValues.length) {
    var keysAndValuesSeparate = uniqueValues.map(str => str.split("="));
    var showIfStyles = keysAndValuesSeparate.map(val => `[key\\:${val[0]}="${val[1]}"] [show-if="${val[0]}=${val[1]}"] {display: block;} `).join("");
    var styleHtml = `<style>[show-if] {display: none;} ${showIfStyles}</style>`;
    document.head.insertAdjacentHTML("beforeend", styleHtml);
  }
}

processShowIfAttributes();