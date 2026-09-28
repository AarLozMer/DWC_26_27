"use strict";

function potenciaNumeros(num1,num2) {
    if (!isNaN(num1)==true && !isNaN(num2)==true) {
        let count = num2;
        let acum = num1;
        while (count > 0) {
            acum*=num1;
            count--;
        } 
        
        return acum;
    }
}

export {potenciaNumeros};