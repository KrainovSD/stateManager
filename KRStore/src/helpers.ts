import { IInitialState, TClone } from "./types.t";

export const clone: TClone<IInitialState> = (o) =>
  JSON.parse(JSON.stringify(o));
export const isObject = (val: any) =>
  val != null && typeof val === "object" && Array.isArray(val) === false;
export const isEqual = (a: object, b: object) =>
  JSON.stringify(a) === JSON.stringify(b);
export const genID = () =>
  "x"
    .repeat(15)
    .replace(
      /./g,
      (c) =>
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[
          Math.floor(Math.random() * 62)
        ]
    );
