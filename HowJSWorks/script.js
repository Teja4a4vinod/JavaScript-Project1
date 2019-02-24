/**** LECTURE ON HOISTING */

    // calcAge(1992);
    // function calcAge(year){
    //     console.log(2018-year);
    // }

    // calcAge(1990);

/**** SCOPING */

    // var a ='Hello'; //global variable and only a is accessible but not b and c
    // first();

    // function first(){
    //     var b = 'hi';//only and b are accessable
    //     second();
    //     function second(){
    //         var c = 'bye';
    //         console.log(a+b+c); //a,b ,c can be accessed from here
    //     }
    // }

/***THIS KEYWORD in PRACTICE */

    // console.log(this);//outputs window object 

    // var john ={
    //     name: 'John',
    //     birthYear: 1990,
    //     calcAge: function(){ 
    //         console.log(this); //this returns the John object because its a method call
    //         console.log(2018-this.birthYear);
    //         // function innerfunc(){
    //         //     console.log(this); //this returns a window object because its a regular function call
    //         // }
    //         // innerfunc(); //regular function call
    //     }
    // }
    // john.calcAge(); //method call
    
    // var mike ={
    //     name: 'Mike',
    //     birthYear: 1996
    // }

    // mike.calcAge = john.calcAge; //method borrowing, no braces when borrowing method
    // mike.calcAge(); //calling the borrowed method to calculate age
    
