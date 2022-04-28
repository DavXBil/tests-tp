import should from 'should'
import {createCart, getTVA, total} from "../main.js"


describe("Checking if cart generation runs without problems", () => {  
    it("asking if cart is an object", () => {
        
        should(createCart()).be.instanceof(Object);
    });
});

describe("Check if TVA runs correctly", () => {
    it("Asking if tva is a number", () => {
        should(getTVA("8")).be.a.Number()
    })
});