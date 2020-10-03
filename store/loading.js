export const state = () => ({
  isLoading: true, // ローディング
})

export const getters = {
  /**
   * ローディングの状態を返す
   *
   * @param {*} state
   * @return {*}
   */
  isLoading(state) {
    return state.isLoading
  },
}

export const mutations = {
  /**
   * ローディングの状態を変更する
   *
   * @param {*} state
   * @param {*} bool
   */
  changeLoading(state, bool) {
    state.isLoading = bool
  },
}
