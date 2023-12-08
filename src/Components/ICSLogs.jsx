import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Spin, Table } from 'antd'

const ICSLogs = (open) => {
    const [myLogs, setMyLogs] = useState(null)
    const createColumnObject = (title, dataIndex) => {
        if (title === 'Date'){
            return (
                {
                    title: title,
                    dataIndex: dataIndex,
                    key: dataIndex,
                    sorter: (a, b) => new Date(a.date) - new Date(b.date)
                }
            )
        }
        else if (title === 'Time'){
            return (
                {
                    title: title,
                    dataIndex: dataIndex,
                    key: dataIndex,
                    sorter: (a, b) => a.time.localeCompare(b.time)
                }
            )
        }
        else {
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
        createColumnObject('Event', 'event'),
        createColumnObject('Date', 'date'),
        createColumnObject('Time', 'time')
    ]

    useEffect(() => {
        axios.get('http://localhost:8000/db')
            .then((response) => {
                // setMyLogs(response.data)
                let events = response.data
                let dataSource = events.map(({ event, date, time }, i) => (
                    {
                        key: i,
                        event: event,
                        date: date,
                        time: time
                    }
                ))
                setMyLogs(dataSource)
                console.log(response.data)
            })
    }, [open])

    return (
        <div>
            <Row>
                {/* <strong>Note: </strong> The logs listed below appeared in the database before you clicked the button. */}
                <strong>Note: </strong> The logs are not updated in real time. The logs will be updated when you open this window again via the Logs button.
            </Row>
            {/* {myLogs === null ? (null) : (
                myLogs.map(({ event, time, date }) => `${event}`)
            )} */}

            {myLogs === null ? (
                <Spin spinning />
            ) : (
                <Table columns={columns} dataSource={myLogs} />
            )}
        </div>
    )
}

export default ICSLogs