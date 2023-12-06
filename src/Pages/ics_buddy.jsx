
import "bootstrap/dist/css/bootstrap.min.css";
import './ics.css';
import { Divider, Row, Col, Card, Typography} from "antd";

// import  from './switch-on.png'

function ICS({ myData }) {
  const {il1a, il1b , il2a, il2b, il3a, il3b, il4a, il4b, expnA, expnB, esA, esB, safetyA, safetyB,
    sysOverride, systemArmed, mismatch, keySwitchA } = myData
  
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
                      src={
                        il1a === "1"
                          ? require("./images/switch-on.png")
                          : require("./images/switch-off.png")
                      }
                      width={80}
                      height={120}
                    />
                  </div>
                </Col>
                <Col span={14}>
                  <h4>SYSTEM IS {il1a === "1" ? "ON" : "OFF"}</h4>
                </Col>
              </Row>
              <Divider>
                <h1>ARM LASER</h1>
              </Divider>
              <Row align={"middle"}>
                <Col span={10} push={3}>
                  <img
                    class="click"
                    src={
                      systemArmed === "0"
                        ? require("./images/pushbutton-on2.png")
                        : require("./images/pushbutton-off.png")
                    }
                    width={100}
                    height={100}
                  />
                </Col>
                <Col span={14}>
                  <h4>LASER IS {il1a === "0" ? "ARMED" : "UNARMED"}</h4>
                </Col>
              </Row>
              <Divider>
                <h1>KEY SWITCH</h1>
              </Divider>
              <Row align={"middle"} justify={"center"}>
                <img
                  src={
                    keySwitchA === "1"
                      ? require("./images/keyswitch-on.png")
                      : require("./images/keyswitch-off.png")
                  }
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
                    <div class={il1a === "1" ? "led-green" : "led-red"}></div>
                  </div>
                </Col>
                <Col span={4} push={8}>
                  <div class="led-box">
                    <div class={il1b === "1" ? "led-green" : "led-red"}></div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={6} push={4}>
                  <h1> 2</h1>
                </Col>
                <Col span={4} push={4}>
                  <div class="led-box">
                    <div class={il2a === "1" ? "led-green" : "led-red"}></div>
                  </div>
                </Col>
                <Col span={4} push={8}>
                  <div class="led-box">
                    <div class={il2b === "1" ? "led-green" : "led-red"}></div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={6} push={4}>
                  <h1> 3</h1>
                </Col>
                <Col span={4} push={4}>
                  <div class="led-box">
                    <div class={il3a === "1" ? "led-green" : "led-red"}></div>
                  </div>
                </Col>
                <Col span={4} push={8}>
                  <div class="led-box">
                    <div class={il3b === "1" ? "led-green" : "led-red"}></div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={6} push={4}>
                  <h1> 4</h1>
                </Col>
                <Col span={4} push={4}>
                  <div class="led-box">
                    <div class={il4a === "1" ? "led-green" : "led-red"}></div>
                  </div>
                </Col>
                <Col span={4} push={8}>
                  <div class="led-box">
                    <div class={il4b === "1" ? "led-green" : "led-red"}></div>
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
                    <div class={expnA === "1" ? "led-green" : "led-red"}></div>
                  </div>
                </Col>
                <Col span={4} push={7}>
                  <div class="led-box">
                    <div class={expnB === "1" ? "led-green" : "led-red"}></div>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col span={7} push={1}>
                  <Typography.Title>
                    <h2>CURTAIN OPEN</h2>
                  </Typography.Title>
                </Col>
                <Col span={4} push={3}>
                  <div class="led-box">
                    <div class={expnB === "1" ? "led-green" : "led-red"}></div>
                  </div>
                </Col>
              </Row>
              <Row justify={"center"}>
                <div style={{ border: '2px solid', borderRadius: '10px', width: '300px', height: '80px' }}>
                  <h2 style={{alignItems:'middle'}}>ALIGNMENT MODE</h2>
              </div>
              </Row>
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
                    <div class={esA === "0" ? "led-green" : "led-off"}></div>
                  </div>
                </Col>
                <Col span={4} push={6}>
                  <div class="led-box">
                    <div class={esB === "0" ? "led-green" : "led-off"}></div>
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
                    <div
                      class={safetyA === "1" ? "led-green" : "led-off"}
                    ></div>
                  </div>
                </Col>
                <Col span={4} push={6}>
                  <div class="led-box">
                    <div
                      class={safetyB === "1" ? "led-green" : "led-off"}
                    ></div>
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
                    <div
                      class={sysOverride === "0" ? "led-red" : "led-off"}
                    ></div>
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
                    <div class={mismatch === "0" ? "led-red" : "led-off"}></div>
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
                    <div
                      class={systemArmed === "0" ? "led-red" : "led-off"}
                    ></div>
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
