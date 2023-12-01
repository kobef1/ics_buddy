import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav_bar from './Components/navbar';
import ICS from './Pages/ics_buddy';
import { Form, Button, Input, Modal, Select, Divider, message, Row, Col, Card, Typography } from "antd";
import { Content, Header } from 'antd/es/layout/layout';
import { useEffect } from 'react';

function App() {
  return (

    <>
      <div>
        <Nav_bar />
      </div>

      <Content style={{ marginTop: "100px" }}>
        <ICS />
      </Content>
    </>
  );
}

export default App;
