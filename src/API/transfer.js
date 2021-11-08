import Sudan from "./Sudan";



export const onTermSubmit = async ({fullName,email,password,phoneNum})=> {
    const response = await Sudan.post("/users/bienificairy" ,{
        fullName : fullName,
        email : email,
        password :password,
        phoneNumber : phoneNum,
        roleId : 1,
        userId : 2

    })
    .then((res) => {
        return {
            status : res.status,
            data : res.data
        }
    })
    return response;
    
}
