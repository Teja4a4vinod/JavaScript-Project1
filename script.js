
/***** SECTION 2 LECTURE 8 ABOUT VARIABLES AND DATA TYPES *****/

    // var firstName = 'john';
    // console.log(firstName);

    // var lastName = 'smith';
    // var age = 28;
    // console.log(lastName+" :" +age);

    // var fullAge = true;
    // console.log(fullAge);

    // var job;
    // console.log(job);//undefined

    // job ="Teacher";
    // console.log(job);//Teacher

    // var 3years = 3 // Error because we can not start a variable name with a number

/** VARIABLE MUTATION AND TYPE CORRECTION ****/

    // var firstName = 'john';
    // var age = 28;
    // console.log(firstName+" "+age); //concatenation of string and number , *type cohersion *
    // //( JS automatically converts from one data type to other when it needed )
    // var job, isMarried;
    // job = 'Teacher ';
    // isMarried = false;
    // console.log(firstName + ' is a '+age+' years old '+job+'. Is he married? '+ isMarried);
    // //false (boolean reserved value gets converted to string when it logs it on console)

    // /*Variable Mutation*/
    // age = 'twenty eight';//age gets changed from number to string
    // job = 'driver';

    // alert(firstName + ' is a '+age+' years old '+job+'. Is he married? '+ isMarried);
    // var lastName = prompt('What is the last name?'); //We can ask the user for the input and save it in a variable
    // console.log(lastName)

/*** TYPEOF OPERATOR */
    // var johnOlder = false;
    // console.log(typeof johnOlder); //o/p is boolean
    // console.log(typeof mark); //undefined

/*** OPERATOR PRECEDENCE IN JS */
    //downloaded the table of precedence

/***CODING CHALLENGE */

    // var MarkMass, MarkHeight;
    // var johnMass, johnHeight;
    //     MarkMass = 20;
    //     MarkHeight = 25;
    //     johnMass = 30;
    //     johnHeight = 35;
    // var MarkBMI, johnBMI;
    //     MarkBMI = MarkMass/(MarkHeight * MarkHeight);
    //     johnBMI = johnMass/(johnHeight * johnHeight);
    // var isMarkHigh = MarkBMI > johnBMI;
    // console.log("Is Mark's BMI higher than John's BMI? "+isMarkHigh);

/****  TERNARY OPERATOR ******/
    // var firstName = 'John';
    // var age = 19;

    // //alternative way of writing condition
    // age >= 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice'); //beer
    // var drink = age >= 18 ? 'beer' : 'juice'; //we can assign the result of ternary operation to a variable
    // console.log(drink);

/**** SWITCH CASE FOR TRUE OR FALSE EXPRESSION */
    // var firstName = 'John';
    // var age = 101;
    // switch(true){
    //     case age < 13 :
    //         console.log(firstName +' is a boy');
    //         break;
    //     case age >= 13 && age <20:
    //         console.log(firstName +' is a teenager');
    //         break;
    //     case age >=20 && age <100:
    //         console.log(firstName +' is a man');
    //         break;
    //     default:
    //         console.log("Reached default case");
    // }

/*****TRUTHY and FALSY values */

    //falsy values: undefined, null, '', NaN
    //Truthy values: non falsy values
    // var height ;
    // if(height){//converts to false as it is undefined 
    //     console.log("Variable is defined");
    // }else{
    //     console.log("Variable is not defined");
    // }

    // var height= 0 ;
    // if(height || height===0){ //converts to true as height has value zero
    //     console.log("Variable is defined");
    // }else{
    //     console.log("Variable is not defined");
    // }

/***CODING CHALLENGE 2 ******/

    // var johnAvgScore = (89+120+103)/3;
    // var mikeAvgScore = (116+94+123)/3;

    // if(johnAvgScore > mikeAvgScore){
    //     console.log('The winner is John and the Avg score is: '+johnAvgScore);
    // }else if(johnAvgScore<mikeAvgScore){
    //     console.log('The winner is Mike and the score is: '+mikeAvgScore);
    // }else{
    //     console.log('Draw Match');
    // }

    // var maryAvgScore = (97+134+105)/3;

    // if(johnAvgScore > mikeAvgScore && johnAvgScore > maryAvgScore){
    //     console.log('The winner is John and the Avg score is: '+johnAvgScore);
    // }else if (mikeAvgScore>johnAvgScore && mikeAvgScore> maryAvgScore){
    //     console.log('The winner is Mike and the Avg score is: '+mikeAvgScore);
    // }else if (maryAvgScore>johnAvgScore && maryAvgScore> mikeAvgScore){
    //     console.log('The winner is Mary and the Avg score is: '+maryAvgScore);
    // }else{
    //     console.log("draw match");
    // }

/******* FUNCTIONS *****/ 
    //functions by statements
    //functions by expressions 

/*** Arrays */

    // var names = ['Mark','John','James'];
    // var years = new Array(1990,1991,1992);
    // console.log(names);//['Mark','John','James']
    // console.log(years[0]);//1990
    // console.log(names.length);//3
    // names[0] = 'Mary'; //Mark will be replaced with Mary

    // // Arrays in JS can hold different data types data as a single array

    // names.push('Teja'); //adds Teja at the end of the array
    // console.log(names);
    // names.unshift('Vinny'); //adds Vinnay at the begining of the array
    // console.log(names);
    // names.pop(); //removes elements from the end
    // console.log(names);
    // names.shift(); //removes the first element
    // console.log(names);
    // console.log(names.indexOf('John')); //shows the position of the element in the array
    // console.log(names.indexOf('Puji')); // Outputs -1 when the element is not in the array

/****** CODING CHALLENGE 3 ******/

    // function tipCalculator(bill){
    //     var tip;
    //     if(bill < 50){
    //         tip = 0.2 * bill;
    //     }else if(50 <= bill <= 200){
    //         tip = 0.15 * bill;
    //     }else if (bill > 200){
    //         tip = 0.1 * bill;
    //     }
    //     return tip;

    // }

    // var tip1 = tipCalculator(124);
    // var tip2 = tipCalculator(48);
    // var tip3 = tipCalculator(268);

    // var tipBill1 = tip1+124;
    // var tipBill2 = tip2+48;
    // var tipBill3 = tip2+268;

    // var tipArray = [tip1, tip2, tip3];
    // var tipBillArray = [tipBill1, tipBill2, tipBill3];

    // console.log(tipArray);
    // console.log(tipBillArray);

/***** OBJECTS AND PROPERTIES******/

    //  var person = {
    //     firstName: 'John',
    //     lastName: 'Smith',
    //     age: 23,
    //     job: 'Teacher',
    //     family: ['mark', 'mike','mary'],
    //     maritalStatus: 'single'
    //  }

    //  console.log(person.firstName); //We can use dot notation to access the properties of object
    //  console.log(person['lastName']);//We can access the property of object using bracket notation
    //  var x = 'job'; //storing property name in variable
    //  console.log(x);

    //  person.age = 25;//modify the data using dot notation
    //  person['maritalStatus']='Married';//modifying the data using bracket notation

    //  console.log(person.age); //We can use dot notation to access the properties of object
    //  console.log(person['maritalStatus']);

    //  //We can create Object in 2 ways 1. with curly braces 2. Using new Object notation

    //  var newObject = new Object();
    //  newObject.name = 'Mark';
    //  console.log(newObject); // returns {name: 'Mark'}

 /****** OBJECT METHODS */

    //  var person = {
    //     firstName: 'John',
    //     lastName: 'Smith',
    //     birthYear: 1990,
    //     job: 'Teacher',
    //     family: ['mark', 'mike','mary'],
    //     maritalStatus: 'single',
    //     calcAge: function(birthYear){
    //         return 2018 - birthYear;
    //     }

    //     //another way
    //     // calcAge: function(){
    //     //     return 2018 - this.birthYear;//takes current object's birth year
    //     //}
    //  };

    //  console.log(person.calcAge(1990));
    //  person.age = person.calcAge();//when we use this key word

/***** CODING CHALLENG 4 ******/

    // var john = {
    //     fullName: 'John',
    //     mass:25,
    //     height:35,
    //     BMI: function(){
    //         this.calBMI = this.mass/(this.height*this.height);//Create new property and assign the result
    //          //so that we have it stored. 
    //         return this.calBMI;
    //     }
    // }

    // var mark = {
    //     fullName: 'Mark',
    //     mass:35,
    //     height:45,
    //     BMI: function(){
    //         this.calBMI = this.mass/(this.height*this.height);
    //         return this.calBMI;
    //     }
    // }
    // john.BMI();
    // mark.BMI();
    // console.log(john,mark);//o/p = {fullName: "John", mass: 25, height: 35, BMI: ƒ, calBMI: 0.02040816326530612}

    // if(mark.BMI() > john.BMI()){
    //     console.log('Mark has the highest BMI and the BMI is: '+mark.BMI());
    // }else if(mark.BMI() < john.BMI()){
    //     console.log('John has the highest BMI and the BMI is: '+john.BMI());
    // }else{
    //     console.log("Both has same BMIs")
    // }

    