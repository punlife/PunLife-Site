function LoadCommentaryExperience(filepath, tableclass){
	$.getJSON(filepath, function(jsonData) {
		let dataset = [];
		let col = [];

		for (let i = 0; i < jsonData.length; i++) {
			for(let key in jsonData[i]){
				if(col.indexOf(key) === -1){
					col.push(key);
				}
			}  
		}

		for (let i = 0; i < jsonData.length; i++) {
			let row = [];
			for (let j = 0; j < col.length; j++) {
				row.push(jsonData[i][col[j]]) /* jsonData[0]["userId"]*/
			}
			dataset.push(row)
			
		}

		let table = new DataTable('#experience_table', {
			columns: [
				{ title: 'Name' },
				{ title: 'Date' },
				{ title: 'Type', orderable: false },
				{ title: 'Location' },
				{ title: 'Game' },
				{ title: 'Notes', orderable: false },
			],
			columnDefs: [
			{
				targets: [0,1,2,3,4,5],
				className: 'dt-center'
			}],
			data: dataset,
			lengthChange: false,
			pageLength: 25,
			order: [[1, 'dsc']]
		});

		document.querySelector(tableclass).appendChild(table);
	});
	
}


LoadCommentaryExperience('data/commentary_experience.json', '.experience_table');