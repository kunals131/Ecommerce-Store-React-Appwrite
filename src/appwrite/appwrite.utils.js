import { Appwrite } from "appwrite";

const sdk = new Appwrite();

sdk
    .setEndpoint('http://localhost/v1') // Your API Endpoint
    .setProject('615868ac3146f') // Your project ID
;

const user = {
    email : ''
}

export const loginUser  = (email,password) =>{
    return sdk.account.createSession(email,password);
}

export const logoutUser = () =>{
    return sdk.account.deleteSession('current')
}

export const currentSession = () =>{
    return sdk.account.get();
}

export const createUser = (name,email,password)=>{
    return sdk.account.create(email,password,name);
}



export {sdk};



