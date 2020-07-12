import { call, put } from "redux-saga/effects";
import { FetchConfigAction } from "../config/types";

export function* fetchConfigWorker(action: FetchConfigAction) {
  try {
    // yield call();
    // yield put();
  } catch (e) {
    console.log(e);
  }
}
