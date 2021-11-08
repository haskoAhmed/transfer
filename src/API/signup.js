import Sudan from "./Sudan";

export const onTermSubmit = async ({ fullName, email, password, phoneNum }) => {
  const response = await Sudan.post("/auth/register", {
    fullName: fullName,
    email: email,
    password: password,
    phoneNumber: phoneNum,
    roleId: 1,
  }).then((res) => {
    return {
      status: res.status,
      data: res.data,
    };
  });

  return response;
};
