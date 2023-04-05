import { useState, useEffect } from "react";
import {
  IInitialState,
  TCreateStoreResult,
  TPublicReducerList,
} from "./types.t";

export const useSelector = <T>(
  store: TCreateStoreResult,
  field?: string | number
): [T, TPublicReducerList] => {
  const hasObservedProperty = field && field in store.state.current;
  const [state, setState] = useState<T>(
    hasObservedProperty ? store.state.current[field] : store.state.current
  );
  useEffect(() => {
    const observedState = hasObservedProperty
      ? store.state.current[field]
      : store.state.current;
    const subCallback = (state: IInitialState) => {
      hasObservedProperty ? setState(state[field]) : setState(state as T);
    };
    const subConfig = (state: IInitialState) => {
      return hasObservedProperty ? state[field] : state;
    };
    const subID = store.sub(subCallback, subConfig);
    setState(observedState);
    return () => {
      store.unSub(subID);
    };
  }, []);
  return [state as T, store.reducers];
};
