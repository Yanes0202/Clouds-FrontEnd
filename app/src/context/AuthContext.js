import React, {useContext, useState, useEffect} from "react";
import { useHistory } from "react-router-dom";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) =>{

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});
    const history = useHistory();

    useEffect(()=>{
        
    },[user,history])



    const checkLogin = ()=>{
        
    }
}

