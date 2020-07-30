var personnel = [
	{
		id: 5,
		name: 'Luke Skywalker',
		pilotingScore: 98,
		shootingScore: 56,
		isForceUser: true
	},
	{
		id: 82,
		name: 'Sabine Wren',
		pilotingScore: 73,
		shootingScore: 99,
		isForceUser: false
	},
	{
		id: 22,
		name: 'Zeb Orellios',
		pilotingScore: 20,
		shootingScore: 59,
		isForceUser: false
	},
	{
		id: 15,
		name: 'Ezra Bridger',
		pilotingScore: 43,
		shootingScore: 67,
		isForceUser: true
	},
	{
		id: 11,
		name: 'Caleb Dume',
		pilotingScore: 71,
		shootingScore: 85,
		isForceUser: true
	}
];

var displayName = personnel.map(employee => `${employee.name}`);
var names = displayName.join(", ");

function addName () { 
    let nameDiv = document.createElement("div");
    
    nameDiv.innerHTML = names; 

    document.body.appendChild(nameDiv); 
  }

  document.body.onload = addName;