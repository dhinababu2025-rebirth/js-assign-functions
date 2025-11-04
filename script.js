// Global object to store satisfaction data: { "1": true, "2": false, ... }
const satisfactionData = {}; 

document.addEventListener('DOMContentLoaded', () => {
    // Select all feedback checkboxes using the unique class we added
    const feedbackCheckboxes = document.querySelectorAll('.feedback-checkbox');

    feedbackCheckboxes.forEach(checkbox => {
        const slideId = checkbox.getAttribute('data-slide-id');
        
        // Initialize the data based on the initial 'checked' state (true for Yes, false for No)
        satisfactionData[slideId] = checkbox.checked;

        // Add a listener to track every time the toggle state changes
        checkbox.addEventListener('change', () => {
            // Store the state: true for 'Yes' (checked), false for 'No' (unchecked)
            satisfactionData[slideId] = checkbox.checked;
            
            // Optional: Log the current state for debugging
            // console.log(`Slide ${slideId} satisfaction: ${checkbox.checked ? 'Yes' : 'No'}`);
            // console.log("Current Data:", satisfactionData);
        });
    });

    // Example of how to output the final result (e.g., when clicking a final "Submit" button)
    // You'll need to link this function to a button click event in your footer or final slide.
    window.calculateFinalScore = () => {
        const totalSlides = Object.keys(satisfactionData).length;
        
        // Filter the values to count how many are 'true' (Yes)
        const totalYes = Object.values(satisfactionData).filter(isSatisfied => isSatisfied).length;
        
        alert(`Final Evaluation: ${totalYes} out of ${totalSlides} slides were marked "Satisfied (Yes)".`);
        return totalYes;
    };
});



const inputData = new Array(15);
const enterButton = new Array(15);
const outputData = new Array(15);
// Code for Q/A-1
// 1. Select the elements : Reverse the String
    inputData[0] = document.getElementById('inputOne');
    enterButton[0] = document.getElementById('ansOne');
    outputData[0] = document.getElementById('outputOne');

    // 2. Event Listener for the Enter Button
    enterButton[0].addEventListener('click', () => {
        // 3. Get text from the input tag
        const originalText = inputData[0].value;
        let reversedText= "";

        // 4. core logic - implementation
        for(let i=originalText.length-1; i>=0; i--)
        {
            reversedText= reversedText+originalText[i];
        }

        // 5. Display output
        outputData[0].textContent = reversedText;
    });

// Code for Q/A-2 : Palindrome
// 1. Select the elements
    inputData[1] = document.getElementById('inputTwo');
    enterButton[1] = document.getElementById('ansTwo');
    outputData[1] = document.getElementById('outputTwo');
// 2. Event Listener for the Enter Button
    enterButton[1].addEventListener('click', () => {
        const originalText = inputData[1].value; // 3. Get text from the input tag
        let isPalindrome = true; 
            const loweredText = originalText.toLowerCase(); //remove capitalisation
            let modifiedText ="";
            for(i=0; i<loweredText.length; i++) { //logic to filter alphabets
                if (loweredText[i]>='a' && loweredText[i<='z'])
                    {modifiedText=modifiedText+loweredText[i];}
            }
        const textLength = modifiedText.length;
// 4. core logic - implementation
        for(let i=0; i<textLength/2; i++) {
            if(modifiedText[i]!=modifiedText[textLength-i-1])
            {isPalindrome=false;
                break;}
        }
        function result() {
            if (isPalindrome)
            {return originalText+" is a Palindrome";}
            else
            {return originalText+" is not a Palindrome"}
        }
 // 5. Display output
        outputData[1].textContent = result();
    });


// Code for Q/A-3 : Anagram
// 1. Select the elements
    inputData[2] = document.getElementById('inputThree-first');
    const secondInputData = document.getElementById('inputThree-second')
    enterButton[2] = document.getElementById('ansThree');
    outputData[2] = document.getElementById('outputThree');
    // 2. Event Listener for the Enter Button
    enterButton[2].addEventListener('click', () => {
        // 3. Get text from the input tags
        const firstWord = inputData[2].value;
        const secondWord = secondInputData.value;
        let secondWordArray = secondWord.split("");
        let isAnagram = true;
        // 4. core logic - implementation
        for(let i=0; i<firstWord.length; i++){
            let count = secondWordArray.length;
            for(let j=0; j<secondWordArray.length; j++)
            {
                if(firstWord[i]==secondWordArray[j]) {
                    //remove that char from secondWord
                    secondWordArray.splice(j,1)
                }
            }
            if(count == secondWordArray.length){
                isAnagram = false;
                break;
            }
        }
        function result() {
            if (isAnagram)
            {return firstWord+" & "+secondWord+" are Anagrams";}
            else
            {return firstWord+" & "+secondWord+" are not Anagrams"}
        }
        // 5. Display output
        outputData[2].textContent = result();
    });


// Code for Q/A-4 : Title Case
// 1. Select the elements
    inputData[3] = document.getElementById('inputFour');
    enterButton[3] = document.getElementById('ansFour');
    outputData[3] = document.getElementById('outputFour');

    // 2. Event Listener for the Enter Button
    enterButton[3].addEventListener('click', () => {
        // 3. Get text from the input tag
        const givenSentence = inputData[3].value;
        const givSent = givenSentence.toLowerCase(); //convert all chars to lower case
        let givSentArray= givSent.split(" ");
        let titleCase = "";
        // 4. core logic - implementation
        for(let i=0; i<givSentArray.length; i++)
        {   let firstLetter = givSentArray[i].charAt(0).toUpperCase();
            let l = givSentArray[i].length;     // length of the current word
            let restOfLetters = givSentArray[i].substring(1,l);
            titleCase = titleCase+" "+firstLetter+restOfLetters;
        }

        // 5. Display output
        outputData[3].textContent = titleCase.trim();
    });


// Code for Q/A-5 : Longest word
// 1. Select the elements
    inputData[4] = document.getElementById('inputFive');
    enterButton[4] = document.getElementById('ansFive');
    outputData[4] = document.getElementById('outputFive');

    // 2. Event Listener for the Enter Button
    enterButton[4].addEventListener('click', () => {
        // 3. Get text from the input tag
        const givenWords = inputData[4].value;
        let wordsArray= givenWords.split(" ");
        let longestWord = wordsArray[0];

        // 4. core logic - implementation
        for(let i=1; i<wordsArray.length; i++)
        {
            if(wordsArray[i].length>longestWord.length)
            {
                longestWord=wordsArray[i];
            }
        }

        // 5. Display output
        outputData[4].textContent = longestWord+" is a longest word of the given sentence";
    });
