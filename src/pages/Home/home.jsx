import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {styleSheet} from "./style";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SimpleMenu from "./menu/index"




class Home extends Component{

    constructor(props) {
        super(props);



        this.state={
            setAnchorEl: 'null'
        }
    }




    render() {

        let {classes} = this.props;




        return(

            <div className={classes.constraint}>
                <Typography
                    variant="h3" gutterBottom
                    className={classes.header}
                    fontStyle

                >
                    <Box fontStyle="italic" m={1}>
                       Home
                    </Box>

                </Typography>


                <div className={classes.menu}>
                  <SimpleMenu/>
                </div>


            </div>



        )
    }

}


export default withStyles (styleSheet)(Home)

