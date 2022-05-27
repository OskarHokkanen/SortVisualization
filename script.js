function init() {
    // Fill list
    let list = fillList(200);
    // List is randomized after this
    list = shuffleList(list);
    render(list)
    
}
window.onload = init;

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

function shuffleList(list) {
    let temp = [];
    while (list.length > 0) {
        let r = Math.floor(Math.random() * list.length)
        let a = list.splice(r, 1);
        temp.push(Number(a))
    }
    return temp;

}

function startBubbleSort() {
    // Fill list
    let list = fillList(350);
    // List is randomized after this
    list = shuffleList(list);
    render(list)

    const steps = bubbleSort(list, list.length);
    
    var i = 0;
    var interval = setInterval(function() {
        let l = steps[i];
        render(l);
        i++;
        if (i === steps.length) clearInterval(interval);
    }, 1);
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

function startInsertionSort() {
    // Fill list
    let list = fillList(200);
    // List is randomized after this
    list = shuffleList(list);
    render(list)

    const steps = insertionSort(list, list.length);
    
    var i = 0;
    var interval = setInterval(function() {
        let l = steps[i];
        render(l);
        i++;
        if (i === steps.length) clearInterval(interval);
    }, 40);
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
        ctx.fillStyle = 'rgb(99, 179, 237)';
        ctx.fillRect(i * barWidth, canvas.height - list[i], barWidth, list[i] * barHeightMultip);
    }
}