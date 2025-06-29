import { useEffect, useState } from "react";
import userDetails from "../data/user.json"

const useCredential = () => {
    const id = localStorage.getItem("uid");
    const [user, setUser] = useState({});

    const userData = () => {
        const fetchData = async () => {
            try {
                const tempUser = userDetails.find(user => user._id === id) || {};
                setUser(tempUser);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }

    //Persist user Login
    useEffect(() => {
        if (id) {
            userData();
        }
        else {
            setUser({});
        }
    }, []);

    const logOut = () => {
        localStorage.removeItem("uId");
        setUser({});
    }

    return { user, setUser, logOut }
} 

export default useCredential; 