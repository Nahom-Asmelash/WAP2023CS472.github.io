// Exercise 1: What’s the output in the console?
function b() {
    const y = 30;
    a();
    function a() {
    console.log(x, y);
    }
    var x = 10;
    console.log(x, y); 
    }
    const x = 20;
    var y = 40;
    b();
    
    //Output:

    // undefined 30
    // 10 30