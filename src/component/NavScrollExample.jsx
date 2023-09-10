
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react'
import Carditem from './Carditem';


function NavScrollExample() {
    const [data, setdata] = useState("")
    const [First, setFirst] = useState([])
    const fetchdata = async (value) => {
        const res = await fetch('https://api.punkapi.com/v2/beers?page=2&per_page=80');
        const data = await res.json();
        const fil = data.filter((user) => {
            return user && user.name && user.name.includes(value)
        })
        setFirst(fil)

    }
    const handlechange = (e) => {
        setdata(e.target.value)
        fetchdata(e.target.value)
    }
    const fstrender = async () => {
        const res = await fetch('https://api.punkapi.com/v2/beers?page=2&per_page=80');
        const data = await res.json();
        setFirst(data)
    }
    useEffect(() => {
        fstrender()
    }, [])
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand className='fw-bolder' href="#">TheGood</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-3 shadow-none"
                                aria-label="Search"
                                value={data}
                                onChange={handlechange}
                                autoCapitalize='words'

                            />
                            <Button variant="outline-success" >Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="container-fluid">
                <Carditem item={First} />
            </div>

        </>
    );
}

export default NavScrollExample;
