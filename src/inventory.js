import cottonBlue from './images/cotton-blue.jpeg'; 
import cottonBlack from "./images/cotton-black.jpeg"; 
import cottonWhite from "./images/cotton-white.jpeg"; 
import printBlue from  "./images/print-blue.jpeg"; 
import printRed from "./images/print-red.jpeg"; 
import printWhite from "./images/print-white.jpeg"; 
import flowerRed from  "./images/flower-red.jpeg"; 
import flowerWhite from "./images/flower-white.jpeg"; 
import checkBlue from "./images/check-blue.jpeg"; 
import checkGray from "./images/check-gray.jpeg"; 
import checkRed from "./images/check-red.jpeg"; 

export const inventory = [
    {
        name: "cotton tshirt", 
        styleNumber: "MS13KT19061", 
        colorOptions: [{
            hue: "blue", 
            src: cottonBlue, 
        }, {
            hue: "white", 
            src: cottonWhite
        }, {
            hue: "black", 
            src: cottonBlack
        }], 
        src: cottonBlue, 
        alt: "blue cotton tshirt", 
        size: ["Small", "Medium", "Large", "X-Large"], 
        price: 11, 
        render: true, 
        color: "blue", 
        quantOrdered: 1
    },{
        name: "print girls tee", 
        styleNumber: "MS13KT19071", 
        colorOptions: [{
            hue: "blue", 
            src: printBlue
        }, {
            hue: "white", 
            src: printWhite
        }, {
            hue: "red", 
            src: printRed
        }], 
        src: printBlue, 
        alt: "print girls tee blue", 
        size: ["Small", "Medium", "Large", "X-Large"], 
        price: 17, 
        render: true,
        color: "blue",
        quantOrdered: 1
    }, {
        name: "flower pattern shirt", 
        styleNumber: "MS13KT19082", 
        colorOptions: [{
            hue: "red", 
            src: flowerRed
        }, {
            hue: "white", 
            src: flowerWhite
        }], 
        src: flowerRed, 
        alt: "flower pattern shirt red", 
        size: ["Small", "Medium", "Large", "X-Large"], 
        price: 21, 
        render: true,
        color: "red",
        quantOrdered: 1
    }, {
        name: "check pattern shirt", 
        styleNumber: "MS13KT1910", 
        colorOptions: [{
            hue: "blue", 
            src: checkBlue
        }, {
            hue: "gray", 
            src: checkGray
        }, {
            hue: "red", 
            src: checkRed
        }], 
        src: checkBlue, 
        alt: "check pattern shirt blue", 
        size: ["Small", "Medium", "Large", "X-Large"], 
        price: 22, 
        render: true,
        color: "blue",
        quantOrdered: 1
    }]