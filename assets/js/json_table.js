function LoadCommentaryExperience(filepath, tableclass){
	$.getJSON(filepath, function(jsonData) {
		let col = [];

		for (let i = 0; i < jsonData.length; i++) {
			for(let key in jsonData[i]){
				if(col.indexOf(key) === -1){
					col.push(key);
				}
			}  
		}

		const table = document.createElement("table");
		const thead = table.createTHead();
		const tbody = table.createTBody();

		table.setAttribute("id", "json-table");
		
		let tr = thead.insertRow(-1);

		for (let index = 0; index < col.length; index++) {
			let th = document.createElement("th");
			th.innerHTML = col[index];
			tr.appendChild(th)
		}


		for (let i = 0; i < jsonData.length; i++) {
			tr = tbody.insertRow(-1);

			for (let j = 0; j < col.length; j++) {
				let tabCell = tr.insertCell(-1);
				tabCell.innerHTML = jsonData[i][col[j]] /* jsonData[0]["userId"]*/
			}
			
		}
		document.querySelector(tableclass).appendChild(table);
	});
	
}

function CheckIfColumnShouldBeVisible(){
	
}

LoadCommentaryExperience('data/tekken8_commentary_experience.json', '.tekken_eight_table');
LoadCommentaryExperience('data/tekken7_commentary_experience.json', '.tekken_seven_table');
LoadCommentaryExperience('data/others_commentary_experience.json', '.other_game_table');