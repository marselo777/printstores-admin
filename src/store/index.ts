import { combineEpics, createEpicMiddleware, Epic, EpicMiddleware, ofType } from "redux-observable";
import { combineReducers, configureStore, createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import "rxjs";
import { mergeMap, map } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

const initialState = {
  auth: false,
};
export const loginAction = createAction("login")();

const loginSlice = createSlice({
  name: "login/slice",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      console.log(state, "state");
    },
    loginSuccess: (state, action) => {
      console.log(state, action);
      state.auth = action.payload;
    },
  },
});

export const { login, loginSuccess } = loginSlice.actions;

const rootReducer = combineReducers({
  login: loginSlice.reducer,
});

const response = true;

const loginEpic: Epic<ActionIn, any, any, ActionOut> = (action$) =>
  action$.pipe(
    ofType(loginAction.type),
    mergeMap((action) => ajax.getJSON("").pipe(map((asdas) => ({ type: loginSuccess.type, payload: response }))))
  );

const epicMiddleware: EpicMiddleware<any> = createEpicMiddleware();
const rootEpic = combineEpics(loginEpic);

interface ActionIn {
  type: typeof login.type;
  payload: any;
}
interface ActionOut {
  type: typeof loginSuccess.type;
  payload: boolean;
}

export const store = configureStore({
  middleware: [epicMiddleware],
  devTools: true,
  reducer: rootReducer,
});
epicMiddleware.run(rootEpic);
