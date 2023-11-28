// const BASE_URL = "http://localhost:5000/api";
const BASE_URL = "/api";
const USERS_URL = "/users";
const LOGIN_URL = "/login";
const GOALS_URL = "/goals";

const REGISTER = `${BASE_URL}${USERS_URL}`;
const LOGIN = `${BASE_URL}${USERS_URL}${LOGIN_URL}`;
const GOALS = `${BASE_URL}${GOALS_URL}`;
// const GOAL = `${BASE_URL}${GOALS_URL}/:goalId`;

export { REGISTER, LOGIN, GOALS /* GOAL */ };
