import CredentialsForm from "../components/CredentialsForm";
import "./AuthPage.css"
import { Card, Container, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';


export default function AuthPage(){
    return (<Container className="centered">
            <CredentialsForm type="Login"/>
        </Container>
        )
}