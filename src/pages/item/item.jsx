import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {styleSheet} from "./style";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

class Item extends Component{

    constructor(props) {
        super(props);
    }










    render() {


        let {classes} = this.props;



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
            </div>


                )
    }

}


export  default withStyles (styleSheet)(Item)