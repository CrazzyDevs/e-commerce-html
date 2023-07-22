


export function fontSize(passedChild){
        for (const ch in passedChild.children) {
            if (Object.hasOwnProperty.call(passedChild.children, ch)) {
                const child = passedChild.children[ch];
                let clalis = child.classList;
                clalis.forEach(cl => {
                if(cl.includes('fz-')){
                    let fontSizeSpl = cl.split('-')
                    let num = fontSizeSpl[fontSizeSpl.length-fontSizeSpl.length+1]
                    let type = fontSizeSpl[fontSizeSpl.length-1]
                    child.style.fontSize = `${num}${type}`
                }
                });
                fontSize(child)  
            }
        }
}
export function marginTop(passedChild){
    for (const ch in passedChild.children) {
        if (Object.hasOwnProperty.call(passedChild.children, ch)) {
            const child = passedChild.children[ch];
            let clalis = child.classList;
            clalis.forEach(cl => {
            if(cl.includes('mt-')){
                let fontSizeSpl = cl.split('-')
                let num = fontSizeSpl[fontSizeSpl.length-fontSizeSpl.length+1]
                let type = fontSizeSpl[fontSizeSpl.length-1]
                child.style.marginTop = `${num}${type}`
            }
            });
            marginTop(child)  
        }
    }
}
export function marginBottom(passedChild){
    for (const ch in passedChild.children) {
        if (Object.hasOwnProperty.call(passedChild.children, ch)) {
            const child = passedChild.children[ch];
            let clalis = child.classList;
            clalis.forEach(cl => {
            if(cl.includes('mb-')){
                let fontSizeSpl = cl.split('-')
                let num = fontSizeSpl[fontSizeSpl.length-fontSizeSpl.length+1]
                let type = fontSizeSpl[fontSizeSpl.length-1]
                child.style.marginBottom = `${num}${type}`
            }
            });
            marginBottom(child)  
        }
    }
}
export function marginLeft(passedChild){
    for (const ch in passedChild.children) {
        if (Object.hasOwnProperty.call(passedChild.children, ch)) {
            const child = passedChild.children[ch];
            let clalis = child.classList;
            clalis.forEach(cl => {
            if(cl.includes('ml-')){
                let fontSizeSpl = cl.split('-')
                let num = fontSizeSpl[fontSizeSpl.length-fontSizeSpl.length+1]
                let type = fontSizeSpl[fontSizeSpl.length-1]
                child.style.marginLeft = `${num}${type}`
            }
            });
            marginLeft(child)  
        }
    }
}
export function marginRight(passedChild){
    for (const ch in passedChild.children) {
        if (Object.hasOwnProperty.call(passedChild.children, ch)) {
            const child = passedChild.children[ch];
            let clalis = child.classList;
            clalis.forEach(cl => {
            if(cl.includes('mr-')){
                let fontSizeSpl = cl.split('-')
                let num = fontSizeSpl[fontSizeSpl.length-fontSizeSpl.length+1]
                let type = fontSizeSpl[fontSizeSpl.length-1]
                child.style.marginRight = `${num}${type}`
            }
            });
            marginRight(child)  
        }
    }
}
export function paddingTop(passedChild){
    for (const ch in passedChild.children) {
        if (Object.hasOwnProperty.call(passedChild.children, ch)) {
            const child = passedChild.children[ch];
            let clalis = child.classList;
            clalis.forEach(cl => {
            if(cl.includes('pt-')){
                let fontSizeSpl = cl.split('-')
                let num = fontSizeSpl[fontSizeSpl.length-fontSizeSpl.length+1]
                let type = fontSizeSpl[fontSizeSpl.length-1]
                child.style.paddingTop = `${num}${type}`
            }
            });
            paddingTop(child)  
        }
    }
}
export function paddingBottom(passedChild){
    for (const ch in passedChild.children) {
        if (Object.hasOwnProperty.call(passedChild.children, ch)) {
            const child = passedChild.children[ch];
            let clalis = child.classList;
            clalis.forEach(cl => {
            if(cl.includes('pb-')){
                let fontSizeSpl = cl.split('-')
                let num = fontSizeSpl[fontSizeSpl.length-fontSizeSpl.length+1]
                let type = fontSizeSpl[fontSizeSpl.length-1]
                child.style.paddingBottom = `${num}${type}`
            }
            });
            paddingBottom(child)  
        }
    }
}
export function paddingLeft(passedChild){
    for (const ch in passedChild.children) {
        if (Object.hasOwnProperty.call(passedChild.children, ch)) {
            const child = passedChild.children[ch];
            let clalis = child.classList;
            clalis.forEach(cl => {
            if(cl.includes('pl-')){
                let fontSizeSpl = cl.split('-')
                let num = fontSizeSpl[fontSizeSpl.length-fontSizeSpl.length+1]
                let type = fontSizeSpl[fontSizeSpl.length-1]
                child.style.paddingLeft = `${num}${type}`
            }
            });
            paddingLeft(child)  
        }
    }
}
export function paddingRight(passedChild){
    for (const ch in passedChild.children) {
        if (Object.hasOwnProperty.call(passedChild.children, ch)) {
            const child = passedChild.children[ch];
            let clalis = child.classList;
            clalis.forEach(cl => {
            if(cl.includes('pr-')){
                let fontSizeSpl = cl.split('-')
                let num = fontSizeSpl[fontSizeSpl.length-fontSizeSpl.length+1]
                let type = fontSizeSpl[fontSizeSpl.length-1]
                child.style.paddingRight = `${num}${type}`
            }
            });
            paddingRight(child)  
        }
    }
}

export function borderToAllItems(passedChild){
    for (const ch in passedChild.children) {
        if (Object.hasOwnProperty.call(passedChild.children, ch)) {
            const child = passedChild.children[ch];
            child.style.border = '2px solid black'
            borderToAllItems(child)
        }
    }
}
export function borderToItem(passedChild){
    passedChild.style.border = '2px solid black';
}
export function space(passedChild, withClass){
    for (const ch in passedChild.children) {
        if (Object.hasOwnProperty.call(passedChild.children, ch)) {
            const child = passedChild.children[ch];
            let clalis = child.classList;
            clalis.forEach(cl => {
                if(cl.includes(withClass)){
                    child.style.margin = '5px'
                }
            });
            space(child, withClass)  
        }
    }
}

//new ones
export function width(passedChild){
    for (const ch in passedChild.children) {
        if (Object.hasOwnProperty.call(passedChild.children, ch)) {
            const child = passedChild.children[ch];
            let clalis = child.classList;
            console.log(child)
            clalis.forEach(cl => {
            if(cl.includes('width-')){
                let fontSizeSpl = cl.split('-')
                let num = fontSizeSpl[fontSizeSpl.length-fontSizeSpl.length+1]
                let type;
                // if(fontSizeSpl.length )
                // fontSizeSpl[fontSizeSpl.length-1]
                console.log(fontSizeSpl.length)
                
                child.style.paddingRight = `${num}${type}`
            }
            });
            paddingRight(child)  
        }
    }
}
