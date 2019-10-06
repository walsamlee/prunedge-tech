import { all, put, takeLatest } from 'redux-saga/effects';

function* getUsersAsync() {
  const json = yield fetch('http://www.mocky.io/v2/5d98f199340000f80af48ae0')
    .then(res => res.json(), );
  yield put({
    type: 'RETURN_USER',
    json: json.users[0],
  });
}

function* getUsersWatcher() {
  yield takeLatest('GET_USER', getUsersAsync);
}

export default function* rootSaga() {
  yield all([
    getUsersWatcher(),
  ]);
}
