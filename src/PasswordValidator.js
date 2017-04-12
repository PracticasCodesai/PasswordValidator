'use strict';

let PasswordValidator = function() {
    this.validate = function(input) {
        let validateFunctions = [containsUppercase, containsLeastTwoDigits,
            containsLeastOneSpecialCharacter];

        let result;
        for(let func of validateFunctions){
            result = func(input);
            if(!result)
                return false;
        }

        return result;
    };

    function containsUppercase(input){
        for(let char of input){
            if(char !== char.toLowerCase()){return true}
        }
        return false;
    }

    function containsLeastTwoDigits(input){
        let count = 0;
        for(let char of input){
            if(!isNaN(char)){
                count = count +1;
                if(count >= 2)
                    return true;
            }
        }
        return false;
    }

    function containsLeastOneSpecialCharacter(input) {
        let specialChar = ['$', '#', '%', '&', '-', '!', '?'];
        for(let char of specialChar){
            if(input.includes(char))
                return true;
        }
        return false;
    }

};

module.exports = PasswordValidator;
