function revealWords(words, parameter2){

    let word = words.split(', ')
    
    for(let curWord of word){
        let template = '*'.repeat(curWord.length)
        parameter2 = parameter2.replace(template, curWord)
    }
    console.log(parameter2);
}
revealWords
('great',

'softuni is ***** place for learning new programming languages')  
// ('great, learning',

// 'softuni is ***** place for ******** new programming languages')
