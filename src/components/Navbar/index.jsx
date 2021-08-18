import {Nav, Form, FormControl, Navbar, Button} from "react-bootstrap"
// import {Brand} from "react-bootstrap"
import VLfred from "../../../src/VLfred.jpg"
import { CartWidget } from "../CartWidget"



export const NavbarComponent = () =>{
    return (
    <div>
    <Navbar className="Nav" bg="string" expand="string">
        <Navbar><img src={VLfred} className="logovalfred" alt="valfred" /></Navbar>
        <Nav.Link href="#action1">Nosotros</Nav.Link>
                <Nav>Carrito</Nav>
        {/* <CartWidget /> */}
        <Form className="d-flex">
            <FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search"/>
            <Button variant="outline-success">Search</Button>
        </Form>
    </Navbar>
    </div>
            )
}
