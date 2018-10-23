const fs = require("fs");
const path='./toDo/to-do.json'

exports.saveToDo=(toDo) => {
	const toDoArray = this.getToDo();
	toDoArray.push(toDo);
	
	fs.writeFileSync(path, JSON.stringify(toDoArray));
	return toDoArray;	
},

exports.getToDo = () => {
	// filic kardal string@
	//let jsonData = require(path);
	const data = fs.readFileSync(path);
    const toDoArray = JSON.parse(data);
	return toDoArray;
}
