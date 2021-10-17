import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 10,
        maxWidth: 800,
        minWidth: 600,
        background: 'lightyellow',
    },
    image: {
        width: 200,
        height: 200,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

function Greeting(props) {
    const isVoted = (props.vote === "heaven");
    if (isVoted) {
        return <Heaven/>;
    }
    return <Hell/>;
}

function Hell(props) {
    return "INFIERNO!";
}

function Heaven(props) {
    return "CIELO!";
}

export default function TestimonyCard(props) {
    const classes = useStyles();
    const [testimony, setTestimony] = React.useState({...props.testimony});

    React.useEffect(() => {
        setTestimony(props.testimony);
    }, [props.testimony])


    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={testimony.imageUrl}/>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    Hola soy {testimony.name},
                                </Typography>
                                <Typography gutterBottom variant="subtitle1">
                                    De Raúl os puedo contar que...
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="subtitle1" gutterBottom>
                                    {testimony.message}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1" style={{cursor: 'pointer'}}>
                                    ...y por eso quiero que vaya al <Greeting vote={testimony.vote}/>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
