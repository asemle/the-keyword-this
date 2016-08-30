//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //to set the scope of a property or function to the parent object,

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //1. By default, 'this' refers to the global object, or the current window
      //2. 'this' in the context of a function which is a property of an object, refers to the scope of the object
      //3. 'this' in the context of a constructor function will refer to the newly created object once the constructor function is invoked using the 'new' keyword
      //4. When a function is called using call or apply, this refers to the first argument passed to call or apply. If the first argument is null or not an object, this refers to the global object.

  // 3) What is the difference between call and apply?
      // call is used when you want to set an object as the scope of a function, and pass a few arguments to the function, you can use apply when you want to set the scope and also pass an array to the function, which it unpacks using each value at each index as an argument.

  // 4) What does .bind do?

      //.bind pairs a function with an object, so that no matter how the function is called, the 'this' keyword refers to the object


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

var user = {
  username: "me",
  email: "me@gmail.com",
  getUsername: function() {
    return this.username;
  }
}

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername();

//Next Problem


function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.move = 0;
    this.moveCar = function() {
      this.move += 10;
      return this.move;
    }

}

  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)

  var priusYear = getYear.bind(prius);
  var mustangYear = getYear.bind(mustang);

//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser); //Fix this

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)


//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //the window, until i fix it with call

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
