function pascalCaseSplitter(input) {
    let result = [];
    let currentWord = '';

    for (let letter of input) {
        if (letter === letter.toUpperCase() && currentWord.length > 0) {
            result.push(currentWord);
            currentWord = letter;
        } else {
            currentWord += letter;
        }
    }

    result.push(currentWord);

    let output = result.join(', ');

    console.log(output);
}
pascalCaseSplitter
('SplitMeIfYouCanHaHaYouCantOrYouCan')
// ('HoldTheDoor')
// ('ThisIsSoAnnoyingToDo')