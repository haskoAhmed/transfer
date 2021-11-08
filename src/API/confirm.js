import Sudan from "./Sudan";

export const onTermSubmit = async ({ mail,pass }) => {
  const response = await Sudan.post("/auth/login", {
    email: mail,
    password : pass
  }).then ((res) => {
    return {
      status : res.status
    }
  })
  return response;
};