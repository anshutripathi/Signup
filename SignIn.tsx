import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
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
        title: 'SIGN UP',
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
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            
        },
        paper: {
            margin: theme.spacing(8, 4),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
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
            backgroundPosition: 'center 40%',
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
            margin: theme.spacing(60),
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
            <Grid item xs={false} sm={4} md={12} className={classes.image} >
            <Grid item xs={10} sm={5} md={5} className={classes.frame} component={Paper} elevation={6} square>
                {images.map((image) => (
                <Link href="https://www.google.com" > <ButtonBase
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


           
            
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        LOGIN
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
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
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
                        <FormControlLabel
                            control={<Checkbox value="remember" style={{color:'orange'}}  />}
                            label="Remember me"
                        />
                            <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={{backgroundColor:'orange'}}
                            className={classes.submit}
                        >LOGIN
                        </Button>

                        <Grid container >
                            <Grid item xs>
                                <Link href="#" variant="body2" style={{color:'white'}}>
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                            <Link href="#" variant="body2" style={{color:'white'}}>
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
        </Grid>
    );
}