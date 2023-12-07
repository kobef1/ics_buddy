import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav_bar.css';
import logo from './Logo.png';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {message } from 'antd';


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
              <Nav>
                <Nav.Link href="#">
                  <div
                    class="hover-underline-animation"
                    style={{
                      color: "#3a4e84",
                      textDecoration: "none",
                      fontSize: "1.5rem",
                    }}
                  >
                    <NavLink
                      to="/"
                      style={({ isActive }) => {
                        return isActive
                          ? { color: "black",borderBottom: "2px solid black", textDecoration:"none" }
                          : {
                              color: "black",
                              textDecoration: "none",
                            };
                      }}
                    >
                      {" "}
                      ICS
                    </NavLink>
                  </div>
                </Nav.Link>
                <Nav.Link href="#">
                  <div
                    class="hover-underline-animation "
                    style={{
                      color: "#3a4e84",
                      fontSize: "1.5rem",
                    }}
                  >
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