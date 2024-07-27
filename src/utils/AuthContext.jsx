import { createContext,useState,useEffect, useContext } from "react";
import { account } from "../AppWriteConfig";
import { useNavigate } from "react-router-dom";
const AuthContext=createContext()

export const AuthProvider=({children}) =>{
    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState(null)
    const navigate=useNavigate()
    useEffect(()=>{
        getUserOnLoad();
    },[])

    const getUserOnLoad=async() =>{
       try{
        const accountDetails=await account.get()
        setUser(accountDetails)
       }catch(error){
        console.error(error)
       }
       setLoading(false) 
    }
    const handleUserLogin=async (e,credentials)=>{
        e.preventDefault()

        try{
            let response= await account.createEmailPasswordSession(credentials.email,credentials.password);
            console.log(response)
            let accountDetails= await account.get()
            setUser(accountDetails)
            navigate('/')
        }catch(error){
            console.error(error)
        }
    }

    const handleUserlogout=async ()=>{
        account.deleteSession('current')
        setUser(null)
    }
    const handleRegister = async (e, credentials) => {
        e.preventDefault();
        console.log("Handle Register triggered!", credentials);

        if (credentials.password1 !== credentials.password2) {
            alert("Passwords did not match!");
            return;
        }

        try {
            let response = await account.create(
                ID.unique(),
                credentials.email,
                credentials.password1,
                credentials.name
            );
            console.log("User registered!", response);

            await account.createEmailSession(
                credentials.email,
                credentials.password1
            );
            let accountDetails = await account.get();
            setUser(accountDetails);
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };
    const contextData={
        user,
        handleUserLogin,
        handleUserlogout,
        handleRegister
    }
    return <AuthContext.Provider value={contextData}>
        {loading ? <p>Loading...</p>: children}
    </AuthContext.Provider>
}

export const useAuth=()=>{return useContext(AuthContext)}
export default AuthContext