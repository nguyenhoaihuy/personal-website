import React from 'react';
import {makeStyles,Grid,Card,CardActionArea,CardMedia,CardActions,CardContent,Button,Typography} from '@material-ui/core';
import * as Constants from '../theme';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginLeft: "5%",
      },
    title: {
        color: Constants.TITLE_COLOR,
        fontSize: "40px",
        marginLeft: "5%",
    },
    media: {
        height: "auto",
        marginLeft: "30px",
        marginBottom: "30px",
    }
}));
  
function Project() {
    const classes = useStyles();
    return (
      <div>
            <h2 className={classes.title}>PROJECT</h2>
            <div className={classes.root}>
                {/* row 1 */}
            <Grid container>
                <Grid className={classes.media} item sm={3}>
                <Card >
                    <CardActionArea>
                        <CardMedia
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Mini Slack
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Built a real time and bi-directional communication chat application to support users communicate via channels using React, Express, and Socket.io
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href="https://github.com/nguyenhoaihuy/mini-slack">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item className={classes.media} sm={3}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                        
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                        />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Hand Gesture recognition
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Hand Signs Recognition contains a tool to captures data from the machine's camera and model trained by the data.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href="https://github.com/nguyenhoaihuy/Hand-Signs-Recognition">
                            Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item className={classes.media} sm={3}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                        
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                        />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Neuroevolution Flappy Bird
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Developed Neuron Network class and applied Genetic Algorithm to automatically play Flappy Bird game using Python
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href="https://github.com/nguyenhoaihuy/Neuroevolution-Flappy-Bird">
                            Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item sm={3}></Grid>
            </Grid>
            {/* row 2 */}
            <Grid container>
                <Grid className={classes.media} item sm={3}>
                <Card >
                    <CardActionArea>
                        <CardMedia
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Temperature Logger
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Programmed BeagleBone Green Kit to read temperature sensor and store data in remote server via TCP and TLS protocols
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href="https://github.com/nguyenhoaihuy/Temperature-Logger">
                            Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item className={classes.media} sm={3}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                        
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                        />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Trading Bot
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                A bot can automatically trade stock based on RSI and MACD indicators using Python open source libraries pandas and numpy
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href="https://github.com/nguyenhoaihuy/trading-bot">
                            Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item className={classes.media} sm={3}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                        
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                        />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Cyber Defenders Research
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            We have aquired permission from Mike Sconzo, owner of secrepo.com, to use his security datasets to analyze and report on the data
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href="https://github.com/cyberdefendersprogram/MachineLearning">
                            Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item sm={3}></Grid>
            </Grid>

            {/* row 3 */}
            <Grid container>
                <Grid className={classes.media} item sm={3}>
                    <Card >
                        <CardActionArea>
                        <CardMedia
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            RSLK Line Follower
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Programmed TI-RSLK robot to follow various paths and improved the speed to 2ft/s by applying PID Algorithm (C++, Energia IDE)
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Share
                            </Button>
                            <Button size="small" color="primary">
                            Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                
            </Grid>
                
            </div>

      </div>
    );
  }
  
  export default Project;