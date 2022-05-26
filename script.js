function init() {
    // Fill list
    let list = fillList(32);
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
    let list = fillList(32);
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
    }, 20);
}

// https://www.geeksforgeeks.org/bubble-sort/
function bubbleSort(arr, n) {
    console.log(arr)
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

function render(list) {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < list.length; i++) {
                ctx.fillStyle = 'rgb(200, 0, 0)';
                ctx.fillRect(10 + (i * 15), canvas.height - (list[i] * 10), 10, list[i] * 10);
        }
}