//This is the file that will hold constants
data = {
  "cast": [
    "Fox",
    "Falco",
    "Marth",
    "Sheik",
  ],

  "moveset": [
    "nair": "first",
    "uair",
    "fair",
    "dair",
    "bair",

    "jab"
    "utilt",
    "ftilt",
    "dtilt",

    "usmash",
    "fsmash",
    "dsmash",

    "uthrow",
    "fthrow",
    "dthrow",

    "uspecial",
    "fspecial",
    "dspecial",

    "sidestep",
    "lroll",
    "rroll",
    "ltech",
    "rtech"
  ]

}



//generate json API now, then make a UI for updating it with webm links into moveset[i].webm-link
function generateCharacters() {
  var characters = []
  var cast = ["marth", "falco", "fox"];
  var moveset = ["fair", "dair", "uair"]

  for (i=0; i<cast.length; i++) {
    characters.push({
      "name": cast[i],
      "moveset": moveset,
    })
  }
  }
}
