import {useState} from 'react';

export default function useUser() {
    const getUser = () => {
        const userString = localStorage.getItem('user');
        const user = JSON.parse(userString);
        console.log(`getuser: ${userString}`)
        return user
    }
    const [user, setUser] = useState(()=>getUser());
    const saveUser = user => {
        console.log(`setuser: ${user?.toString()}`)
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
    };

    return {
        "setUser": saveUser,
        user
    }
}