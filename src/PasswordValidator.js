'use strict';

let PasswordValidator = function() {
    this.validate = function(input) {
         if(containsUppercase(input)){
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
};

module.exports = PasswordValidator;
