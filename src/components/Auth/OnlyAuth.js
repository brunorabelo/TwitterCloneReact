import React from "react";
import {useAuthStore} from "../../store/AuthStore";


export default function OnlyAuth({children, noAuth}){
    const [auth] = useAuthStore()

    if (!auth.user) {
        return noAuth || <></>
    }

    return children
}