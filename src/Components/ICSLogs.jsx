import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Row, Space, Spin, Table} from 'antd'
import {PDFDownloadLink} from "@react-pdf/renderer";
import {ConvertToPdf} from "./ConvertToPdf";
import moment from "moment/moment";

const ICSLogs = (open) => {
    const [myLogs, setMyLogs] = useState(null)
    const date = moment().format("MMM DD YYYY")

    const createColumnObject = (title, dataIndex) => {
        if (title === 'Date') {
            return (
                {
                    title: title,
                    dataIndex: dataIndex,
                    key: dataIndex,
                    sorter: (a, b) => new Date(a.date) - new Date(b.date)
                }
            )
        } else if (title === 'Time') {
            return (
                {
                    title: title,
                    dataIndex: dataIndex,
                    key: dataIndex,
                    sorter: (a, b) => a.time.localeCompare(b.time)
                }
            )
        } else {
            return (
                {
                    title: title,
                    dataIndex: dataIndex,
                    key: dataIndex,

                }
            )
        }
    }

    const columns = [
        createColumnObject('ID', 'event_id'),
        createColumnObject('Signal', 'signal'),
        createColumnObject('Event', 'event'),
        createColumnObject('Date', 'date'),
        createColumnObject('Time', 'time')
    ]

    useEffect(() => {
        axios.get('http://localhost:8000/db')
            .then((response) => {
                // setMyLogs(response.data)
                let events = response.data
                let dataSource = events.map(({event, date, time, event_id, signal}, i) => (
                    {
                        key: i,
                        event: event,
                        date: date,
                        time: time,
                        event_id: event_id,
                        signal: signal
                    }
                ))
                setMyLogs(dataSource)
                console.log(response.data)
            })
    }, [open])

    return (
        <div>
            <Row>
                <Space>
                    <strong>Note: </strong> The data shown are the latest 100 recorded logs and are not updated in real time. The logs will be updated when you
                    open this window again via the Logs button.
                    {myLogs === null ? null : (
                        <PDFDownloadLink document={<ConvertToPdf logs={myLogs}/>} fileName={`ICSBuddyLog_${date}.pdf`}>
                            {({blob, url, loading, error}) =>
                                loading ? 'Preparing the log for downloading...' : 'Download the log here.'
                            }
                        </PDFDownloadLink>
                    )}
                </Space>
                <br/>
            </Row>

            {/* {myLogs === null ? (null) : (
                myLogs.map(({ event, time, date }) => `${event}`)
            )} */}

            {myLogs === null ? (
                <Spin spinning/>
            ) : (
                <Table
                    columns={columns}
                    dataSource={myLogs}

                    pagination={{
                        position: ["bottomCenter"],
                        pageSize: 10
                    }}
                />
            )}
        </div>
    )
}

export default ICSLogs