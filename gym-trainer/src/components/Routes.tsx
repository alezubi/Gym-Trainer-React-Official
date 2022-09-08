
import {Routes as DOMRoutes, Route} from "react-router-dom"
import ExercisePage from "../pages/ExercisePage"
import AuthPage from "../pages/AuthPage"
import HomePage from "../pages/HomePage"
import { useContext } from "react"
import { AppUserContext } from "../context/AppUserProvider"
import CredentialsForm from "./CredentialsForm"
import SignUpPart2 from "./profiles/SignUpPart2"
import SignUpPart1 from "./profiles/users/SignUpPart1"

export default function Routes(){

    const appUser = useContext(AppUserContext);

    return <DOMRoutes>
    <Route path="/" element={
        <>
        { appUser && <HomePage />}
        {!appUser && <AuthPage />}
      </>
    }/>
    <Route path="/exercises" element={<ExercisePage />}/>
    <Route path="/login" element={<CredentialsForm type={"Login"}/>}/>
    <Route path="/register" element={<SignUpPart1/>}/>
  </DOMRoutes>
}