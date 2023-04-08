var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

//console.log(library.playlists);

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

console.log("\n\n\n ****************** \n\n PRINT PLAYLISTS\n\n")

var printPlaylists = function () {

  for (item in library.playlists) {
    id = library.playlists[item].id;
    name = library.playlists[item].name;
    tracks = library.playlists[item].tracks.length;
    console.log(id + ": by " + name + " - " + tracks + " tracks.")
  }


}

printPlaylists();

console.log("\n\n\n ****************** \n\n PRINT TRACKS\n\n")

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {

  for (item in library.tracks) {
    trackNum = library.tracks[item].id;
    name = library.tracks[item].name;
    artist = library.tracks[item].artist;
    album = library.tracks[item].album;
    console.log(trackNum + ": " + name + " by " + artist + " (" + album + ")")
  }



}

printTracks();

console.log("\n\n\n ****************** \n\n LIST OF TRACKS PLAYLIST\n\n")

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {


  playListId = library.playlists[playlistId];
  playListName = library.playlists[playlistId].name;
  playListLength = library.playlists[playlistId].tracks.length;
  console.log(playlistId + ": " + playListName + " - " + playListLength + " tracks.");

  for (track in library.playlists[playlistId].tracks) {

    
    
    trackId = library.playlists[playlistId].tracks[track];

    trackName = library.tracks[trackId].name;
    trackArtist = library.tracks[trackId].artist;
    trackAlbum = library.tracks[trackId].album;

    
    
    console.log(trackId + ": " + trackName + " by " + trackArtist + " (" + trackAlbum + ")");


  }



}

printPlaylist("p01")

console.log("\n\n\n ****************** \n\n ADD TRACK PLAYLIST\n\n")

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {


    library.playlists[playlistId].tracks.push(trackId);
    console.log(library.playlists[playlistId].tracks)



}

addTrackToPlaylist("t03","p01")


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {

  library.tracks[uid()] = {name: name, artist: artist, album: album};
  console.log(library.tracks);

}

console.log("\n\n\n ****************** \n\n ADD TRACK\n\n")

addTrack("How Deep Is Your Love", "Bee Gees", "Greatest")

// adds a playlist to the library

var addPlaylist = function (name) {
  uid = uid();
  library.playlists[uid] = {id: uid, name: name, tracks: ""};
  console.log(library.playlists);

}

console.log("\n\n\n ****************** \n\n ADD PLAYLIST\n\n")

addPlaylist("FAANGtastic", "")

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}
console.log("\n\n\n ****************** ")