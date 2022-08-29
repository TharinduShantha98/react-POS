import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {styleSheet} from "./style";

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

            </div>
        )
    }


}


export default withStyles (styleSheet)(Customer);