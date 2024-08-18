const array = [1, 2, 4, 5];


// Display the length of the array
const displayLength = arr => {
    let length = 0;
    for (let i in arr) {
        length++;
    }
    return length;
};

// Add the element 6 to the end of the array
const addElementEnd = (arr, num) => {
    arr[arr.length] = num;
    return arr.slice();
};

// Add the element 0 to the start of the array
const addElementStart = (arr, num) => {
    for (let i = arr.length; i >= 0; i--) {
        if (!isNaN(arr[i])) arr[i + 1] = arr[i];
    }
    arr[0] = num;
    return arr.slice();
};


// Add the element 3 at the 4th position in the array
const addElement = (arr, num, pos) => {
    arr[pos - 1] = num;
    return arr.slice();
};

// Delete the last element
const deleteLastElement = arr => {
    const newArray = [];
    for (let i = 0; i < arr.length - 1; i++) {
        newArray[i] = arr[i];
    }
    return newArray;
};

// Delete the first element
const deleteFirstElement = arr => {
    const newArray = [];
    for (let i = 1; i < arr.length; i++) {
        newArray[i - 1] = arr[i];
    }
    return newArray;
};

// Sum the array elements (using loop)
const sumArray = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

// Reverse the array elements (using loop, don’t use reverse function)
const reverseArray = arr => {
    const arrayReversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arrayReversed.push(arr[i]);
    }
    return arrayReversed;
};

// Display the even numbers on the screen
const retrieveEvenElements = arr => {
    const newArray = [];
    let counter = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            counter++;
            newArray[counter] = arr[i];
        }
    }
    return newArray;
};

// Merge the array with the following array [5,7,5]
const mergeTwoArrays = (arr1, arr2) => {
    const mergedArray = [];
    let arr2Counter = -1;

    for (let i = 0; i < arr1.length; i++) {
        mergedArray[i] = arr1[i];
    }

    for (let i = arr1.length; i < arr2.length + arr1.length; i++) {
        arr2Counter++;
        mergedArray[i] = arr2[arr2Counter];
    }

   return mergedArray
};

// Count how many times the number 5 is repeated
const displayElementRepetition = (arr, num) => {
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) counter++;
    }
    return counter;
};

// Find the minimum number in the array
const findMinimum = arr => {
    let minNumber = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minNumber) minNumber = arr[i];
    }

    return minNumber;
};

// Find the maximum number in the array
const findMaximum = arr => {
    let maxNumber = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNumber) maxNumber = arr[i];
    }

    return maxNumber;
};





const results = [
    { title: 'Display the length of the array.', result: displayLength(array) },
    { title: 'Add the element 6 to the end of the array.', result: addElementEnd(array, 6) },
    { title: 'Add the element 0 to the start of the array.', result: addElementStart(array, 0) },
    { title: 'Add the element 3 at the 4th position in the array.', result: addElement(array, 3, 4) },
    { title: 'Delete the last element.', result: deleteLastElement(array) },
    { title: 'Delete the first element.', result: deleteFirstElement(array) },
    { title: 'Sum the array elements (using loop).', result: sumArray(array) },
    { title: 'Reverse the array elements (using loop, don’t use reverse function).', result: reverseArray(array) },
    { title: 'Display the even numbers on the screen.', result: retrieveEvenElements(array) },
    { title: 'Merge the array with the following array [5,7,5].', result: mergeTwoArrays(array, [5, 7, 5]) },
    { title: 'Count how many elements in the array (don’t use “length” property).', result: displayLength(array) },
    { title: 'Count how many times the number 5 is repeated.', result: displayElementRepetition(array, 5) },
    { title: 'Find the minimum number in the array.', result: findMinimum(array) },
    { title: 'Find the maximum number in the array.', result: findMaximum(array) },
];





document.getElementById('showResults').addEventListener('click', function() {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = results.map(({ title, result }) => `
        <div class="task">
            <div class="task-title">${title}</div>
            <div class="task-result">${Array.isArray(result) ? `<span>${JSON.stringify(result, null, 2)}</span>` : result}</div>
        </div>
    `).join('');
});
