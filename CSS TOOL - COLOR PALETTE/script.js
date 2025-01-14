const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-Btn");
const maxPaletteBoxes = 10;

const generatePalette = () => {

    container.innerHTML = "";

    for (let i = 0; i < maxPaletteBoxes ; i++) {
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6,"0")}`;

        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background : ${randomHex}"></div>
                            <span class="hex-value">${randomHex}</span>` ;
        
        color.addEventListener("click" , () => copyColor(color , randomHex));
        container.appendChild(color);
    }
}

generatePalette(); 

const copyColor = (elem, hexValue) =>{
    const colorElement = elem.querySelector(".hex-value");
    navigator.clipboard.writeText(hexValue).then(() => {
        colorElement.innerText = "Copied" ; 
        setTimeout(() => colorElement.innerText = hexValue  ,1000);
    }).catch(() => alert("Failed To Copy The Color Code !"));
}

refreshBtn.addEventListener("click" , generatePalette);