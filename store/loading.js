export const state = () => ({
  isLoading: true, // ローディング
})

export const getters = {
  /**
   * ローディングの状態を返す
   *
   * @param {Object} state
   * @return {Boolean}
   */
  isLoading(state) {
    return state.isLoading
  },
}

export const actions = {
  /**
   * ローディングの状態を変更するアクション
   *
   * @param {Function} commit
   * @param {Boolean} bool
   */
  changeLoading({ commit }, bool) {
    commit('changeLoading', bool)
  },
}

export const mutations = {
  /**
   * ローディングの状態を変更する
   *
   * @param {Object} state
   * @param {Boolean} bool
   */
  changeLoading(state, bool) {
    state.isLoading = bool
  },
}
