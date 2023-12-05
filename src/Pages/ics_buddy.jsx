
import "bootstrap/dist/css/bootstrap.min.css";
import './ics.css';
import { Form, Button, Input, Modal, Select, Divider, message, Row, Col, Card, Typography, Table } from "antd";
import ce from "./images/ce.png";

// import  from './switch-on.png'

function ICS() {
  return (
    <>
      <div style={{ margin: "0px 5px 0px 5px" }}>
        <Row>
          <Col span={6} push={1}>
            <Card
              style={{
                height: "80vh",
                border: "4px solid #4C4E52",
                borderRadius: "100px",
                backgroundColor: "#efefef",
                boxShadow: "1px 2px 3px 3px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Divider>
                <h1>POWER</h1>
              </Divider>
              <Row align={"middle"}>
                <Col span={10} push={3}>
                  <div>
                    {" "}
                    <img
                      src={require("./images/switch-on.png")}
                      width={80}
                      height={120}
                    />
                  </div>
                </Col>
                <Col span={14}>
                  <h4>SYSTEM IS OFF</h4>
                </Col>
              </Row>
              <Divider>
                <h1>ARM LASER</h1>
              </Divider>
              <Row align={"middle"}>
                <Col span={10} push={3}>
                  <img
                    class="click"
                    src={require("./images/pushbutton-on2.png")}
                    width={100}
                    height={100}
                  />
                </Col>
                <Col span={14}>
                  <h4>LASER IS ARMED</h4>
                </Col>
              </Row>
              <Divider>
                <h1>KEY SWITCH</h1>
              </Divider>
              <Row align={"middle"} justify={"center"}>
                <img
                  src={require("./images/keyswitch-off.png")}
                  width={330}
                  height={230}
                />
              </Row>
            </Card>
          </Col>
          <Col span={8} push={2}>
            {" "}
            <div align="center">
              <h1 style={{ color: "#1d1f8c" }}>ICS-BUDDY</h1>
              <h4 style={{ color: "#1d1f8c" }}>Laser Interlock System</h4>
            </div>
            <Card
              style={{
                height: "70vh",
                border: "4px solid #4C4E52",
                borderRadius: "100px",
                backgroundColor: "#efefef",
                boxShadow: "1px 2px 3px 3px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Divider>
                <h1>INTERLOCKS</h1>
              </Divider>
              <Row>
                <Col span={1} offset={4}></Col>
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
                  <div class="led-box">
                    <div class="led-green"></div>
                  </div>
                </Col>
                <Col span={4} push={8}>
                  <div class="led-box">
                    <div class="led-green"></div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={6} push={4}>
                  <h1> 2</h1>
                </Col>
                <Col span={4} push={4}>
                  <div class="led-box">
                    <div class="led-off"></div>
                  </div>
                </Col>
                <Col span={4} push={8}>
                  <div class="led-box">
                    <div class="led-off"></div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={6} push={4}>
                  <h1> 3</h1>
                </Col>
                <Col span={4} push={4}>
                  <div class="led-box">
                    <div class="led-green"></div>
                  </div>
                </Col>
                <Col span={4} push={8}>
                  <div class="led-box">
                    <div class="led-green"></div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={6} push={4}>
                  <h1> 4</h1>
                </Col>
                <Col span={4} push={4}>
                  <div class="led-box">
                    <div class="led-green"></div>
                  </div>
                </Col>
                <Col span={4} push={8}>
                  <div class="led-box">
                    <div class="led-green"></div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={7} push={1}>
                  <Typography.Title>
                    <h2>EXPANSION</h2>
                  </Typography.Title>
                </Col>
                <Col span={4} push={3}>
                  <div class="led-box">
                    <div class="led-green"></div>
                  </div>
                </Col>
                <Col span={4} push={7}>
                  <div class="led-box">
                    <div class="led-green"></div>
                  </div>
                </Col>
              </Row>

              <Divider></Divider>
            </Card>
          </Col>
          <Col span={6} push={3}>
            <Card
              style={{
                height: "80vh",
                border: "4px solid #4C4E52",
                borderRadius: "100px",
                backgroundColor: "#efefef",
                boxShadow: "1px 2px 3px 3px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Divider>
                <Typography.Title>STATUS</Typography.Title>
              </Divider>

              <Row>
                <Col span={8} push={1}></Col>
                <Col span={3} push={5}>
                  <Typography.Title>A</Typography.Title>
                </Col>
                <Col span={5} push={7}>
                  <Typography.Title>B</Typography.Title>
                </Col>
              </Row>
              <Row>
                <Col span={8} push={1}>
                  <Typography.Title>
                    <h3>EMERGENCY STOP</h3>
                  </Typography.Title>
                </Col>
                <Col span={4} push={5}>
                  <div class="led-box">
                    <div class="led-green"></div>
                  </div>
                </Col>
                <Col span={4} push={6}>
                  <div class="led-box">
                    <div class="led-green"></div>
                  </div>
                </Col>
              </Row>
              <Row style={{ marginBottom: "25px" }}>
                <Col span={8} push={1}>
                  <Typography>
                    <h3>SAFETY OK</h3>
                  </Typography>
                </Col>
                <Col span={4} push={5}>
                  <div class="led-box">
                    <div class="led-green"></div>
                  </div>
                </Col>
                <Col span={4} push={6}>
                  <div class="led-box">
                    <div class="led-green"></div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={8} push={1}>
                  <Typography>
                    <h3>SYSTEM OVERRIDEN</h3>
                  </Typography>
                </Col>
                <Col span={4} push={5}>
                  <div class="led-box">
                    <div class="led-off"></div>
                  </div>
                </Col>
                <Col span={4} push={6}></Col>
              </Row>
              <Row>
                <Col span={8} push={1}>
                  <Typography>
                    <h3>MISMATCH FAULT</h3>
                  </Typography>
                </Col>
                <Col span={4} push={5}>
                  <div class="led-box">
                    <div class="led-off"></div>
                  </div>
                </Col>
                <Col span={4} push={6}></Col>
              </Row>
              <Row>
                <Col span={10} push={1}>
                  <Typography>
                    <h3>LASER ARMED</h3>
                  </Typography>
                </Col>
                <Col span={4} push={3}>
                  <div class="led-box">
                    <div class="led-red"></div>
                  </div>
                </Col>
                <Col span={4} push={6}></Col>
                <Divider />
                <img src={require("./images/ce.png")} width={50} height={50} />
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ICS;
