const inputData = new Array(5);
const enterButton = new Array(5);
const outputData = new Array(5);
// Code for Q/A-1 : palindrome checking function
// 1. Select the elements
    inputData[0] = document.getElementById('inputOne');
    enterButton[0] = document.getElementById('ansOne');
    outputData[0] = document.getElementById('outputOne');

    // 2. Event Listener for the Enter Button
    enterButton[0].addEventListener('click', () => {
        // 3. Get text from the input tag
        const originalText = inputData[0].value;

        // 4. core logic - implementation
        function checkPalindrome (str) {
            let j = str.length-1;
            for(let i=0; i<str.length/2; i++) {
                if(str[i]!=str[j]) {
                    return originalText+" is not a Palindrome"
                }
                else {
                    j--;
                }
                return originalText+" is a Palindrome"
            }
        }

        // 5. Display output
        outputData[0].textContent = checkPalindrome (originalText);
    });

// Code for Q/A-2 : Function to Reverse the String
// 1. Select the elements
    inputData[1] = document.getElementById('inputTwo');
    enterButton[1] = document.getElementById('ansTwo');
    outputData[1] = document.getElementById('outputTwo');
// 2. Event Listener for the Enter Button
    enterButton[1].addEventListener('click', () => {
        const originalText = inputData[1].value; // 3. Get text from the input tag
// 4. core logic - implementation
        function stringReverse(str) {
            let rev = "";
            for(let i=str.length-1; i>=0; i--) {
                rev += str[i];
            }
            return rev;
        }
 // 5. Display output
        outputData[1].textContent = stringReverse(originalText);
    });


// Code for Q/A-3 : Function to remove all white spaces from a String
// 1. Select the elements
    inputData[2] = document.getElementById('inputThree');
    enterButton[2] = document.getElementById('ansThree');
    outputData[2] = document.getElementById('outputThree');
    // 2. Event Listener for the Enter Button
    enterButton[2].addEventListener('click', () => {
        // 3. Get text from the input tags
        const originalText = inputData[2].value;
        // 4. core logic - implementation
        function removeSpaces (str) {
            let wordText = "";
            for(let i=0; i<str.length; i++) {
                if (str[i]!==" ") {
                    wordText += str[i];
                }
            }
            return wordText;
        }
        // 5. Display output
        outputData[2].textContent = removeSpaces(originalText);
    });


// Code for Q/A-4 : Function to alphabetically sort a given Array of words
// 1. Select the elements
    inputData[3] = document.getElementById('inputFour');
    enterButton[3] = document.getElementById('ansFour');
    outputData[3] = document.getElementById('outputFour');

    // 2. Event Listener for the Enter Button
    enterButton[3].addEventListener('click', () => {
        // 3. Get text from the input tag
        const originalText = inputData[3].value;
        let givenArray= originalText.split(",");
        let orderedArray = new Array();


// 4. core logic - implementation

        function shortestWord (str1, str2) {
            if (str1.length > str2.length) {
                return str2; }
            else {
                return str1; } //returns first string even if both are equal by length, so that array shift() operation is easy if needed.     
        }

        function smallestWord (str1, str2) {
            sw = shortestWord(str1, str2); 
            for (let j=0; j<sw.length; j++) {
                if (str1[j] < str2[j]) {
                    return str1; }
                if (str2[j] < str1[j]) {
                    return str2 }
            }
            return sw; // if both are equal till the sw.length,  shortest word is the best choice
        }

        function sortArray (arr) {
            while (arr.length>=1) {
                let smallest = arr[0];
                for (let i=1; i<arr.length; i++) {
                    smallest = smallestWord(smallest, arr[i]);
                    }
                orderedArray.push(smallest);
                removeEle = arr.indexOf(smallest);
                arr.splice(removeEle, 1); // remove 1 element from the index of removeEle
            }
            return orderedArray;
        }

        // 5. Display output
        outputData[3].textContent = sortArray(givenArray);
    });


// Code for Q/A-5 : Function to insert one array into another array
// 1. Select the elements
    inputData[4] = document.getElementById('inputFive');
    secondInput = document.getElementById('inputFive-second');
    enterButton[4] = document.getElementById('ansFive');
    outputData[4] = document.getElementById('outputFive');

    function insertArray(arr1,arr2) {
            arr2.unshift(arr1[0]);
            arr2.push(arr1[1]);
            return arr2.join(" ,");
        }

    // 2. Event Listener for the Enter Button
    enterButton[4].addEventListener('click', () => {
        // 3. Get text from the input tag
        let givenArray1 = inputData[4].value;
        let givenArray2 = secondInput.value;

        let firstArray= givenArray1.split(",");
        let secondArray = givenArray2.split(",");

        // 4. core logic - implementation
        //function declared globally

        // 5. Display output
        outputData[4].textContent = insertArray(firstArray,secondArray);
    });
