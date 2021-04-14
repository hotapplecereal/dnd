document.getElementById("raceSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("raceInput").value;

  const url = "http://www.dnd5eapi.co/api/races/" + value;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let output = "";
      if (value === "") {
        output += "<p>List of Races: ";
        for (let i=0; i < json.results.length; i++) {
        	output += json.results[i].name;
        	if (i !== json.results.length - 1)
    	    output += ", ";
        }
        output += "</p>"
      }
      else {
        output += "<h2>" + json.name + "</h2>"
        output += "<p>" + json.alignment + "</p>"
        output += "<p>Languages: " + json.language_desc + "</p>"
        output += "<p>Size: " + json.size + ". " + json.size_description + "</p>"
        output += "<p>Traits: ";
        for (let i=0; i < json.traits.length; i++) {
        	output += json.traits[i].name;
        	if (i !== json.traits.length - 1)
    	    output += ", ";
        }
      }
      document.getElementById("searchResults").innerHTML = output;
    });
});

document.getElementById("classSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("classInput").value;

  const url = "http://www.dnd5eapi.co/api/classes/" + value;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let output = "";

      if (value === "") {
        output += "<p>List of Classes: ";
        for (let i=0; i < json.results.length; i++) {
          output += json.results[i].name;
          if (i !== json.results.length - 1)
          output += ", ";
        }
        output += "</p>"
      }
      else {
        output += "<h2>" + json.name + "</h2>"
        output += "<p>Hit-Die: " + json.hit_die + "</p>"
        output += "<p>Subclasses: ";
        for (let i=0; i < json.subclasses.length; i++) {
          output += json.subclasses[i].name;
          if (i !== json.subclasses.length - 1)
          output += ", ";
        }
        output += "<p>Proficiencies: ";
        for (let i=0; i < json.proficiencies.length; i++) {
          output += json.proficiencies[i].name;
          if (i !== json.proficiencies.length - 1)
          output += ", ";
        }
        output += "<p>Starting Equipment: ";
        for (let i=0; i < json.starting_equipment.length; i++) {
          output += json.starting_equipment[i].equipment.name + ", " + json.starting_equipment[i].quantity;
          if (i !== json.starting_equipment.length - 1)
          output += ". ";
        }
      }
      document.getElementById("searchResults").innerHTML = output;
    });
});

document.getElementById("equipmentSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("equipmentInput").value;

  const url = "http://www.dnd5eapi.co/api/equipment/" + value;

  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let output = "";

      if (value === "") {
        output += "<p>List of Equipment: ";
        for (let i=0; i < json.results.length; i++) {
          output += json.results[i].name;
          if (i !== json.results.length - 1)
          output += ", ";
        }
        output += "</p>"
      }
      else {
        output += "<h2>" + json.name + "</h2>"
        output += "<p>Cost: " + json.cost.quantity + " " + json.cost.unit + "</p>"
        output += "<p>Weight: " + json.weight + " lbs</p>"
        output += "<p>Equipment-category: " + json.equipment_category.name + "</p>"
        output += "<p>Gear-category: " + json.gear_category.name + "</p>"
      }

      document.getElementById("searchResults").innerHTML = output;
    });
});
