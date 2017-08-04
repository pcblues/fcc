//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line
var idx=0;
  var result = "";
  var contact = "";
  while (idx<contacts.length) {
    if (contacts[idx][firstName]==firstName) {
      contact = contacts[idx].firstName;
      if (contacts[idx].hasOwnProperty(prop)) {
        result = contacts[idx][prop];
      } else 
      {result = "No such property";}
    }
          idx++;
  }

   if (contact==="") {
     result = "No such contact";
   }
  
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");
