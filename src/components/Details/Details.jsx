import React from 'react';
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import 'chart.js/auto';     // this will fix the problem of "arc is not registered"
import { Doughnut } from "react-chartjs-2";
import useStyles from "./detailStyles";
import useTransactions from '../../useTransactions';

const Details = ({ title }) => {
    const classes = useStyles();
    const { total, chartData } = useTransactions(title);

    return (
        <Card className={title === 'Income' ? classes.income : classes.expense}>
            <CardHeader title={title} />
            <CardContent>
                <Typography variant="h5">${total}</Typography>
                <Doughnut data={chartData} />
            </CardContent>
        </Card>
    );
};

export default Details;
