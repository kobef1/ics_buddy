/*
================================================================================
FILE        : ConvertToPdf.jsx
AUTHOR      : Kathryn Marie P. Sigaya
DESCRIPTION : JSX file that creates the PDF file of the ICS-Buddy log.
COPYRIGHT   : 8 December 2023
REVISION HISTORY
Date: 			     By: 		 Description:
8 December 2023      Sigaya      Creation of file
11 December 2023     Sigaya      Formatted log data to PDF format
13 December 2023     Sigaya      Documentation
================================================================================
*/

import React from 'react';
import {Page, Text, View, Document, StyleSheet, Image} from '@react-pdf/renderer';
import Logo from '../Components/Logo.png'
import moment from "moment";

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
        justifyContent: 'center',
        textAlign: 'center',
        verticalAlign: 'baseline',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        fontSize: 10
    },
    logo: {
        marginVertical: 20,
        marginHorizontal: 20,
        paddingBottom: 10,
        width: '120px'
    },
    title: {
        padding: '-45px',
        textAlign: 'center',
        paddingHorizontal: '0',
        marginVertical: '-20'
    },
    date: {
        padding: '-45px',
        textAlign: 'end',
        paddingLeft: '10',
        paddingHorizontal: '0',
        marginVertical: '-15'
    },

});

//Creates the individual table cell contents.
const logFormat = (logs) => {
    let logArray = []

    for (let i = 0; i < logs.length; i++) {
        //access log contents via array index
        let currentLog = logs[i]
        //populate the table row cells with the log content
        let logText = (
            <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{currentLog.event_id}</Text>
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
        //push the created log text element to the array.
        logArray.push(logText)
    }
    return logArray
}

const ConvertToPdf = (props) => {
    let logsTable = logFormat(props.logs)
    const date = moment().format("MMM DD YYYY")

    return (
        <Document>
            {/*default page size is A4 based on documentation*/}
            <Page orientation="landscape" style={styles.body}>
                {/*Logo*/}
                <Image style={styles.logo} src={Logo}/>
                {/*Title*/}
                <Text style={styles.title}> ICS-Buddy Log (generated {date})</Text>

                {/*Table Headers*/}
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