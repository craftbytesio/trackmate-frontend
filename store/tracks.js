export const state = () => ({
  tracks: [],
})

export const mutations = {
  addTrack(state, track) {
    state.tracks.push(track)
  },

}

export const actions = {

}

export const getters = {
  getApples: (state) => {
    return state.fruits.filter((fruit) => fruit.type === 'Apple')
  },
}
