export const saveToken = (token) => {
  localStorage.setItem("token", token);
};

export const isAuth = !!localStorage.getItem("token");
