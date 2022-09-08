import { AccountCircle, FitnessCenter, Key } from "@mui/icons-material";
import { Box, Button, ButtonGroup, Card, Container, InputAdornment, Link, TextField } from "@mui/material";
import {useContext, useState} from "react"
import { AppUser, AppUserUpdateContext } from "../context/AppUserProvider";
import AuthP from "../pages/AuthPage"

interface CredentialsFormProps{
    type: CredentialFormType;
}

type CredentialFormType = "Login" | "Register"

export default function CredentialsForm({type}: CredentialsFormProps){
        // State
        //      the state of a component is a self contained representation of its
        //      its currently held values
        //  these are not state variable
        //      let username: string;
        //      let password: string;

        //  when state variables are properly changed in react, they trigger reconcilliation
        //  state management in function components are managed through Hooks
        //      they almost always follow the format    useNameOfHook -> useState()

        //      const [username, setUsername] = useState("")
        //      useState returns an array of two elements
        //      [stateVariable, functionToUpdateTheState]
        //      useState gets passed an argument of the initial value

        const setAppUser = useContext(AppUserUpdateContext);
        const [username, setUsername] = useState<string>("")
        const [password, setPassword] = useState<string>("")



        function submit(){
            const user: AppUser = {
                username: username,
                password: password
            }
            // TODO: call the API to log them in -> return a token
            //      lift the state of appUser back up to our App component
            // if(setAppUser) setAppUser(user);
            setAppUser!(user); // equivalent to the above
        }
        

   return <>
        <Container className="my-5 py-5 centered"  >

<Card style={{width : "25rem", height: "17.5rem"}}>

<h1 className="centered black mt-2">  <FitnessCenter fontSize="large"/> </h1>

<Box className="mt-3 px-3">
<TextField

id="input-with-icon-textfield"
InputProps={{
startAdornment: (
<InputAdornment position="start">
<AccountCircle />
</InputAdornment>
 ),
}}
required
label = "email"
variant="outlined"
fullWidth
autoComplete="email"
type="text" 
placeholder="email" 
autoFocus
value={username} 
onChange={(e) => setUsername(e.target.value)}
/>
</Box>
<Box className="mt-3 px-3">
<TextField

  id="input-with-icon-textfield"
InputProps={{
startAdornment: (
<InputAdornment position="start">
<Key/>
</InputAdornment>
 ),
}}
 required
 label = "password"
 variant="outlined"
 fullWidth
 autoComplete="password"
 type="password" 
 placeholder="password" 
 autoFocus
value={password} 
onChange={(e) => setPassword(e.target.value)}
/>
</Box>


<ButtonGroup className="d-flex justify-content-center my-3 mx-3" >

<Button 

variant="contained"
color='primary' 
onClick={submit}>
    
 {type = "Login"}

</Button>

<Button 


color='secondary' 
variant="contained" 
onClick={submit} 
href="/register">
    
{type = "Register"}  


</Button>

</ButtonGroup>

</Card>

</Container>
   </>
}