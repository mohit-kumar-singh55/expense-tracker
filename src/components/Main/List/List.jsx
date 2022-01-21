import React, { useContext } from 'react';
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, Slide, IconButton } from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";
import useStyles from "./listStyles";
import { ExpenseTrackerContext } from "../../../context/context";

function List() {
    const classes = useStyles();

    const { deleteTransaction } = useContext(ExpenseTrackerContext);

    const transactions = [
        { id: 1, type: "Income", category: "Salary", amount: 50, date: "Thu Jan 20" },
        { id: 2, type: "Expense", category: "Business", amount: 150, date: "Thu Jan 22" },
        { id: 3, type: "Income", category: "Pets", amount: 80, date: "Thu Jan 24" },
    ];

    return (
        <MUIList dense={false} className={classes.list}>
            {transactions.map((transaction) => (
                <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === "Income" ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label='delete' onClick="">
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    );
}

export default List;
