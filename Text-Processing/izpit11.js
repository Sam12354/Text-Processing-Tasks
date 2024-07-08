// The input will be a single string.

// Find all special words starting with #. If the found special word does not consist only of letters, then it is invalid and should not be printed.

// Finally, print out all the special words you found without the label (#) on a new line.

function hashtag(input) {

    let array = input.split(' ');

    let words = [];
    for(let i = 0; i < array.length; i++){
        let curWord = array[i];
        
        if(curWord.includes('#')){
            if(curWord.length > 1){
                let myWord = curWord.split('#');
                let actualWord = myWord[1];

                let isTrue = true;
                for(let letter of actualWord){
                    if(!/[A-Za-z]/.test(letter)){
                        isTrue = false;
                    }
                }
                if(isTrue){

                    words.push(actualWord);
                }
            }
        }
    }
    for(let word of words){
        console.log(word);
    }
    
}
hashtag
('Nowadays everyone uses # to tag a #special word in #socialMedia')  
// ('The symbol # is known #variously in English-speaking #regions as the #number sign')