// npm -- global command, comes with node

// node --version
// local dependency- use it only in  this particular project
// npm i
// global install -g <pakageName></pakageName>
// sudo npm install -g <pakageName>(mac)</pakageName>

// pakage.json - manifest File( stores important infor about project/pakage)

// manual approach ( create package.json in the root, create properties , etc)

// npm init (step by step , press enter to skip)
// npm init -y(everything default)


const _ = require('lodash');

const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems);
