// const BASE_URL = "http://localhost:5000/api";
const BASE_URL = "/api";
const USERS_URL = "/users";
const LOGIN_URL = "/login";

const REGISTER = `${BASE_URL}${USERS_URL}`;
const LOGIN = `${BASE_URL}${USERS_URL}${LOGIN_URL}`;

export { REGISTER, LOGIN };
