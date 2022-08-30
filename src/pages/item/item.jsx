import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {styleSheet} from "./style";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Popup from "reactjs-popup";
import Button from "@material-ui/core/Button";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import UpdateIcon from "@material-ui/icons/Update";
import DeleteIcon from "@material-ui/icons/Delete";

class Item extends Component{

    constructor(props) {
        super(props);


        this.state={

        }
    }










    render() {


        let {classes} = this.props;
        function createData(id, itemName, description , itemQty , buyingPrice ,salePrice) {
            return { id, itemName, description, itemQty, buyingPrice,salePrice };
        }

        const rows = [
            createData('1',
                'rice',
                'number 01',
                '10000kg',
                '320',
                '350'
            ),

        ];


        return (

            <div className={classes.container}>
                <Typography
                    variant="h3" gutterBottom
                    className={classes.header}
                    fontStyle

                >
                    <Box fontStyle="italic" m={1}>
                        Item  Management
                    </Box>



                </Typography>
                <div className={classes.tableContainer}>
                    <div className={classes.tableContainer_header}>
                        <Popup
                            trigger ={
                                <Button
                                    variant="contained"
                                    color="primary"
                                    endIcon={
                                        <PersonAddIcon/>
                                    }
                                    size={"small"}
                                    style={{marginBottom:"1%"}}

                                >
                                    New  Item
                                </Button>

                            }
                            modal
                            nested
                            className={classes.model}
                        >
                            {close => (
                                <div className={classes.modelOne} >

                                    <div className={classes.closeButton}>
                                        <button className="close" onClick={close}>
                                            &times;
                                        </button>
                                    </div>
                                    <div className={classes.tittle}>
                                        <Typography
                                            variant="h6" gutterBottom
                                            // className={classes.header}
                                            fontStyle
                                            style={{fontWeight:"bold"}}
                                        >
                                            Add new Item
                                        </Typography>

                                    </div>
                                    <div className={classes.formCustomer}>
                                        <TextField
                                            id="outlined-basic"
                                            label="ItemName"
                                            variant="outlined"
                                            // fullWidth
                                            size={"small"}
                                            style={{margin:"1%",
                                                width:"90%"}}

                                        />
                                        <TextField
                                            id="outlined-basic"
                                            label="description"
                                            variant="outlined"
                                            //fullWidth
                                            size={"small"}
                                            style={{margin:"1%",
                                                width:"90%"}}

                                        />

                                        <TextField
                                            id="outlined-basic"
                                            label="item Qty"
                                            variant="outlined"
                                            //fullWidth
                                            size={"small"}
                                            style={{margin:"1%",
                                                width:"90%"}}

                                        />
                                        <TextField
                                            id="outlined-basic"
                                            label="Buying item price"
                                            variant="outlined"
                                            //fullWidth
                                            size={"small"}
                                            style={{margin:"1%",
                                                width:"90%"}}

                                        />

                                        <TextField
                                            id="outlined-basic"
                                            label="Item price"
                                            variant="outlined"
                                            //fullWidth
                                            size={"small"}
                                            style={{margin:"1%",
                                                width:"90%"}}

                                        />



                                        <div className={classes.saveButton}>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                fullWidth
                                            >
                                                save customer
                                            </Button>
                                        </div>

                                    </div>



                                </div>
                            )}





                        </Popup>


                    </div>
                    <div className={classes.tableContainer_table}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead style={{backgroundColor:"#212342",

                                }}>
                                    <TableRow>
                                        <TableCell style={{color:"#f5f5f5", fontWeight:"bold"}}>Id</TableCell>
                                        <TableCell style={{color:"#f5f5f5", fontWeight:"bold"}}align="center">itemName</TableCell>
                                        <TableCell style={{color:"#f5f5f5", fontWeight:"bold"}} align="center">description</TableCell>
                                        <TableCell style={{color:"#f5f5f5", fontWeight:"bold"}}align="center">itemQty</TableCell>
                                        <TableCell style={{color:"#f5f5f5", fontWeight:"bold"}}align="center">buyingPrice</TableCell>
                                        <TableCell style={{color:"#f5f5f5", fontWeight:"bold"}}align="center">salePrice</TableCell>
                                        <TableCell style={{color:"#f5f5f5", fontWeight:"bold"}}align="center">Action</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.name}>
                                            <TableCell component="th" scope="row">
                                                {row.id}
                                            </TableCell>
                                            <TableCell align="center">{row.itemName}</TableCell>
                                            <TableCell align="center">{row.description}</TableCell>
                                            <TableCell align="center">{row.itemQty}</TableCell>
                                            <TableCell align="center">{row.buyingPrice}</TableCell>
                                            <TableCell align="center">{row.salePrice}</TableCell>
                                            <TableCell align="center" >
                                                <Tooltip title="Edit">
                                                    <IconButton
                                                        onClick={() => {
                                                            console.log("edit icon clicked!")
                                                            //this.updateCustomer(row);
                                                        }}
                                                    >
                                                        <UpdateIcon color="primary" />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <IconButton
                                                        onClick={() => {
                                                            // this.deleteCustomer(row.id)
                                                        }}
                                                    >
                                                        <DeleteIcon color="error" />
                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>





                </div>






            </div>


                )
    }

}


export  default withStyles (styleSheet)(Item)