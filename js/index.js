let request = new XMLHttpRequest();

request.open('GET', 'https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD');
request.onreadystatechange = function() {

	if((request.status==200) && (request.readyState==4)) {
		let jsonFile = request.responseText;
		jsonFile = JSON.parse(jsonFile);
		console.log(jsonFile.data);
		for(var i in jsonFile.data){
			var movieData = jsonFile.data[i];
			var output = "";
			if(movieData[10] === "Golden Gate Bridge") {
				output += movieData[8] + " ";
				output += movieData[9] + " ";
				output += movieData[12] + " ";
				output += "<br>"
			}
			// console.log(movieData);
			console.log(output);
			document.getElementById("result").innerHTML += output;
			output += "<br>";
		}
	}
}

request.send();


