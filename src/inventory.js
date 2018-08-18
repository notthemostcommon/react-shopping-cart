import cottonBlue from './images/cotton-blue.jpeg'; 
import cottonBlack from "./images/cotton-black.jpeg"; 
import cottonWhite from "./images/cotton-white.jpeg"; 
import printBlue from  "./images/print-blue.jpeg"; 
import printRed from "./images/print-red.jpeg"; 
import printWhite from "./images/print-white.jpeg"; 
import flowerBlue from "./images/print-blue.jpeg"; 
import flowerRed from  "./images/print-red.jpeg"; 
import flowerWhite from "./images/print-white.jpeg"; 
import checkBlue from "./images/check-blue.jpeg"; 
import checkGray from "./images/check-gray.jpeg"; 
import checkRed from "./images/check-red.jpeg"; 

export const inventory = [
    {
        name: "cotton tshirt", 
        styleNumber: "MS13KT19061", 
        color: "blue", 
        src: cottonBlue, 
        alt: "blue cotton tshirt", 
        size: ["S", "M", "L", "XL"], 
        price: 11, 
        render: true
    }, {
        name: "cotton tshirt", 
        styleNumber: "MS13KT19062", 
        color: "black", 
        src: cottonBlack, 
        alt: "black cotton tshirt", 
        size: ["S", "M", "L", "XL"], 
        price: 11, 
        render: false
    },{
        name: "cotton tshirt", 
        styleNumber: "MS13KT19063", 
        color: "white", 
        src: cottonWhite, 
        alt: "white cotton tshirt", 
        size: ["S", "M", "L", "XL"], 
        price: 11, 
        render: false
    },{
        name: "print girls tee", 
        styleNumber: "MS13KT19071", 
        color: "blue", 
        src: printBlue, 
        alt: "print girls tee blue", 
        size: ["S", "M", "L", "XL"], 
        price: 17, 
        render: true
    }, {
        name: "print girls tee", 
        styleNumber: "MS13KT19072", 
        color: "red", 
        src: printRed, 
        alt: "print girls tee red", 
        size: ["S", "M", "L", "XL"], 
        price: 17, 
        render: false
    }, {
        name: "print girls tee", 
        styleNumber: "MS13KT19073", 
        color: "white", 
        src: printWhite, 
        alt: "print girls tee white", 
        size: ["S", "M", "L", "XL"], 
        price: 17, 
        render: false
    }, {
        name: "flower pattern shirt", 
        styleNumber: "MS13KT19081", 
        color: "blue", 
        src: flowerBlue, 
        alt: "flower pattern shirt blue", 
        size: ["S", "M", "L", "XL"], 
        price: 21, 
        render: true
    },{
        name: "flower pattern shirt", 
        styleNumber: "MS13KT19082", 
        color: "red", 
        src: flowerRed, 
        alt: "flower pattern shirt red", 
        size: ["S", "M", "L", "XL"], 
        price: 21, 
        render: false
    },{
        name: "flower pattern shirt", 
        styleNumber: "MS13KT19083", 
        color: "white", 
        src: flowerWhite, 
        alt: "flower pattern shirt white", 
        size: ["S", "M", "L", "XL"], 
        price: 21, 
        render: false
    }, {
        name: "check pattern shirt", 
        styleNumber: "MS13KT1910", 
        color: "blue", 
        src: checkBlue, 
        alt: "check pattern shirt blue", 
        size: ["S", "M", "L", "XL"], 
        price: 22, 
        render: true
    }, {
        name: "check pattern shirt", 
        styleNumber: "MS13KT1911", 
        color: "gray", 
        src: checkGray, 
        alt: "check pattern shirt gray", 
        size: ["S", "M", "L", "XL"], 
        price: 22, 
        render: false
    }, {
        name: "check pattern shirt", 
        styleNumber: "MS13KT1912", 
        color: "red", 
        src: checkRed, 
        alt: "check pattern shirt red", 
        size: ["S", "M", "L", "XL"], 
        price: 22, 
        render: false
    }]