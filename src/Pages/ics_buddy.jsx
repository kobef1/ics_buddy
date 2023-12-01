
import "bootstrap/dist/css/bootstrap.min.css";
import './ics.css';
import { Form, Button, Input, Modal, Select, Divider, message, Row, Col, Card, Typography } from "antd";
import './ce.png'

function ICS() {
  return (
    <>
      <div style={{ margin: "0px 5px 0px 5px" }}>
       <Row>
          <Col span={6} push={1} >
            <Card style={{height:"80vh", border:"4px solid silver", borderRadius:"100px"}}>
              <Divider><h1>POWER</h1></Divider>
              <Row>
                <Col span={10} push={3}>
                  <div style={{width:"80px", height:"100px", border:"1px solid", backgroundColor:"green"}}></div>
                </Col>
                <Col span={14}>
                  <h3>SYSTEM IS ON/OFF</h3>
                </Col>
              </Row>
               <Divider><h1>ARM LASER</h1></Divider>
              <Row>
                <Col span={10} push={3}>
                  <div style={{width:"100px", height:"100px", border:"1px solid",borderRadius:"1000px" ,backgroundColor:"green"}}></div>
                </Col>
                <Col span={14}>
                  <h3>LASER IS ARMED</h3>
                </Col>
              </Row>
              <Divider><h1>KEY SWITCH</h1></Divider>
               <Row>
                <Col span={10} push={3}>
                  <div style={{width:"100px", height:"100px", border:"1px solid",borderRadius:"1000px" ,backgroundColor:"green"}}></div>
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
           
            <Card style={{height:"70vh", border:"4px solid silver", borderRadius:"100px"}}>
              <Divider><h1>INTERLOCKS</h1></Divider>
                <Row>
                    <Col span={1}offset={4} >
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
                  <Col span={4} push={4}>
                          <div style={{ border: "1px solid", borderRadius:"500px", width:"50px",height:"50px", backgroundColor:"green" }}></div>
                  </Col>
                  <Col span={4} push={8}>
                          <div style={{ border: "1px solid", borderRadius:"500px", width:"50px", height:"50px", backgroundColor:"green" }}></div>
                  </Col>
              </Row>
               <Row>
                  <Col span={6} push={4}>
                    <h1> 2</h1>
                  </Col>
                  <Col span={4} push={4}>
                          <div style={{ border: "1px solid", borderRadius:"500px", width:"50px",height:"50px", backgroundColor:"green" }}></div>
                  </Col>
                  <Col span={4} push={8}>
                          <div style={{ border: "1px solid", borderRadius:"500px", width:"50px", height:"50px", backgroundColor:"green" }}></div>
                  </Col>
                </Row>
                <Row>
                  <Col span={6} push={4}>
                    <h1> 3</h1>
                  </Col>
                  <Col span={4} push={4}>
                          <div style={{ border: "1px solid", borderRadius:"500px", width:"50px",height:"50px", backgroundColor:"red" }}></div>
                  </Col>
                  <Col span={4} push={8}>
                          <div style={{ border: "1px solid", borderRadius:"500px", width:"50px", height:"50px", backgroundColor:"green" }}></div>
                  </Col>
              </Row>
               <Row>
                  <Col span={6} push={4}>
                    <h1> 4</h1>
                  </Col>
                  <Col span={4} push={4}>
                          <div style={{ border: "1px solid", borderRadius:"500px", width:"50px",height:"50px", backgroundColor:"red" }}></div>
                  </Col>
                  <Col span={4} push={8}>
                          <div style={{ border: "1px solid", borderRadius:"500px", width:"50px", height:"50px", backgroundColor:"red" }}></div>
                  </Col>
              </Row>
               <Row>
                  <Col span={7} push={1}>
                    <Typography.Title><h2>EXPANSION</h2></Typography.Title>
                  </Col>
                  <Col span={4} push={3}>
                          <div style={{ border: "1px solid", borderRadius:"500px", width:"50px",height:"50px", backgroundColor:"green" }}></div>
                  </Col>
                  <Col span={4} push={7}>
                          <div style={{ border: "1px solid", borderRadius:"500px", width:"50px", height:"50px", backgroundColor:"green" }}></div>
                  </Col>
              </Row>
              <Divider></Divider>
           </Card>
          </Col>
            <Col span={6} push={3}>
              <Card style={{ height: "80vh", border: "4px solid silver", borderRadius: "100px" }}>
                <Divider><Typography.Title>STATUS</Typography.Title></Divider>
                          
                <Row>
                  <Col span={1}offset={4} >
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
                            <div style={{ border: "1px solid", borderRadius:"500px", width:"50px",height:"50px" }}></div>
                    </Col>
                    <Col span={4} push={6}>
                            <div style={{ border: "1px solid", borderRadius:"500px", width:"50px", height:"50px" }}></div>
                    </Col>
                </Row>
                <Row style={{marginBottom:"25px"}}>
                    <Col span={8} push={1} >
                      <Typography><h3>SAFETY</h3></Typography>
                    </Col>
                    <Col span={4} push={2}>
                            <div style={{ border: "1px solid", borderRadius:"500px", width:"50px",height:"50px" }}></div>
                    </Col>
                    <Col span={4} push={6}>
                            <div style={{ border: "1px solid", borderRadius:"500px", width:"50px", height:"50px" }}></div>
                    </Col>
                </Row>
                <Row>
                  <Col span={8} push={1}>
                    <Typography><h3>SYSTEM OVERRIDE</h3></Typography>
                  </Col>
                  <Col span={4} push={2}>
                          <div style={{ border: "1px solid", borderRadius:"500px", width:"50px",height:"50px" }}></div>
                  </Col>
                  <Col span={4} push={6}>
                          <div style={{ border: "1px solid", borderRadius:"500px", width:"50px", height:"50px" }}></div>
                  </Col>
                </Row>
               <Row>
                  <Col span={8} push={1}>
                    <Typography><h3>MISMATCH FAULT</h3></Typography>
                  </Col>
                  <Col span={4} push={2}>
                          <div style={{ border: "1px solid", borderRadius:"500px", width:"50px",height:"50px" }}></div>
                  </Col>
                  <Col span={4} push={6}>
                          <div style={{ border: "1px solid", borderRadius:"500px", width:"50px", height:"50px" }}></div>
                  </Col>
              </Row>
              <Row>
                  <Col span={8} push={1}>
                    <Typography><h3>LASER ARMED</h3></Typography>
                  </Col>
                  <Col span={4} push={2}>
                          <div style={{ border: "1px solid", borderRadius:"500px", width:"50px",height:"50px" }}></div>
                  </Col>
                  <Col span={4} push={6}>
                          <div style={{ border: "1px solid", borderRadius:"500px", width:"50px", height:"50px" }}></div>
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
