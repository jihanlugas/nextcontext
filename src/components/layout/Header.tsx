import { Fragment, useContext, useEffect } from "react"
import AuthContext from "../../stores/authContext"
import useAuth from "../../lib/useAuth"
import type { NextPage } from "next"

type Props = {

};


const Header: NextPage<Props> = ({ children }) => {
    const { notif } = useContext(AuthContext)
    const { auth, isLoading, error } = useAuth();

    console.log("header auth", auth)
    console.log("header isLoading", isLoading)
    console.log("header error", error)
    // console.log("user ", user)
    // console.log("login ", login)
    // console.log("logout ", logout)
    // console.log("authReady ", authReady)
    console.log("notif ", notif)

    useEffect(() => {
        setTimeout(() => {
            notif.error("tes")
        }, 1000);
    }, [])

    return (
        <header>
            <div className={"bg-green-500 h-16 flex items-center px-4 shadow-lg"}>
                <div>
                    App Logo
                </div>
                <div className={"hidden sm:flex ml-auto"}>
                    <div className={"ml-4"}>About</div>
                    {auth ? (
                        <Fragment>
                            <div className={"ml-4"}>{auth.email}</div>
                            <div className={"ml-4"}>Logout</div>
                        </Fragment>
                    ) : (
                        <div className={"ml-4"}>Login/Signup</div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header