import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {styleSheet} from "./style";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SimpleMenu from "./menu/index"
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import  customer from "../../assets/img/c1.png"
import  item from "../../assets/img/i1.png"
import  order from "../../assets/img/o1.png"



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


                <div className={classes.container_card}>
                    <div className={classes.cards}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image= {customer}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        customer
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                   go to customer page
                                </Button>
                            </CardActions>
                        </Card>
                    </div>

                    <div className={classes.cards}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image= {item}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        item
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                   go to item page
                                </Button>
                            </CardActions>
                        </Card>
                    </div>

                    <div className={classes.cards}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image= {order}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        order
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                     go to order Page
                                </Button>
                            </CardActions>
                        </Card>
                    </div>




                </div>






            </div>




        )
    }

}


export default withStyles (styleSheet)(Home)

