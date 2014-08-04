var instantfamous = {};
(function(){
GDT.addPlatform({
	id:"bafaec15-7a6e-4e68-bf8c-7cdc8da9d4a4",
	name:"Ballista",
	company:"Ballista Elec Co",
	startAmount:0.999,
	unitsSold:9E10,
	licencePrize:9E4,
	published:"3/1/1",
	platformRetireDate:"100/12/4",
	developmentCosts:9E4,
	genreWeightings:[  1, 1, 1, 1, 1, 1 ],
	audienceWeightings:[  1, 1, 1 ],
	techLevel:7,
	iconUri:"./mods/instantfamous/images/platforms/Ballista.png",
	events:[{
	id: "342efc60-fdd4-4f7b-b6b6-99716acc8e40",
	date: "3/3/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Ballista Elec Co",
	text: "Know for advance military technologies, Ballista Elec Co publish their own super gaming console Ballista Gen ",
	image: "./mods/instantfamous/images/notifications/Ballista.png",
	buttonText: "OK",
	weeksUntilFired: 0
	});} 
	}
]
	});


UltimateLib.Achievements.add(UltimateLib.Achievements.create({
	id: "74a041aa-87ca-4d73-94d6-1a6e8caa7f3e",
	title: "Holy Shit",
	description: "Reach quadtrillion sale without publishing deal",
	tint: "#FFFFFF",
	value: 8,
	hidden: false,
	canEarnMultiple: false,
	isAchieved: function () {
							var res = true;
							res =   GameManager.company.cash >= 1000000000;

						return res;
				}
	}));
})();
