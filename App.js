const container = document.querySelector(".container");
const refershBtn = document.querySelector(".refresh-btn");

const maxPaletteBox = 32;

const generatePalette = () => {

    for(let i=0; i<32; i++){
        container.innerHTML = ""; // clearing the container
        // generating a random hex color code
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;
        console.log(randomHex);

        // creating a new 'li' elememt and inserting it to the container
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
        <span class="hex-value">${randomHex}</span>`

        //adding click event to current li elemets to copy the color
        color.addEventListener("click", () => copyColor(color, randomHex));
        container.appendChild(color);
    }   
}

generatePalette();

const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector(".hex-value")
    //Copying the hex value, updaing the text to copied
    //and changing text back to original hex value after 1 second
    navigator.clipboard.writeText(hexVal).then(() => {
        colorElement.innerHTML = "Copied";
        setTimeout(() => colorElement.innerHTML = hexVal, 1000);
    }).catch(() => alert("Failed to copy the color code!")); // showing alert message if the color doesn't copied
}

refershBtn.addEventListener("click", generatePalette);

