
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
  import Home from './Home/Home';
  import Shop from './Shop/Shop';
  import Magazine from './Magazine/Magazine';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap/dist/js/bootstrap.min.js';

class App extends React.Component{

    render(){
        return(
            <div class="container">
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/Shop">Shop</Nav.Link>
                                    <Nav.Link href="/Magazine">Magazine</Nav.Link>
                                   
                                    </Nav>
                                <form class="form-inline my-1">
                                  <div class="md-form form-sm my-0">
                            <input class="form-control form-control-sm mr-sm-2 mb-0" type="text" placeholder="Search"
                              aria-label="Search" />
                          </div>              
                        </form>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route path="/Shop">
                                    <Shop />
                                </Route>
                                <Route path="/Magazine">
                                    <Magazine />
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
          
        )  
    }
}

export default App;
