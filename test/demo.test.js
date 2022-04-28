import * as should from 'should'
import {createCart, getTVA, total} from "../main.js"
var User = function(name){  
    this.name = name;
};
describe("Checking if cart generation runs without problems", () => {  
    it("asking if cart is an object", function(){
        
        should(createCart()).be.instanceof(Object);
    });
});

describe("Check if TVA runs correctly", () => {
    it("Asking if tva is a number", () => {
        should(getTVA(total).be.a.Number())
    })
});