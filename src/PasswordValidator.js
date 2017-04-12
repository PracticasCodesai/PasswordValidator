'use strict';

let PasswordValidator = function() {
    this.validate = function(input) {
        if(containsUppercase(input) && containsLeastTwoDigits(input) && containsLeastOneSpecialCharacter(input)){
             return true;
         }

        return false;
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
