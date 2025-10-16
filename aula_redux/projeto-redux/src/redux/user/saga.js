import { all, takeEvery } from "redux-saga/effects";

function* fetchUsers() {
  console.log("chamou dentro do saga");
}

export default all([takeEvery("user/fetchUsers", fetchUsers)]);
