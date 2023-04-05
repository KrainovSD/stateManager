import {
  IInitialState,
  TCallBack,
  TConfig,
  TConfigReducer,
  TPublicReducerList,
} from "./types.t";
import SubScribe from "./SubScribe";
import { clone, genID, isObject } from "./helpers";

/* Класс хранилища */

class Store {
  #initialState: IInitialState;
  sub;
  #reducers: TPublicReducerList;

  constructor(initialState = {}) {
    if (!isObject(initialState))
      throw new Error("initial state must be a object");
    this.#initialState = clone(initialState);
    this.sub = new SubScribe();
  }

  get state() {
    return clone(this.#initialState);
  }
  get reducers() {
    return Object.assign({}, this.#reducers);
  }

  setState(callback: TConfigReducer, value?: any) {
    if (typeof callback !== "function")
      throw new Error("callback must be a function");
    const currentState = clone(this.#initialState);
    const computedNextState =
      typeof value !== "undefined"
        ? callback(clone(this.#initialState), value)
        : callback(clone(this.#initialState));
    const nextState = Object.assign(
      clone(currentState),
      clone(computedNextState)
    );
    this.sub.notify(currentState, nextState);
    this.#initialState = nextState;
  }

  subscribe(callback: TCallBack, config: TConfig): string {
    const id = genID();
    this.sub.subscribe(callback, config, id);
    return id;
  }
  unSubscribe(subID: string): void {
    this.sub.unSubscribe(subID);
  }

  registerReducer(field: string, callback: any) {
    this.#reducers = { ...this.#reducers, [field]: callback };
  }
}

export default Store;
