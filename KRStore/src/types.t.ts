/* Вспомогательные функции */
export type TClone<T> = (o: T) => T;

/* Класс подписок на уведомления*/
export interface ICallbackList {
  callback: TCallBack;
  config: TConfig;
  id: string;
}
export type TCallBack = (state: IInitialState) => void;
export type TConfig = (state: IInitialState) => IInitialState;
export type TSubscribe = (callback: TCallBack, config: TConfig) => string;
export type TUnSubscribe = (subID: string) => void;

/* Класс хранилища */
export interface IInitialState {
  [key: string | number]: any;
}
export type TPublicReducer = (v?: any) => void;
export type TPublicReducerList = {
  [K: string]: TPublicReducer;
};

/* Создание экземпляра класса */
export type TCreateStore = (config: TCreateStoreConfig) => TCreateStoreResult;
export type TCreateStoreConfig = {
  initialState: IInitialState;
  reducers: TConfigReducers;
};
export type TConfigReducers = {
  [K: string]: TConfigReducer;
};
export type TConfigReducer = (
  state: IInitialState,
  payload?: any
) => IInitialState;

export type TCreateStoreResult = {
  sub: TSubscribe;
  unSub: TUnSubscribe;
  state: IStoreState;
  reducers: TPublicReducerList;
};
export interface IStoreState {
  current: {
    [K: number | string]: any;
  };
}
