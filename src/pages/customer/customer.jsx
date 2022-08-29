import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {styleSheet} from "./style";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper"
import Popup from 'reactjs-popup';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

class Customer extends Component{

    constructor(props) {
        super(props);

        this.state={

        }

    }


    render() {
        let {classes} = this.props
        return(
            <div className={classes.container}>
                <Typography
                    variant="h3" gutterBottom
                    className={classes.header}
                    fontStyle

                >
                    <Box fontStyle="italic" m={1}>
                        Customer  Management System
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
                                    New Customer
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
                                            Add new Customer
                                        </Typography>

                                    </div>
                                    <div className={classes.formCustomer}>
                                        <TextField
                                            id="outlined-basic"
                                            label="Name"
                                            variant="outlined"
                                            // fullWidth
                                            size={"small"}
                                            style={{margin:"1%",
                                                width:"90%"}}

                                        />
                                        <TextField
                                            id="outlined-basic"
                                            label="Email"
                                            variant="outlined"
                                            //fullWidth
                                            size={"small"}
                                            style={{margin:"1%",
                                                width:"90%"}}

                                        />
                                        <div className={classes.formCustomer_gender} >
                                            <FormLabel component="legend">Gender</FormLabel>
                                            <RadioGroup
                                                aria-label="gender"
                                                name="gender1"
                                                value={this.state.value}
                                                onChange={(e)=>{
                                                    console.log(e.target.value);
                                                    let value = this.state.value;
                                                    value = e.target.value;
                                                    this.setState({value:value})



                                                }}

                                                className={classes.formCustomer_gender_part}
                                            >
                                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                <FormControlLabel value="male" control={<Radio />} label="Male" />

                                            </RadioGroup>

                                        </div>
                                        <div className={classes.formCustomer_gender}>
                                            <FormLabel component="legend">Status</FormLabel>
                                            <RadioGroup
                                                aria-label="gender"
                                                name="gender1"
                                                value={this.state.male}
                                                onChange={(e)=>{
                                                    console.log(e.target.value);

                                                }}
                                                className={classes.formCustomer_gender_part}
                                            >
                                                <FormControlLabel value="active" control={<Radio />} label="active"
                                                                  style={{marginLeft:"1%"}}

                                                />
                                                <FormControlLabel value="inactive" control={<Radio />} label="inactive"
                                                                  style={{marginLeft:"-2%"}}
                                                />

                                            </RadioGroup>
                                        </div>

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



                </div>



            </div>



        )
    }


}


export default withStyles (styleSheet)(Customer);