import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import {Icon} from '@iconify/react';
import quoteLeft from '@iconify-icons/fa/quote-left';
import quoteRight from '@iconify-icons/fa/quote-right';
import heaven from '../images/heaven.png';
import hell from '../images/hell.png';
import heavenBg from '../images/heaven.jpg';
import hellBg from '../images/hell.jpg';

const useStyles = makeStyles({
    root: {
        maxWidth: 280,
        width: 280,
    },
    media: {
        height: 250,
    },
    heaven: {
        width: 40,
        height: 40,
    },
    hell: {
        width: 60,
        height: 60,
    },
    footer: {
        flexGrow: 1,
    },
    heavenBg: {
        backgroundImage: `url(${heavenBg})`,
    },
    hellBg: {
        backgroundImage: `url(${hellBg})`,
    },
});

export default function MediaCard(props) {
    const classes = useStyles();

    const [testimony, setTestimony] = React.useState({...props.testimony});

    React.useEffect(() => {
        setTestimony(props.testimony);
    }, [props.testimony])


    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={testimony.imageUrl}
                />
                <CardContent className={`${(testimony.vote === "heaven") ? classes.heavenBg : classes.hellBg}`}>
                    <div className={classes.footer}>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="row" spacing={2} justify="center"
                                  alignItems="center">
                                {testimony.vote === "heaven" &&
                                <Grid item xs={2}>
                                    <img src={heaven} alt="Heaven" className={classes.heaven}/>
                                </Grid>
                                }
                                <Grid item xs={10}>
                                    <Typography gutterBottom variant="h4" component="h2">
                                        {testimony.name}
                                    </Typography>
                                    <Typography variant="body1" color="textPrimary" component="p">
                                        <Icon icon={quoteLeft}/>
                                        {' '}{testimony.message}{' '}
                                        <Icon icon={quoteRight}/>
                                    </Typography>
                                </Grid>
                                {testimony.vote === "hell" &&
                                <Grid item xs={2}>
                                    <img src={hell} alt="Hell" className={classes.hell}/>
                                </Grid>
                                }
                            </Grid>
                        </Grid>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
