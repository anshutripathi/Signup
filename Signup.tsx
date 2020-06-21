import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import FunctionsIcon from '@material-ui/icons/Functions';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Typography from '@material-ui/core/Typography';
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';

import { orange } from '@material-ui/core/colors';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">

        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {

        height: '100vh',
    },
    multilineColor:{
        color:'white',
    },

    paper: {

        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },

    ava1: {
        margin: theme.spacing(10),
        display: 'flex',
        '& > *': {
            margin: theme.spacing(6),
            color: 'orange',
        },
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "orange",
        alignItems: 'center center',
    },

    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: "orange",
    },
    focusVisible: {},
    frame: {
        margin: theme.spacing(50),
        backgroundColor: 'black',
        color:'white',
        opacity:1,
    },
    r: {
        '& label': {
            color: 'white',
        },
        '& label.Mui-focused': {
            color: 'orange',
        },
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: orange,
    },
});

export default function SignUp() {
    const classes = useStyles();

    return (
        <Grid container  className={classes.root}>
            <CssBaseline />

                <Grid item  className={classes.frame} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <InsertEmoticonIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            SIGN UP
                        </Typography>
                        <form className={classes.form} noValidate >
                            <ThemeProvider theme={theme}>
                                <TextField
                                    variant="outlined"
                                    className={classes.r}
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="full name"
                                    InputProps={{
                                        className: classes.multilineColor
                                    }}
                                    label="Full Name"
                                    name="full name"
                                    autoComplete="full name"
                                    autoFocus
                                />
                                <TextField
                                    variant="outlined"
                                    className={classes.r}
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    InputProps={{
                                        className: classes.multilineColor
                                    }}
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />

                                <TextField
                                    variant="outlined"
                                    className={classes.r}
                                    margin="normal"
                                    required
                                    fullWidth
                                    InputProps={{
                                        className: classes.multilineColor
                                    }}
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                <TextField
                                    variant="outlined"
                                    className={classes.r}
                                    margin="normal"
                                    required
                                    fullWidth
                                    InputProps={{
                                        className: classes.multilineColor
                                    }}
                                    name="confirm password"
                                    label="confirm password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </ThemeProvider>

                            <Link href="https://www.google.com">
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    style={{backgroundColor:'orange'}}
                                    className={classes.submit}
                                >SIGNUP
                                </Button></Link>

                            <Grid container >

                                <Grid item>
                                    <Typography>Already have an account? </Typography>
                                    <Link href="#" variant="body2" style={{color:'white'}}>
                                        { " Sign In "}
                                    </Link>

                                </Grid>
                            </Grid>
                            <Grid className={classes.ava1}>
                                <Link href="https://accounts.google.com/AddSession?hl=en&continue=https://www.google.co.in/"><FunctionsIcon /></Link>
                                <Link href="https://github.com/login"><GitHubIcon /></Link>
                                <Link href="https://www.linkedin.com/login"><LinkedInIcon /></Link>
                            </Grid>
                            <Box mt={5}>
                                <Copyright />
                            </Box>
                        </form>
                    </div>
                </Grid>

        </Grid>
    );
}