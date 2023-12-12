import React from 'react';
import {Page, Text, View, Document, StyleSheet, Image} from '@react-pdf/renderer';
import Logo from '../Components/Logo.png'

const styles = StyleSheet.create({
    table: {
        display: "table",
        width: "auto",
        borderStyle: "solid",
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0
    },
    tableRow: {
        margin: "auto",
        flexDirection: "row"
    },
    tableCol: {
        width: "20%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0
    },
    tableCell: {
        margin: "auto",
        marginTop: 5,
        fontSize: 10
    },
    logo: {
        marginVertical: 20,
        marginHorizontal: 40,
        width: '120px'
    },
    title: {
        marginVertical: 20,
        marginHorizontal: 100,
    }
});

const logFormat = (logs) => {
    let logArray = []

    for (let i = 0; i < logs.length; i++) {
        let currentLog = logs[i]
        let logText = (
            <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{currentLog.id}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{currentLog.event}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{currentLog.signal}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{currentLog.date}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{currentLog.time}</Text>
                </View>
            </View>
        )
        logArray.push(logText)
    }
    return logArray
}

const ConvertToPdf = (props) => {
    let logsTable = logFormat(props.logs)
    return (
        <Document>
            <Page style={styles.body}>
                {/*Logo*/}
                <Image style={styles.logo} src={Logo}/>
                {/*Title*/}
                <Text style={styles.title}> ICS Buddy Log </Text>


                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>ID</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>Event</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>Signal</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>Date</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>Time</Text>
                        </View>
                    </View>
                    {/*Maps the rows that is in <View> format.*/}
                    {logsTable.map(log => log)}
                </View>
            </Page>
        </Document>
    )
}


export {ConvertToPdf}