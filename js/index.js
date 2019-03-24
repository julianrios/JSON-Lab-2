let request = new XMLHttpRequest();

request.open('GET', 'https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD');

request.onreadystatechange = function() {
	let jsonFile = request.responseText;

	if((request.status==200) && (request.readyState==4)) {
		jsonFile = JSON.parse(jsonFile);
		// for(var i in jsonFile.data) {
		for(let i =0 ; i < jsonFile.data.length; i++) {
			let movieData = jsonFile.data[i];
			let output = "";

			if(movieData[10] === "Golden Gate Bridge") {
				output += movieData[8] + "<br>"; //"&nbsp&nbsp&nbsp" + " | &nbsp&nbsp&nbsp";
				output += movieData[9] +  "<br>"; //"" + " | &nbsp&nbsp&nbsp";
				output += movieData[12] + "<br>"; //"&nbsp&nbsp&nbsp";
				output += "<br>";
			}
			// console.log(movieData);
			// console.log(output);
			document.getElementById("result").innerHTML += output;
			output += "<br>";
		}
	}
}

request.send();


