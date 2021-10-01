const useCreateReducer =
  () =>
  (initialState, handler) =>
  (state = initialState, action) =>
    Object.prototype.hasOwnProperty.call(handler, action.type)
      ? handler[action.type](state, action)
      : state;

export default useCreateReducer;
