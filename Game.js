class Game {
	constructor(){}

	getState(){
		var gameStateRef  = database.ref('gameState');
		gameStateRef.on("value",function(data){
		   gameState = data.val();
		})

	}

	update(state){
		database.ref('/').update({
		  gameState: state
		});
	}

	start(){
		if(gameState === 0){
		  player = new Player();
		  player.getCount();
		  form = new Form()
		  form.display();
		}
	}
	play()
	{
		form.hide();
		text("Game Starting...", 0, 0);

		Player.getPlayerInfo();
		if (allPlayers !== undefined)
		{
			var displayPosition = 120;



		for (var plr in allPlayers)
			{
				displayPosition += 20;

				text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 120, displayPosition)

			}			

			

		}

		if (keyDown (UP_ARROW) && playerIndex !== null)
		{
			player.update();


		}


	}
	asnyc start()
	{
		if (gameState === 0)
		{
			player = new Player();
			var playerCountRef = await database.ref('playerCount').once("value");

			if(playerCountRef.exists())
			{
				playerCount = playerCountRef.val();
				player.getCount();

			}
			form = new Form();
			form.display();
		}





	}
}
