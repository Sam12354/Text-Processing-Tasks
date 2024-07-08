function extractFile(input) {

    let array = input.split('\\')
    for(let i = 0; i < array.length; i++){
        let curWord = array[i]

        if(curWord.includes('.')){

            let lastDotIndex = curWord.lastIndexOf('.');
            let firstWord = curWord.slice(0, lastDotIndex);
            let secondWord = curWord.slice(lastDotIndex + 1);

            if(!secondWord.includes('bak')){

                console.log(`File name: ${firstWord}`);
                console.log(`File extension: ${secondWord}`);
            }

        }
    }
    
}
extractFile
('C:\\Internal\\training-internal\\Template.pptx')  
// ('C:\\Projects\\Data-Structures\\LinkedList.cs')