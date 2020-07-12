import { takeLatest } from "redux-saga/effects";
import { FETCH_CONFIG } from "./config/actions";
import { fetchConfigWorker } from "./sagas/fetchConfigWorker";

export function* sagaWatcher() {
  yield takeLatest(FETCH_CONFIG, fetchConfigWorker);
}
