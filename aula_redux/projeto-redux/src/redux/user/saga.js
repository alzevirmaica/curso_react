import {
  all,
  takeEvery,
  call,
  put,
  delay,
  takeLatest,
} from "redux-saga/effects";
import { fetchUsersFailure, fetchUsersSuccess } from "./slice";

import axios from "axios";
//API users: https://jsonplaceholder.typicode.com/users

function* fetchUsers() {
  try {
    yield delay(2000); //Só para simular lentidão na api.
    const response = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/users"
    );
    yield put(fetchUsersSuccess(response.data));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

export default all([takeLatest("user/fetchUsers", fetchUsers)]);
