import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav_bar.css';
import { LogoutOutlined, UserOutlined, BugOutlined, AimOutlined, CalculatorOutlined, SearchOutlined,SelectOutlined, LineOutlined  } from '@ant-design/icons';
import logo from './Logo.png';
import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import { Form, Button, Input, Modal, Select, Divider, message } from 'antd';


const user = ["Kobe", "Jayson", "Kat", "Paul", "Eugene", "Herb", "Jerico"];
const randomuser = user[Math.floor(Math.random() * user.length)]
console.log(randomuser)


function Nav_bar({ myUser }) {
    const [showEdit, setshowEdit] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    console.log(`User: `, myUser)


    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };

    const show = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        messageApi.open({

            type: 'success',
            content: 'This is a prompt message for success, and it will disappear in 3 seconds',
            duration: 3,

        });
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
      <>
        {contextHolder}
        {myUser !== null ? (
          <Navbar
            collapseOnSelect
            expand="lg"
            className="bg-body"
            class="row "
            id="nav"
            fixed="top"
          >
            {" "}
            <Navbar.Brand>
              <img src={logo} width={150} height={50} />
            </Navbar.Brand>
            <div
              class="vr d-none d-lg-block "
              style={{ marginRight: "8px" }}
            ></div>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              style={{ margin: "0px 10px 0px 0px" }}
            />
            <Navbar.Collapse collapseOnSelect id="responsive-navbar-nav">
              {/* <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}> */}
              {/* <img
                      src={logo}
                      width={150}
                      height={50}
                      style={{ marginTop: "10px" }}
                    /> */}
              {/* </Offcanvas.Title>
                </Offcanvas.Header> */}
              <Nav>
                <Nav.Link href="#">
                  <div
                    class="hover-underline-animation"
                    style={{
                      color: "black",
                      textDecoration: "none",
                      fontSize: "1rem",
                    }}
                  >
                    {/*  <NavLink
                      to="/"
                      style={{
                        color: "black",
                        textDecoration: "none",
                        fontSize: "1rem",
                      }}
                    >
                      <BugOutlined /> Report a bug
                    </NavLink>*/}
                    ICS
                  </div>
                </Nav.Link>
                <Nav.Link href="#">
                  <div
                    class="hover-underline-animation "
                    style={{
                      color: "black",
                      textDecoration: "none",
                      fontSize: "1rem",
                    }}
                  >
                    {/* <NavLink
                      to="#"
                      style={{
                        color: "black",
                        textDecoration: "none",
                        fontSize: "1rem",
                      }}
                    >
                      <AimOutlined /> Fiber Optic{" "}
                    </NavLink> */}
                    SLP
                  </div>
                </Nav.Link>
                <Nav.Link href="#">
                  <div
                    class="hover-underline-animation "
                    style={{
                      color: "black",
                      textDecoration: "none",
                      fontSize: "1rem",
                    }}
                  >
                    {/* <NavLink
                      to="#"
                      style={{
                        color: "black",
                        textDecoration: "none",
                        fontSize: "1rem",
                      }}
                    >
                      <SelectOutlined /> Diffuse Reflection{" "}
                    </NavLink> */}
                    LASER CONTROLLED AREA
                  </div>
                </Nav.Link>
                <Nav.Link href="#">
                  <div
                    class="hover-underline-animation "
                    style={{
                      color: "black",
                      textDecoration: "none",
                      fontSize: "1rem",
                    }}
                  >
                    {/* <NavLink
                      to="#"
                      style={{
                        color: "black",
                        textDecoration: "none",
                        fontSize: "1rem",
                      }}
                    >
                      <SearchOutlined /> Lookup Table{" "}
                    </NavLink> */}
                    SHUTTER CONTROL
                  </div>
                </Nav.Link>
                <Nav.Link href="#">
                  <div
                    class="hover-underline-animation "
                    style={{
                      color: "black",
                      textDecoration: "none",
                      fontSize: "1rem",
                    }}
                  >
                    {/* <NavLink
                      to="#"
                      style={{
                        color: "black",
                        textDecoration: "none",
                        fontSize: "1rem",
                      }}
                    >
                      <SearchOutlined /> Lookup Table{" "}
                    </NavLink> */}
                    LOGS
                  </div>
                </Nav.Link>
                <Nav.Link href="#">
                  <div
                    class="hover-underline-animation "
                    style={{
                      color: "black",
                      textDecoration: "none",
                      fontSize: "1rem",
                    }}
                  >
                    {/* <NavLink
                      to="#"
                      style={{
                        color: "black",
                        textDecoration: "none",
                        fontSize: "1rem",
                      }}
                    >
                      <SearchOutlined /> Lookup Table{" "}
                    </NavLink> */}
                    SETTINGS
                  </div>
                </Nav.Link>
                <Nav.Link href="#">
                  <div
                    class="hover-underline-animation "
                    style={{
                      color: "black",
                      textDecoration: "none",
                      fontSize: "1rem",
                    }}
                  >
                    {/* <NavLink
                      to="#"
                      style={{
                        color: "black",
                        textDecoration: "none",
                        fontSize: "1rem",
                      }}
                    >
                      <SearchOutlined /> Lookup Table{" "}
                    </NavLink> */}
                    ABOUT
                  </div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        ) : null}
      </>
    );
}
export default Nav_bar;