import { products } from "./dummyData.js";

let bdych = document.body.children;


export let filters = {
    chairDesign: {
      type: 'chair',
      typeDesign1: 'dining',
      typeDesign2: ''
    },
    UPHColor: 'brown',
    material: 'ash',
    priceRange: {
      from: 0,
      to: 100
    },
    sort: 'htl'
  }
  let upd = true
export function filterAll(filterAttr, value){
  let arr = []
  filterForChairColor(filterAttr)
    document.querySelector('.prod-c').innerHTML = ''
          products.forEach(product => {
            if( product.productFeautures.typeColor.toLowerCase() == filters.UPHColor){
                showProduct(product)
            }
          })

  filterForChairDesign(filterAttr)
  document.querySelector('.prod-c').innerHTML = ''
          products.forEach(product => {
            if(product.productFeautures.type.toLowerCase() == filters.chairDesign.type ){
              if(product.productFeautures.typeDesign.toLowerCase() == filters.chairDesign.typeDesign1){
                showProduct(product)
                
              }else if(product.productFeautures.typeDesign.toLowerCase() ==  filters.chairDesign.typeDesign2){
                showProduct(product)
                
              }
            }
          })
  filterForChairMaterial(filterAttr)
  document.querySelector('.prod-c').innerHTML = ''
  products.forEach(product => {
      if( product.productFeautures.material.toLowerCase() == filters.material){
          showProduct(product)
      }
  })

  // return arr;
  filters.sort = filterAttr;
  switch(filters.sort.toLowerCase()){
    case 'htl':
      products.sort((a, b) => b.productInfo.price - a.productInfo.price);
      upd = true
      document.querySelector('[data-sortVal]').textContent = value
      document.querySelector('.sortBy').classList.remove('shown')
      break;
    case 'lth':
      products.sort((a, b) => a.productInfo.price - b.productInfo.price);
      upd = false
      document.querySelector('[data-sortVal]').textContent = value
      document.querySelector('.sortBy').classList.remove('shown')
      break;
    case 'atz':
      document.querySelector('[data-sortVal]').textContent = value
      document.querySelector('.sortBy').classList.remove('shown')
      break;
    case 'zta':
      document.querySelector('[data-sortVal]').textContent = value
      document.querySelector('.sortBy').classList.remove('shown')
      break;
}

if(upd == true){
    products.forEach(product => {
      showProduct(product)
    })
}else if(upd == false){
    products.forEach(product => {
      showProduct(product)
    })
}

  }

  
// import { products } from "./dummyData.js";
let sidebarshown = false;

export function addMultiple(location, amount, content){
    let located = document.querySelector(`.${location}`);

    while(amount > 0){
        located.innerHTML += `${content}`;

        amount--
    }
}
export function childLoopFind(toLoop, findFor){
    for (const cho in toLoop) {
        if (Object.hasOwnProperty.call(toLoop, cho)) {
            const ele = toLoop[cho];
            if(ele.nodeName == `${findFor}`){
                return ele;
            }
        }
    }
  }
export var dropped = false;
export function openDropDown(className, element){
    document.querySelector(`.${className}Dropped`).classList.toggle(`dropped`);
  // if(document.querySelector(`.${className}Dropped`).attributes){

  // }

  

    let clearTxt = document.createElement('sup');
        clearTxt.classList = 'muteWHov fz-12-px';
        clearTxt.id = 'clearTxt';
        clearTxt.textContent = 'clear'

    if(document.querySelector(`.${className}Dropped`).classList.contains('dropped')){
        let svg = childLoopFind(element.children, 'svg')
        childLoopFind(svg.children, 'path').remove()
        svg.innerHTML = `
          <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/>
        `;
        dropped = true
        
        element.parentElement.appendChild(clearTxt);


    }else{

        let svg = childLoopFind(element.children, 'svg')
                childLoopFind(svg.children, 'path').remove()
                svg.innerHTML = `
                <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                `;
        dropped = false
        childLoopFind(element.parentElement.children, 'SUP').remove()

    }
  }

export function findAttribute(attrName, attrList){
    for (const attr in attrList) {
        if (Object.hasOwnProperty.call(attrList, attr)) {
            const attribute = attrList[attr];
            try {
                if(attribute.name == attrName){
                    return{
                        attribute,
                        attrValue: attribute.value
                    }
                    
                }
            } catch (error) {
                return(`---]**${attrName}**[--- attribute not found`)
            }
        }
    }
    
  }


  export function showProduct(products){
        let {price, productImage, productName} = products.productInfo
        let card = `
        <div class="productCard">
            <div class="productImg">
            <img src='${productImage}'/>
            </div>
            <div class="productText">
                <div class="productName">
                    <b>${productName}</b>
                </div>
                <div class="productPrice">
                    <b class="mute">${price}.00$</b>
                </div>
            </div>
        </div>
    `;
    
    addMultiple('prod-c', 1, card)

  }

  export function openSideBar(e){
    let element = e.target;
    let parent = e.target.parentElement;
    let parentParent = e.target.parentElement.parentElement;
    switch(true){
      case element.classList.contains('openSideBar'):
        document.querySelector(`.sideBar`).style.animationName = 'show'
        sidebarshown = true
        break;
      case parent.classList.contains('openSideBar'):
        document.querySelector(`.sideBar`).style.animationName = 'show'
        sidebarshown = true
        break;
      case parentParent.classList.contains('openSideBar'):
        document.querySelector(`.sideBar`).style.animationName = 'show'
        sidebarshown = true
        break;
    }
  }

export function removeSideBar(e){
    let element = e.target;
  let parent = e.target.parentElement;
  let parentParent = e.target.parentElement.parentElement;
  switch(true){
    case element.classList.contains('remove-sidebar-menu'):
      document.querySelector(`.sideBar`).style.animationName = 'remove'
      sidebarshown = false
      break;
    case parent.classList.contains('remove-sidebar-menu'):
      document.querySelector(`.sideBar`).style.animationName = 'remove'
      sidebarshown = false
      break;
    case parentParent.classList.contains('remove-sidebar-menu'):
      document.querySelector(`.sideBar`).style.animationName = 'remove'
      sidebarshown = false
      break;
  }
}
function changeAttributeAll(element, changeFrom, changeTO){
  
  for (const ch in element) {
    if (Object.hasOwnProperty.call(element, ch)) {
        const item = element[ch];
        for (const c in item.children) {
          if (Object.hasOwnProperty.call(item.children, c)) {
              const it = item.children[c];

              if(it.classList.contains('menuFilterItem')){
                it.removeAttribute(`${changeFrom}`)
                it.setAttribute(changeTO, '')
                // changeAttributeAll(item.children)
              }
          }
      }
      
        
    }
}
}

function loopTruBody(elem){
  for (const key in elem) {
    if (Object.hasOwnProperty.call(elem, key)) {
      const element = elem[key];
      loopTruBody(element.children)
      return element.children
    }
  }
}
// muteWHov menuFilterItem
export function clicked(eTarget){
      for (const c in loopTruBody(document.querySelector('.content-body').children)) {
          if (Object.hasOwnProperty.call(loopTruBody(document.querySelector('.content-body').children), c)) {
              const it = loopTruBody(document.querySelector('.content-body').children)[c];
                // console.log(it)
                

                for (const cho in it.children) {
                  if (Object.hasOwnProperty.call(it.children, cho)) {
                      const ito = it.children[cho];
                        
                        if(ito.classList.contains('collection-menu')){

                          for (const chi in ito.children) {
                            if (Object.hasOwnProperty.call(ito.children, chi)) {
                                const item = ito.children[chi];                                  
                                if(item.classList.contains('menuFilterItem')){
                                  item.removeAttribute('data-selected')
                                  item.setAttribute('data-not-selected', '')
                                
                                }
                            }
                        }
                        }
                  }
              }
          }
      }

      eTarget.removeAttribute('data-not-selected')
      eTarget.setAttribute('data-selected', '')



}
document.addEventListener('DOMContentLoaded', ()=>{
  let min = document.getElementById('range-min').value,
  max = document.getElementById('range-max').value,
  minVal = document.getElementById('min'),
  maxVal = document.getElementById('max');

  minVal.textContent = min;
  maxVal.textContent = max;


    if(window.innerWidth> 800){
      document.querySelector(`.sideBar`).style.display = 'block';
      document.querySelector(`.openSideBar`).style.display = 'none';
  
    }else{
      document.querySelector(`.openSideBar`).style.display = 'block';
      if(sidebarshown){
        document.querySelector(`.sideBar`).style.animationName = 'show'
      }else{
        document.querySelector(`.sideBar`).style.animationName = 'remove'
      }
    }

  })

window.addEventListener('resize', ()=>{
    if(window.innerWidth> 800){
      document.querySelector(`.sideBar`).style.display = 'block';
      document.querySelector(`.openSideBar`).style.display = 'none';
  
    }else{
      document.querySelector(`.openSideBar`).style.display = 'block';
      if(sidebarshown){
        document.querySelector(`.sideBar`).style.animationName = 'show'
      }else{
        document.querySelector(`.sideBar`).style.animationName = 'remove'
      }
    }
  });

//   export function filterProduct(){

//   }

// export 

export function filterForChairDesign(switchfrom){
    switch(switchfrom.toLowerCase()){
      case 'all chairs':
          document.querySelector('.prod-c').innerHTML = ''
          products.forEach(product => {
                showProduct(product)
          })
          break;
        case 'dining chairs':
          filters.chairDesign.type = 'chair';
          filters.chairDesign.typeDesign1 = 'dining';
          filters.chairDesign.typeDesign2 = '';
          
          break;
  
        case 'lounge chairs':
          filters.chairDesign.type = 'chair';
          filters.chairDesign.typeDesign1 = 'lounge';
          filters.chairDesign.typeDesign2 = '';
          
          break;
      
        case 'stools and bar stools':
          filters.chairDesign.type = 'stool';
          filters.chairDesign.typeDesign1 = 'bar';
          filters.chairDesign.typeDesign2 = 'stool';
        
          break;
          
        case 'ottomants and foodstools':
          filters.chairDesign.type = 'stool';
          filters.chairDesign.typeDesign1 = 'ottomants';
          filters.chairDesign.typeDesign2 = 'food';
          
          break;
  
        case 'benches':
          filters.chairDesign.type = 'bench';
          filters.chairDesign.typeDesign1 = 'bench';
          filters.chairDesign.typeDesign2 = '';
          
          break;
  
        case 'office chairs':
          filters.chairDesign.type = 'chair';
          filters.chairDesign.typeDesign1 = 'office';
          filters.chairDesign.typeDesign2 = '';
          break;
  
        case 'dining chairs':
          // console.log('dining chairs');
          break;
      }
}
export function filterForChairColor(switchfrom){
    
    switch(switchfrom.toLowerCase()){
        case 'brown':
          filters.UPHColor = switchfrom;
          break;
  
        case 'red':
          filters.UPHColor = switchfrom;
          break;
      
        case 'beige':
          filters.UPHColor = switchfrom;
          break;
          
        case 'blue':
          filters.UPHColor = switchfrom;
          break;
        case 'black':
          filters.UPHColor = switchfrom;
          break;
        case 'yellow':
          filters.UPHColor = switchfrom;
          break;
        case 'white':
          filters.UPHColor = switchfrom;
          break;
        case 'orange':
          filters.UPHColor = switchfrom;
          break;
        case 'grey':
          filters.UPHColor = switchfrom;
          break;
        case 'green':
          filters.UPHColor = switchfrom;
          break;
        case 'pink':
          filters.UPHColor = switchfrom;
          break;
        case 'purple':
          filters.UPHColor = switchfrom;
          break;

      }

}
export function filterForChairMaterial(switchfrom){
    
    switch(switchfrom.toLowerCase()){
        case 'ash':
          filters.material = switchfrom;
          
          break;
  
        case 'beech':
          filters.material = switchfrom;

          break;
      
        case 'maple':
          filters.material = switchfrom;
           
          break;
          
        case 'oak':
          filters.material = switchfrom;

            
          break;
        case 'pine':
          filters.material = switchfrom;

           
          break;
        case 'walnut':
          filters.material = switchfrom;

           
          break;
        case 'metal':
          filters.material = switchfrom;

            
          break;
      }
}
export function filterPrice(){

}


