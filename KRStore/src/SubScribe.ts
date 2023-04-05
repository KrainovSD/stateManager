import { ICallbackList, TCallBack, TConfig } from "./types.t";
import { clone, isEqual, isObject } from "./helpers";

class SubScribe {
  #callbackList: ICallbackList[];
  constructor() {
    this.#callbackList = [];
  }
  notify(currentState: any, nextState: any) {
    if (!isObject(currentState))
      throw new Error("currentState must be a object");
    if (!isObject(nextState)) throw new Error("nextState must be a object");
    this.#callbackList.forEach((item) => {
      const currentValue = item.config(currentState);
      const nextValue = item.config(nextState);
      if (!isEqual(currentValue, nextValue)) item.callback(clone(nextState));
    });
  }
  subscribe(callback: TCallBack, config: TConfig, id: string): void {
    if (typeof callback !== "function")
      throw new Error("callback must be a function");
    if (typeof config !== "function")
      throw new Error("config must be a function");

    this.#callbackList = [...this.#callbackList, { callback, config, id }];
  }
  unSubscribe(subID: string): void {
    this.#callbackList = this.#callbackList.filter((item) => item.id !== subID);
  }
}

export default SubScribe;
