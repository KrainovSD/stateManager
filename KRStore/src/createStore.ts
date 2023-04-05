import Store from "./Store";
import { IInitialState, TCreateStore, TPublicReducer } from "./types.t";

export const createStore: TCreateStore = (config) => {
  const store = new Store(config.initialState);

  let state = {
    current: store.state,
  };
  const updateStateConfig = (storeState: IInitialState) => {
    return storeState;
  };
  const updateStateCallback = (storeState: IInitialState) => {
    state.current = storeState;
  };
  store.subscribe(updateStateCallback, updateStateConfig);

  for (const reducerName in config.reducers) {
    const countArguments = config.reducers[reducerName].length;
    if (countArguments === 1) {
      const publicReducerCallback: TPublicReducer = () => {
        store.setState(config.reducers[reducerName]);
      };
      store.registerReducer(reducerName, publicReducerCallback);
    } else if (countArguments === 2) {
      const publicReducerCallback: TPublicReducer = (value) => {
        store.setState(config.reducers[reducerName], value);
      };
      store.registerReducer(reducerName, publicReducerCallback);
    }
  }
  const reducers = store.reducers;

  return {
    sub: store.subscribe.bind(store),
    unSub: store.unSubscribe.bind(store),
    reducers,
    state,
  };
};
