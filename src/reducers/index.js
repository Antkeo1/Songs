import { combineReducers } from 'redux'

//songlist
const songsReducer = () => {
  return [
    { title: 'Changes', duration: '4:30'},
    { title: 'Juicy', duration: '3:00'},
    { title:'Crossroads', duration: '3:30' },
    { title: 'Missing You', duration:'4:00'}
  ]
}

// selected song
const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED') {
    return action.payload
  }
  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectSong: selectedSongReducer
})
