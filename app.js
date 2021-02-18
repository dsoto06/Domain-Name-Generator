let namegenerator = function() {

let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

let random1 = Math.floor(Math.random() * pronoun.length);
let random2 = Math.floor(Math.random() * adj.length);
let random3 = Math.floor(Math.random() * noun.length);


return pronoun[random1] + adj[random2] + noun[random3] + ".com"
};

console.log(namegenerator());

// Write [node app.js] on the console to see the result