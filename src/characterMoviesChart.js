width = 500;

node_list = [];
links_list = [];
// function fetchDataFromGit(){
  //   fetch("https://raw.githubusercontent.com/parinithshekar/mcu-data-parser/main/data/ScreenTimeIntermediate.json").then(response => {
    //       return response.json();
//     }).then(jsonData => {
//       // Work with JSON data here
//       console.log("data******");
//       for (var i=0; i < jsonData.length; i++) {
//           dict1 = {id:jsonData[i]["character"], value:jsonData[i]["character"]};
//           dict2 = {id:jsonData[i]["movie"], value:jsonData[i]["movie"]};
//           node_list.push(dict1, dict2);
//           valueForLinksList = parseFloat(jsonData[i]["screentime"].replace(":","."))
//           links_list.push({source:jsonData[i]["character"], target:jsonData[i]["movie"], value: valueForLinksList})
//               // console.log(jsonData[i]["screentime"]);
//           }
//       console.log(links_list)
//       return links_list
//     }).catch(err => {
//       // Do something for an error here
//       console.log(err);
//     });
// }

jsonData = JSON.parse('[{"movie":"Iron Man","character":"Tony Stark / Iron Man","screentime":"77:15"},{"movie":"The Incredible Hulk","character":"Tony Stark / Iron Man","screentime":":30"},{"movie":"Iron Man 2","character":"Tony Stark / Iron Man","screentime":"61:15"},{"movie":"Thor2","character":"Thor","screentime":"43:15"},{"movie":"Marvel One-Shot: The Consultant","character":"Tony Stark / Iron Man","screentime":":30"},{"movie":"The Avengers","character":"Tony Stark / Iron Man","screentime":"31:45"},{"movie":"The Avengers","character":"Thor","screentime":"18"},{"movie":"The Avengers","character":"Thanos","screentime":":15"},{"movie":"Iron Man Three","character":"Tony Stark / Iron Man","screentime":"62:15"},{"movie":"Thor: The Dark World","character":"Thor","screentime":"35"},{"movie":"Guardians of the Galaxy","character":"Thanos","screentime":"1"},{"movie":"Avengers: Age of Ultron","character":"Tony Stark / Iron Man","screentime":"27:15"},{"movie":"Avengers: Age of Ultron","character":"Thor","screentime":"13:15"},{"movie":"Avengers: Age of Ultron","character":"Thanos","screentime":":15"},{"movie":"WHIH News Front","character":"Tony Stark / Iron Man","screentime":":30"},{"movie":"Captain America: Civil War","character":"Tony Stark / Iron Man","screentime":"37:15"},{"movie":"Doctor Strange","character":"Thor","screentime":":45"},{"movie":"Spider-Man: Homecoming","character":"Tony Stark / Iron Man","screentime":"8"},{"movie":"Thor: Ragnarok","character":"Thor","screentime":"58:45"},{"movie":"Avengers: Infinity War","character":"Thanos","screentime":"31"},{"movie":"Avengers: Infinity War","character":"Tony Stark / Iron Man","screentime":"17"},{"movie":"Avengers: Infinity War","character":"Thor","screentime":"15:15"},{"movie":"Avengers: Endgame","character":"Tony Stark / Iron Man","screentime":"34:45"},{"movie":"Avengers: Endgame","character":"Thor","screentime":"21:15"},{"movie":"Avengers: Endgame","character":"Thanos","screentime":"12:15"},{"movie":"Spider-Man: Far from Home","character":"Tony Stark / Iron Man","screentime":":30"},{"movie":"Marvel Studios: Legends","character":"Tony Stark / Iron Man","screentime":"8"},{"movie":"Marvel Studios: Legends","character":"Thanos","screentime":"2:45"},{"movie":"Loki","character":"Thor","screentime":"1:30"},{"movie":"Loki","character":"Tony Stark / Iron Man","screentime":"1"},{"movie":"Loki","character":"Thanos","screentime":":15"},{"movie":"What If...?","character":"Tony Stark / Iron Man","screentime":"9:30"},{"movie":"What If...?","character":"Thanos","screentime":"3:15"}]')

for (var i=0; i < jsonData.length; i++) {
    dict1 = {id:jsonData[i]["character"], value:jsonData[i]["character"]};
    dict2 = {id:jsonData[i]["movie"], value:jsonData[i]["movie"]};
    node_list.push(dict1, dict2);
    valueForLinksList = parseFloat(jsonData[i]["screentime"].replace(":","."))
    links_list.push({source:jsonData[i]["character"], target:jsonData[i]["movie"], value: valueForLinksList})
}


  charactersAndMoviesCrownChart = SankeyChart(
      {links:links_list},
      {
          nodeGroup: d => d.id.split(/\W/)[0],
          nodeAlign: "justify",
          linkColor: "source-target",
          format: (f => d => '${f(d)} TWh')(d3.format(",.1~f")),
          width,
          height: 600
      });

  document.getElementById('characters-movies-crown').appendChild(charactersAndMoviesCrownChart);
