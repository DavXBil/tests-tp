import faker from "@faker-js/faker";

    const randomNumber = faker.datatype.number(10)
    const tva = 0.2

    
    export const createCart = () => {
           let cart = []
           for (let i = 0; i < randomNumber; i++) {
                   cart.push({
                           name: faker.commerce.product(),
                           price: faker.commerce.price(5, 60),
                           weight: faker.datatype.number(15)
                   });
           }

           console.log(cart)
        
        return cart
    }
    
    // console.log(createPanier([produit,produit2]))
    
    function getTotal(cart) {
        let total = 0
        cart.forEach(product => {
                total += parseInt(product.price)  
        });

        console.log(total)

        return total
    }
    
    // console.log(getPrixTotalPanier());
    
    export const getTVA = (total ,tva) => {

        const TvaAmount = (total * tva) / 100
        const price = total + TvaAmount
        return price
    }

const cart = createCart()

export const total = getTotal(cart)

console.log(getTVA(total, tva))