import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FunctionsIcon from '@material-ui/icons/Functions';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Typography from '@material-ui/core/Typography';
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import ButtonBase from "@material-ui/core/ButtonBase";
import { orange } from '@material-ui/core/colors';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const images = [
    {
        alignItems :"center",
        title: 'SIGN IN',
        width: '40%',
    },
];
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    multilineColor:{
        color:'white',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: "auto",
        backgroundPosition: "-moz-initial",
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(2,0,2),
        backgroundColor:'orange',

    },

    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: "orange",
    },

    image1: {
        position: 'absolute',
        top:'440px',
        right:'300px',
        left:'100px',
        height: 200,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 10%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },

    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
    ButtonBase: {
        alignItems:'center',
    },
    frame: {
        backgroundColor: 'black',
        color:'white',
    },
    r: {
        '& label': {
            color: 'white',
        },
        '& label.Mui-focused': {
            color: 'orange',
        },
    },
    Checkbox: {
        backgroundColor:"black",
    }

}));

const theme = createMuiTheme({
    palette: {
        primary: orange,
    },
});

export default function SignIn() {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={2} md={8} className={classes.image} >

                {images.map((image) => (
                    <Link href="https://www.youtube.com/" > <ButtonBase
                        focusRipple
                        key={image.title}
                        className={classes.image1}
                        focusVisibleClassName={classes.focusVisible}
                        style={{
                            width: image.width,
                        }}
                    >
                    <span
                        className={classes.imageSrc}
                        style={{
                            backgroundImage: "inherit",
                        }}
                    />
                        <span className={classes.imageBackdrop} />
                        <span className={classes.imageButton}>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            className={classes.imageTitle}
                        >
                            {image.title}
                            <span className={classes.imageMarked} />
                        </Typography>
                    </span>
                    </ButtonBase> </Link>
                ))},


            </Grid>
            <Grid item xs={12} sm={8} md={4} className={classes.frame} component={Paper} elevation={4} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
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
                                id="email"
                                InputProps={{
                                    className: classes.multilineColor
                                }}
                                label="Full Name"
                                name="full name"
                                autoComplete="fullname "
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
                        </ThemeProvider>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={{backgroundColor:'orange'}}
                            className={classes.submit}
                        >
                            SIGNUP

                        </Button>

                        <Grid container >

                            <Grid item>
                                <Link href="#" variant="body2" style={{color:'white'}}>
                                    {"Already have an account? Sign In"}
                                </Link>
                            </Grid>

                        </Grid>
                        <Avatar    className={classes.avatar}>
                            <FunctionsIcon/>
                        </Avatar>
                        <Avatar    className={classes.avatar}>
                            <GitHubIcon/>
                        </Avatar>
                        <Avatar className={classes.avatar}>
                            <LinkedInIcon/>
                        </Avatar>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}