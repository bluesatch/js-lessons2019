var challengeData = [
    'Sianna','Fantini','sfantini0@jalbum.net','Female','17.187.75.7',
    'Ami','Siggin','Female','92.136.232.25',
    'Kandy','Bernardoni','kbernardoni2@infoseek.co.jp','Female','108.122.66.8',
    'Gus','Oswal','goswal3@ucoz.ru','Female','101.216.78.8',
    'Laurie','Upward','lupward4@issuu.com','92.123.107.',
    'Melitta','Vallery','mvallery5@nydailynews.com','Female','255.228.200.8',
    'Francesco','Danielczyk','Male','253.12.207.4',
    'Tedmund','Misken','216.241.133.',
    'Koralle','Griffithe','kgriffithe8@simplemachines.org','108.21.21.11',
    'Major','Yewman','myewman9@prnewswire.com','Male','142.167.101.22',
    'Dell','Hutcheon','dhutcheona@forbes.com','Male','97.208.109.17',
    'Halley','Doward','Female','58.97.154.14',
    'Kati','Yakushkev','kyakushkevc@washington.edu','34.166.161.14',
    'Sargent','Hulatt','shulattd@w3.org','Male',
    'Aleta','Tenny','Female','224.48.225.77' 
];
let people = [];

for(let i = 0; i < challengeData.length; i++) {
    people.push({
        fName: challengeData[i],
        lNAme: challengeData[i + 1],
        email: challengeData[i + 2],
        gender: challengeData[i + 3],
        ipAddress: challengeData[i + 4]
    });
    i+= 4;
}

console.log(people);