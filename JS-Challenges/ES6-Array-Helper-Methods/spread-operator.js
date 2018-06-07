/* Application of spread operator
*/

//Lets assume we have been given the team data in the below format

const team = {
    name: 'Liberty',
    coach: 'David',
    players: ['Marge', 'Aiden', 'Hervert', 'Sherry']
}

// and we have a function like below where the last 2 arguments are to be filled-up with firstPlayer and secondPlayer from the team dataset.

const printTeam = (teamName, coach, firstPlayer, secondPlayer) => {
    console.log(`Team: ${teamName}`);
    console.log(`Coach: ${coach}`);
    console.log(firstPlayer, secondPlayer);
}

//Using spread operator, we are converting an array into individual arguments for function call. So, in this case, the spread operator will take the first 2 elements (i.e. exactly as many as required in the function definition)from the players array and pass it as the third and fourth argument to the printTeam function. So the ...is followed by the array I am trying to spread.

printTeam(team.name, team.coach, ...team.players);
//Will output the below.
// Team: Liberty
// Coach: David
// Marge Aiden

// The same implementation making the function with rest operator in its argument calls, so it takes as many arguments as passed in the third positional arugment of this function.
const printTeamRest = (teamName, coach, ...players) => {
    console.log(`Team: ${teamName}`);
    console.log(`Coach: ${coach}`);
    console.log(`Players: ${players.join(', ')}`);

}
printTeamRest(team.name, team.coach, ...team.players);