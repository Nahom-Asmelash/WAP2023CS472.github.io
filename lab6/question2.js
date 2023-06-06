// Exercise 2: What’s the output in the console?
function foo(x) {
    let m;
    console.log(x, y);
    if(x > 5){
    var y = 5;
    m = x + y; 
    } else {
    let z = 10;
    m = z;
    }
    x = m;
    console.log(x, y);
    }
    var x = 10;
    foo(3);
    console.log(x)

    // Output for Exercise 2:

    // 3 undefined
    // 10 undefined
    // 10