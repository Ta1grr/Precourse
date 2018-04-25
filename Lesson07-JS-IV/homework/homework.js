// Do not change any of the function names

function makeCat(name, age) {
  // create a new object with a name property with the value set to the name argument
  let obj = {
    name: name,
    // add an age property to the object with the value set to the age argument
    age: age,
    // add a method called meow that returns the string 'Meow!'
    meow: function(){
      return 'Meow!';
    }
  };
  // return the object
  return obj;
}

function addProperty(object, property) {
  // add the property to the object with a value of null
  object.z = null;
  // return the object
  return object;
  // note: the property name is NOT 'property'.  The name is the value of the argument called property (a string)
}

function invokeMethod(object, method) {
  // method is a string that contains the name of a method on the object
  // invoke this method
  object.incrementX();
  // nothing needs to be returned
}

function multiplyMysteryNumberByFive(mysteryNumberObject) {
  // mysteryNumberObject has a property called mysteryNumber
  // multiply the mysteryNumber property by 5 and return the product
  let results = mysteryNumberObject.mysteryNumber * 5;
  return results;
}

function deleteProperty(object, property) {
  // remove the property from the object
  delete object.z;
  // return the object
  return object;
}

function newUser(name, email, password) {
  // create a new object with properties matching the arguments passed in.
  let obj = {
    name: name,
    email: email,
    password: password,
  };
  // return the new object
  return obj;
}

function hasEmail(user) {
  // return true if the user has a value for the property 'email'
  if(user.hasOwnProperty('email') && user.email !== null){
    return true;
  }
  // otherwise return false
  return false;
}

function hasProperty(object, property) {
  if(object.hasOwnProperty(property)){
  // return true if the object has the value of the property argument
    return true;
  }
  // property is a string
  // otherwise return false
  return false;
}

function verifyPassword(user, password) {
  // check to see if the provided password matches the password property on the user object
  if (user.password === password){

  
  // return true if they match
  return true;
}
  // otherwise return false
  return false;
}

function updatePassword(user, newPassword) {
  // replace the existing password on the user object with the value of newPassword
  user.password = newPassword;
  // return the object
  return user;
}

function addFriend(user, newFriend) {
  // user has a property called friends that is an array
  // add newFriend to the end of the friends array
  user.friends.push(newFriend);
  // return the user object
  return user;
}

function setUsersToPremium(users) {
  // users is an array of user objects.
  // each user object has the property 'isPremium'
  // set each user's isPremium property to true
  // return the users array
  for(let i = 0; i < users.length; i++){
    users[i].isPremium = true;
  }
  return users;
}

function sumUserPostLikes(user) {
  // user has an array property called 'posts'
  // posts is an array of post objects
  // each post object has an integer property called 'likes'
  // sum together the likes from all the post objects
  // return the sum
  let sum = 0;
  for(let i = 0; i < user.posts.length; i++){
    //adding likes and outputing into sum
    sum = sum + user.posts[i].likes;
  }
  return sum;
} 

function addCalculateDiscountPriceMethod(storeItem) {
  let results = 0;
  // add a method to the storeItem object called 'calculateDiscountPrice'
  storeItem.calculateDiscountPrice = function(){
  // this method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
  results = storeItem.price - (storeItem.price * storeItem.discountPercentage);
  // the method then subtracts the discount from the price and returns the discounted price
  return results;
  };
  return storeItem;
  // return storeItem at the end of the function
  // example: 
  // price -> 20
  // discountPercentage -> .2
  // discountPrice = 20 - (20 * .2)
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  makeCat,
  addProperty,
  invokeMethod,
  multiplyMysteryNumberByFive,
  deleteProperty,
  newUser,
  hasEmail,
  hasProperty,
  verifyPassword,
  updatePassword,
  addFriend,
  setUsersToPremium,
  sumUserPostLikes,
  addCalculateDiscountPriceMethod,
};
