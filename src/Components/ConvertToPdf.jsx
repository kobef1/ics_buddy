import React, {useEffect} from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import axios from "axios";
import {forEach} from "react-bootstrap/ElementChildren";

// Create styles
// const styles = StyleSheet.create({
//     page: {
//         flexDirection: 'row',
//         backgroundColor: '#E4E4E4'
//     },
//     section: {
//         margin: 10,
//         padding: 10,
//         flexGrow: 1
//     }
// });

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
    }
});

const ConvertToPdf = (props) => {
    let x = documentFormat(props.logs)
    let y = [
        <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Time</Text>
        </View>,
        <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Time</Text>
        </View>,
        <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Time</Text>
        </View>,
        <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Time</Text>
        </View>,
        <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Time</Text>
        </View>
    ]
    console.log("x: ", x)
    return(
        <Document>
            <Page style={styles.body}>
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

                    <View style={styles.tableRow}>
                        {y.forEach(element => {
                            return element
                        })}
                    </View>


                    {/*{x.forEach((element)=> {*/}
                    {/*    console.log("element", element)*/}
                    {/*    return <>element</>*/}
                    {/*})}*/}
                    {/*{()=>{*/}
                    {/*   return( console.log(`Hello from ConvertToPDF.jsx`))*/}
                    {/*}}*/}
                </View>
            </Page>
        </Document>
    )
}
const documentFormat = (logs) => {
    let arrayText = []
    for (let i = 0; i < logs.length; i++){
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
        arrayText.push(logText)
    }
    console.log("arrayText display: ", arrayText)
    return arrayText
    // return console.log("arrayText display: ", arrayText)
}


export {ConvertToPdf}