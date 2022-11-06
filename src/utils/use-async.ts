import { useState } from "react";

/*
 * @Description:
 * @file name: File name
 * @version:
 * @Author: Joe
 * @Date: 2022-10-24 21:52:03
 * @LastEditors: Joe
 * @LastEditTime: 2022-11-06 20:57:56
 */
interface State<D> {
  error: Error | null;
  data: D | null;
  stat: "idle" | "loading" | "error" | "success";
}
const defaultInitalState: State<null> = {
  stat: "idle",
  data: null,
  error: null,
};
const defaultConfig = {
  throwError: false,
};
export const useAsync = <D>(
  initialState?: State<D>,
  initConfig?: typeof defaultConfig
) => {
  const [state, setState] = useState<State<D>>({
    ...defaultInitalState,
    ...initialState,
  });
  const throwError = { ...defaultConfig, ...initConfig }.throwError;
  const setData = (data: D) => {
    setState({
      data,
      stat: "success",
      error: null,
    });
  };
  const setError = (error: Error) => {
    setState({
      error,
      stat: "error",
      data: null,
    });
  };
  const run = (promise: Promise<D>) => {
    if (!promise || !promise.then) {
      throw new Error("please give a Promise");
    }
    setState({
      ...state,
      stat: "loading",
    });
    return promise
      .then((data) => {
        setData(data);
        return data;
      })
      .catch((error) => {
        setError(error);
        if (throwError) return Promise.reject(error);
        return error;
      });
  };
  return {
    isIdle: state.stat === "idle",
    isLoading: state.stat === "loading",
    isError: state.stat === "error",
    isSuccess: state.stat === "success",
    run,
    setData,
    setError,
    ...state,
  };
};
