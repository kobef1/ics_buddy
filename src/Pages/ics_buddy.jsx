
import "bootstrap/dist/css/bootstrap.min.css";
import './ics.css';
import { Form, Button, Input, Modal, Select, Divider, message, Row, Col, Card, Typography } from "antd";
import './ce.png'

function ICS({ myData }) {
  const { il1a, il1b , il2a, il2b, il3a, il3b, il4a, il4b, expnA, expnB, esA, esB, safetyA, safetyB,
  sysOverride, systemArmed, mismatch} = myData
  console.log(`AAAAAAAAAAAAAAAAA IL1A =`, il1a, typeof (il1a))
  return (
    <>
      <div style={{ margin: "0px 5px 0px 5px" }}>
        <Row>
          <Col span={6} push={1} >
            <Card style={{ height: "80vh", border: "4px solid silver", borderRadius: "100px" }}>
              <Divider><h1>POWER</h1></Divider>
              <Row>
                <Col span={10} push={3}>
                  <div style={{ width: "80px", height: "100px", border: "1px solid", backgroundColor: "green" }}></div>
                </Col>
                <Col span={14}>
                  <h3>SYSTEM IS ON/OFF</h3>
                </Col>
              </Row>
              <Divider><h1>ARM LASER</h1></Divider>
              <Row>
                <Col span={10} push={3}>
                  <div style={{ width: "100px", height: "100px", border: "1px solid", borderRadius: "1000px", backgroundColor: "green" }}></div>
                </Col>
                <Col span={14}>
                  <h3>LASER IS ARMED</h3>
                </Col>
              </Row>
              <Divider><h1>KEY SWITCH</h1></Divider>
              <Row>
                <Col span={10} push={3}>
                  <div style={{ width: "100px", height: "100px", border: "1px solid", borderRadius: "1000px", backgroundColor: "green" }}></div>
                </Col>
                <Col span={14}>
                  <h3>LASER IS ARMED</h3>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={8} push={2}>
            {" "}
            <div align="center">
              <h1>ICS-BUDDY</h1>
              <h4>Laser Interlock System</h4>
            </div>

            <Card style={{ height: "70vh", border: "4px solid silver", borderRadius: "100px" }}>
              <Divider><h1>INTERLOCKS</h1></Divider>
              <Row>
                <Col span={1} offset={4} >
                </Col>
                <Col span={3} offset={5}>
                  <Typography.Title>A</Typography.Title>
                </Col>
                <Col span={5} push={5}>
                  <Typography.Title>B</Typography.Title>
                </Col>
              </Row>
              <Row>
                <Col span={6} push={4}>
                  <h1> 1</h1>
                </Col>
                {/* Interlock 1 A & B */}
                <Col span={4} push={4}>
                  <div style={{
                    border: "1px solid", borderRadius: "500px", width: "50px", height: "50px",
                    backgroundColor: (() => {
                      if (il1a !== null) {
                        if (il1a === '1') {
                          return 'green'
                        } else {
                          return 'red'
                        }
                      }
                    })()
                  }}></div>
                </Col>
                <Col span={4} push={8}>
                  <div style={{
                    border: "1px solid", borderRadius: "500px", width: "50px", height: "50px", backgroundColor: (() => {
                      if (il1b !== null) {
                        if (il1b === '1') {
                          return 'green'
                        } else {
                          return 'red'
                        }
                      }
                    })()
                  }}></div>
                </Col>
              </Row>
              <Row>
                <Col span={6} push={4}>
                  <h1> 2</h1>
                </Col>
                <Col span={4} push={4}>
                  <div style={{ border: "1px solid", borderRadius: "500px", width: "50px", height: "50px", backgroundColor: (() => {
                      if (il2a !== null) {
                        if (il2a === '1') {
                          return 'green'
                        } else {
                          return 'red'
                        }
                      }
                    })()}}></div>
                </Col>
                <Col span={4} push={8}>
                  <div style={{ border: "1px solid", borderRadius: "500px", width: "50px", height: "50px", backgroundColor: (() => {
                      if (il2b !== null) {
                        if (il2b === '1') {
                          return 'green'
                        } else {
                          return 'red'
                        }
                      }
                    })()}}></div>
                </Col>
              </Row>
              <Row>
                <Col span={6} push={4}>
                  <h1> 3</h1>
                </Col>
                <Col span={4} push={4}>
                  <div style={{ border: "1px solid", borderRadius: "500px", width: "50px", height: "50px", backgroundColor: (() => {
                      if (il3a !== null) {
                        if (il3a === '1') {
                          return 'green'
                        } else {
                          return 'red'
                        }
                      }
                    })() }}></div>
                </Col>
                <Col span={4} push={8}>
                  <div style={{ border: "1px solid", borderRadius: "500px", width: "50px", height: "50px", backgroundColor: (() => {
                      if (il3b !== null) {
                        if (il3b === '1') {
                          return 'green'
                        } else {
                          return 'red'
                        }
                      }
                    })() }}></div>
                </Col>
              </Row>
              <Row>
                <Col span={6} push={4}>
                  <h1> 4</h1>
                </Col>
                <Col span={4} push={4}>
                  <div style={{ border: "1px solid", borderRadius: "500px", width: "50px", height: "50px", backgroundColor: (() => {
                      if (il4a !== null) {
                        if (il4a === '1') {
                          return 'green'
                        } else {
                          return 'red'
                        }
                      }
                    })()  }}></div>
                </Col>
                <Col span={4} push={8}>
                  <div style={{ border: "1px solid", borderRadius: "500px", width: "50px", height: "50px", backgroundColor: (() => {
                      if (il4b !== null) {
                        if (il4b === '1') {
                          return 'green'
                        } else {
                          return 'red'
                        }
                      }
                    })()  }}></div>
                </Col>
              </Row>
              <Row>
                <Col span={7} push={1}>
                  <Typography.Title><h2>EXPANSION</h2></Typography.Title>
                </Col>
                <Col span={4} push={3}>
                  <div style={{ border: "1px solid", borderRadius: "500px", width: "50px", height: "50px", backgroundColor:(() => {
                      if (expnA !== null) {
                        if (expnA === '1') {
                          return 'green'
                        } else {
                          return 'red'
                        }
                      }
                    })()  }}></div>
                </Col>
                <Col span={4} push={7}>
                  <div style={{ border: "1px solid", borderRadius: "500px", width: "50px", height: "50px", backgroundColor:(() => {
                      if (expnB !== null) {
                        if (expnB === '1') {
                          return 'green'
                        } else {
                          return 'red'
                        }
                      }
                    })()  }}></div>
                </Col>
              </Row>
              <Divider></Divider>
            </Card>
          </Col>
          <Col span={6} push={3}>
            <Card style={{ height: "80vh", border: "4px solid silver", borderRadius: "100px" }}>
              <Divider><Typography.Title>STATUS</Typography.Title></Divider>

              <Row>
                <Col span={1} offset={4} >
                </Col>
                <Col span={3} offset={5}>
                  <Typography.Title>A</Typography.Title>
                </Col>
                <Col span={5} push={5}>
                  <Typography.Title>B</Typography.Title>
                </Col>
              </Row>
              <Row>
                <Col span={8} push={1}>
                  <Typography.Title><h3>EMERGENCY STOP</h3></Typography.Title>
                </Col>
                <Col span={4} push={2}>
                  <div style={{ border: "1px solid", borderRadius: "500px", width: "50px", height: "50px", backgroundColor: (() => {
                      if (esA !== null) {
                        if (esA === '1') {
                          return 'green'
                        } else {
                          return 'red'
                        }
                      }
                    })() }}></div>
                </Col>
                <Col span={4} push={6}>
                  <div style={{ border: "1px solid", borderRadius: "500px", width: "50px", height: "50px", backgroundColor: (() => {
                      if (esB !== null) {
                        if (esB === '1') {
                          return 'green'
                        } else {
                          return 'red'
                        }
                      }
                    })()  }}></div>
                </Col>
              </Row>
              <Row style={{ marginBottom: "25px" }}>
                <Col span={8} push={1} >
                  <Typography><h3>SAFETY</h3></Typography>
                </Col>
                <Col span={4} push={2}>
                  <div style={{ border: "1px solid", borderRadius: "500px", width: "50px", height: "50px" , backgroundColor: (() => {
                      if (safetyA !== null) {
                        if (safetyA === '0') {
                          return 'blue'
                        } else {
                          return 'red'
                        }
                      }
                    })() }}></div>
                </Col>
                <Col span={4} push={6}>
                  <div style={{ border: "1px solid", borderRadius: "500px", width: "50px", height: "50px" , backgroundColor: (() => {
                      if (safetyB !== null) {
                        if (safetyB === '0') {
                          return 'blue'
                        } else {
                          return 'red'
                        }
                      }
                    })() }}></div>
                </Col>
              </Row>
              <Row>
                <Col span={8} push={1}>
                  <Typography><h3>SYSTEM OVERRIDE</h3></Typography>
                </Col>
                <Col span={4} push={2}>
                  <div style={{ border: "1px solid", borderRadius: "500px", width: "50px", height: "50px" , backgroundColor: (() => {
                      if (sysOverride !== null) {
                        if (sysOverride === '1') {
                          return null
                        } else {
                          return 'red'
                        }
                      }
                    })() }}></div>
                </Col>

              </Row>
              <Row>
                <Col span={8} push={1}>
                  <Typography><h3>MISMATCH FAULT</h3></Typography>
                </Col>
                <Col span={4} push={2}>
                  <div style={{ border: "1px solid", borderRadius: "500px", width: "50px", height: "50px", backgroundColor:(() => {
                      if (mismatch !== null) {
                        if (mismatch === '1') {
                          return null
                        } else {
                          return 'red'
                        }
                      }
                    })()  }}></div>
                </Col>
              </Row>
              <Row>
                <Col span={8} push={1}>
                  <Typography><h3>LASER ARMED</h3></Typography>
                </Col>
                <Col span={4} push={2}>
                  <div style={{ border: "1px solid", borderRadius: "500px", width: "50px", height: "50px", backgroundColor:(() => {
                      if (systemArmed !== null) {
                        if (systemArmed === '1') {
                          return null
                        } else {
                          return 'red'
                        }
                      }
                    })()  }}></div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ICS;
