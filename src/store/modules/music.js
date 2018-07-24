import spotify from '../../services/spotify'

const state = {
  itemsMusic: []
};

const mutations = {
  searchmusic (state, items) {
    state.itemsMusic = items
  }
};

const actions = {
  searchMusic: ({commit}, payload) => {
    const query = payload.data
    spotify.search(query, 'artist')
    .then(res => {
      commit('searchmusic', res.artists.items)
    })
    .catch(err => {

    })
  }
};
const getters = {
  getItemsMusic: (state) => {
    return state.itemsMusic
  }
}

export default {
  state,
  mutations,
  actions,
  getters 
};
