import { products } from "./dummyData.js";
import {clicked, filterAll, filterForChairColor, filterForChairDesign, filterForChairMaterial, findAttribute, openDropDown, openSideBar, removeSideBar, showProduct} from "./module1.js";
import  { fontSize, marginBottom, marginLeft, marginRight, marginTop, space } from "./styling.module.js";
let bdych = document.body.children;



    // filterAll()
    if(findAttribute('data-filter', document.querySelector('b').attributes)){
      let findForFilter = findAttribute('data-filter', document.querySelector('b').attributes);
      filterAll(findForFilter)
    } else if(findAttribute('data-option', document.querySelector('b').attributes)){
      let filter = findAttribute('data-option', document.querySelector('b').attributes);
      filterAll(filter)
    }

    products.forEach(product => {
      showProduct(product)
    })

for (const ch in bdych) {
  if (Object.hasOwnProperty.call(bdych, ch)) {
    const wholeItemsInBody = bdych[ch];
    fontSize(wholeItemsInBody);
    marginBottom(wholeItemsInBody);
    marginLeft(wholeItemsInBody);
    marginRight(wholeItemsInBody);
    marginTop(wholeItemsInBody);
    space(document.querySelector('.sideBar'), 'muteWHov');
  }
}
const rangeInput = document.querySelectorAll(".range-input input");
const priceInput = document.querySelectorAll(".price-input input");
const range = document.querySelector(".slider .progress");
let priceGap = 1;
const min = document.getElementById('min');
const max = document.getElementById('max');
const rangeMin = document.getElementById('range-min');
const rangeMax = document.getElementById('range-max');
rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value);
    let maxVal = parseInt(rangeInput[1].value);
    min.textContent = minVal;
    max.textContent = maxVal;
    rangeMin.max = maxVal - 100;

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      if(range.style.left == '0%'){
        range.style.left = '2%'
        range.left = '2%'
      }
    }
  });
});






document.body.addEventListener('click', ({ target }) => {
  const { classList } = target;
  const { parentElement } = target;
  const { parentElement: parentParentElement } = parentElement;
  let eClass = '';

  switch (true) {
    case classList.contains('toggleDropDown'):
      eClass = classList[1];
      openDropDown(eClass, target);
      break;
    case parentElement.classList.contains('toggleDropDown'):
      eClass = parentElement.classList[2];
      openDropDown(eClass, parentElement);
      break;
    case parentParentElement.classList.contains('toggleDropDown'):
      eClass = parentParentElement.classList[2];
      openDropDown(eClass, parentParentElement);
      break;
  }
});

document.querySelector('.remove-sidebar-menu').addEventListener('click', (e) => {
  removeSideBar(e);
});
document.querySelector('.openSideBar').addEventListener('click', (e) => {
  openSideBar(e);
});



if (navigator.platform.includes('iPhone')) {
  document.querySelector('.platform').textContent = navigator.platform;
  document.querySelector('.product-card').style.margin = '5px';
}


document.body.addEventListener("click", (e) => {
  let findForFilter = findAttribute('data-filter', e.target.attributes);
  if (findForFilter) {
    clicked(e.target);
    filterAll(findForFilter.attrValue, null)
  }
  if(e.target.nodeName == 'B' && e.target.hasAttribute('data-option')){
    let filter = e.target.getAttribute('data-option');
    let textValue = e.target.textContent;
    filterAll(filter, textValue)
    filterAll(filter, textValue)
  }else if(e.target.parentElement.nodeName == 'I' || e.target.nodeName == 'I' ){
    document.querySelector('.sortBy').classList.remove('shown')
  } 
});

document.getElementById('filterPrice').addEventListener('click', () => {
  let min = document.getElementById('range-min').value;
  let max = document.getElementById('range-max').value;
  document.querySelector('.prod-c').innerHTML = '';

  products.filter(product => product.productInfo.price >= min && product.productInfo.price <= max)
    .forEach(product => {
      showProduct(product);
    });
});

// sortby

document.querySelector('.showSortBy').addEventListener('click', ()=>{
    
    if(document.querySelector('.sortBy').classList.contains('shown')){
      document.querySelector('.sortBy').classList.remove('shown')
      document.querySelector('.sortBy').classList.add('shown')
    }else{
      document.querySelector('.sortBy').classList.add('shown')
    }
})

