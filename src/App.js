import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav_bar from './Components/navbar';
import ICS from './Pages/ics_buddy';
import { Form, Button, Input, Modal, Select, Divider, message, Row, Col, Card, Typography, Spin, Alert, Space } from "antd";
import { Content, Header } from 'antd/es/layout/layout';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ICSLogs from './Components/ICSLogs';

function App() {
  const [myData, setMyData] = useState({})
  const [fetching, setFetching] = useState(false)
  const [disconnectedStatus, setDisconnectedStatus] = useState(false)
  const [myTimeout, setMyTimeout] = useState(500)

  const [logsVisibility, setLogsVisibility] = useState(false)

  const handleOpenLog = () => {
    setLogsVisibility(true)
  }

  const handleCloseLog = () => {
    setLogsVisibility(false)
  }

  useEffect(() => {
    const myPromise = () => {
      return new Promise((resolve, reject) => {
        if (!fetching) {
          // Not fetching.
          axios.get('http://localhost:8000/fetch')
            .then((response) => {
              resolve(response.data)
            })
            .catch((err) => reject(err.response.data.message))
            .finally(() => setFetching(false))
        } else {
          reject('Another fetch is on-going!')
        }
      })
    }

    const intervalId = setInterval(() => {
      if (!fetching) {
        console.log(`Am I fetching? :`, fetching)
        myPromise()
          .then((response) => {
            setMyData(response)
            setDisconnectedStatus(false)
            console.log(response)
          })
          .catch(err => {
            setDisconnectedStatus(true)
            console.log(err)
          })
      }
    }, myTimeout)

    return () => {
      clearInterval(intervalId)
      setFetching(false)
    }

  }, [])

  return (
    <>
      <div>
        <Nav_bar handleOpenLog={handleOpenLog} />
      </div>

      {/* <ICSLogs open={logsVisibility} /> */}
      <Modal
        title='Logs'
        open={logsVisibility}
        onCancel={handleCloseLog}
        width={1500}>
        <ICSLogs />
      </Modal>

      <Content style={{ marginTop: "100px" }}>
        <Spin spinning={disconnectedStatus} tip={
          <>
            <Row justify={'center'}>
              Loading..
            </Row>
            <Row justify={'center'}>
              Please make sure you are connected to the ICS-Buddy switch or router!
            </Row>
          </>
        }>
          <ICS myData={myData} />
        </Spin>
      </Content>
    </>
  );
}

export default App;