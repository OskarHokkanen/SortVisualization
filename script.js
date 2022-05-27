function init() {
    let list = fillAndShuffleList(getSetting('amountOfBars'));
    render(list)

    document.getElementById('amountOfBars').addEventListener('change', function() {
        let list = fillAndShuffleList(getSetting('amountOfBars'));
        render(list);
    })
    // ON init - Show information about the page in the information box
}

window.onload = init;

// Creates and returns a list of given list size.
// The list is filled with integers 1 - listSize.
function fillList(listSize) {
    let list = [];

    if (typeof listSize != "number") {
        return list;
    }

    for (let i = 1; i < listSize +1; i++) {
        list.push(i);
    }
    return list;
}

// Randomizes a list and returns randomized list.
function shuffleList(list) {
    let temp = [];
    while (list.length > 0) {
        let r = Math.floor(Math.random() * list.length)
        let a = list.splice(r, 1);
        temp.push(Number(a))
    }
    return temp;
}

// Creates and randomizes a list of given listSize.
function fillAndShuffleList(listSize) {
    let list = fillList(listSize);
    list = shuffleList(list);
    return list;
}

// Activates when user presses corresponding button. 
// Creates a list of numbers and starts the sort.
// After the steps of the sort has been created,
// send steps to render in interval.
function startBubbleSort() {
    // Fill list
    document.getElementById('canvas').classList.replace('playing', 'paused');
    setTimeout(() => {
        document.getElementById('canvas').classList.replace('paused', 'playing');
    }, getSetting('displaySpeed'));
    let n = getSetting('amountOfBars');
    let list = fillAndShuffleList(n);

    render(list)

    const steps = bubbleSort(list, list.length);
    
    var i = 0;
    var interval = setInterval(function() {
        let l = steps[i];
        render(l);
        i++;
        if (i === steps.length || document.getElementById('canvas').classList.contains('paused')) clearInterval(interval);
    }, getSetting('displaySpeed'));
}

// https://www.geeksforgeeks.org/bubble-sort/
function bubbleSort(arr, n) {
    let steps = [];
    var i, j, temp;
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            const a = [...arr]
            steps.push(a)
            if (arr[j] > arr[j + 1]) {
                // swap arr[j] and arr[j+1]
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }       
        }
    }
    return steps;
}

// Activates when user presses corresponding button. 
// Creates a list of numbers and starts the sort.
// After the steps of the sort has been created,
// send steps to render in interval.
function startInsertionSort() {
    // Fill list
    document.getElementById('canvas').classList.replace('playing', 'paused');
    setTimeout(() => {
        console.log('here')
        document.getElementById('canvas').classList.replace('paused', 'playing');    
    }, getSetting('displaySpeed'));
    let n = getSetting('amountOfBars');
    let list = fillAndShuffleList(n);

    render(list)

    const steps = insertionSort(list, list.length);
    
    var i = 0;
    var interval = setInterval(function() {
        let l = steps[i];
        render(l);
        i++;
        if (i === steps.length || document.getElementById('canvas').classList.contains('paused')) clearInterval(interval);
    }, getSetting('displaySpeed'));
}

function insertionSort(arr){
    let steps = [];
    //Start from the second element.
    for(let i = 1; i < arr.length;i++){

        //Go through the elements behind it.
        for(let j = i - 1; j > -1; j--){
            
            //value comparison using ascending order.
            if(arr[j + 1] < arr[j]){

                //swap
                [arr[j+1],arr[j]] = [arr[j],arr[j + 1]];
                const a = [...arr]
                steps.push(a)
                render(arr)
            }
        }
    };

  return steps;
}

function render(list) {
    // Get reference to canvas
    var canvas = document.getElementById('canvas');
    // Width of each bar
    let barWidth = canvas.width / list.length;
    // Multiplier to normalize the height of the bars
    let barHeightMultip = canvas.height / list.length;
    // Get context '2d'
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < list.length; i++) {
        ctx.fillStyle = getSetting('barColor');
        ctx.fillRect(i * barWidth, canvas.height - list[i], barWidth, list[i] * barHeightMultip);
    }
}

// Function to get general settings
// TODO: Check if i can do this another way
function getSetting(setting) {
    if (setting === "barColor") {
        return 'rgb(99, 179, 237)';
    }
    if (setting === "displaySpeed") {
        let ds = document.getElementById('displaySpeed').value;
        if (ds <= 100 && ds >= 5) {
            return ds;
        }
        return 5;
    }
    if (setting === "amountOfBars") {
        let aob = document.getElementById('amountOfBars').value;
        if (aob <= 300 && aob >= 10) {
            return parseInt(aob);
        }
        return 50;
    }
    
}