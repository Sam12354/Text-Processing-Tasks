// The input will be a single string.

// Write a function that cuts the given string into half and reverse the two halves.

// Print each half on a separate line.

function cutAndReverse(input){

    let idx = input.length / 2
    let firstWord = input.slice(0, idx).split('').reverse().join('')
    let secondWord = input.slice(idx).split('').reverse().join('')

    console.log(firstWord);
    console.log(secondWord);

}
cutAndReverse
('tluciffiDsIsihTgnizamAoSsIsihT')
//('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')
