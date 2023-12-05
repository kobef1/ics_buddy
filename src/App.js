import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav_bar from './Components/navbar';
import ICS from './Pages/ics_buddy';
import { Form, Button, Input, Modal, Select, Divider, message, Row, Col, Card, Typography } from "antd";
import { Content, Header } from 'antd/es/layout/layout';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [myData, setMyData] = useState({})
  const [fetching, setFetching] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      if (fetching) {
        return
      }
      try {
        setFetching(true)
        axios({ method: 'get', url: 'http://localhost:8000/fetch' }).then((response) => {
          setMyData(response.data)
          console.log(response.data)
        })
      } catch (error) {
        console.error(`Error fetching data: `, error)
      } finally {
        setFetching(false)
      }
    }

    const intervalId = setInterval(() => {
      fetchData()
    }, 200)

    return () => clearInterval(intervalId)

  }, [myData])
  return (
    <>
      <div>
        <Nav_bar />
      </div>

      <Content style={{ marginTop: "100px" }}>
        <ICS myData ={myData} />
      </Content>
    </>
  );
}

export default App;