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
        focusVisible: {},
        frame: {
            margin: theme.spacing(60),
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

export default function SignIn() {
    const classes = useStyles();

    return (
        <Grid container  className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={12} className={classes.image} >
            <Grid item xs={10} sm={5} md={5} className={classes.frame} component={Paper} elevation={6} square>
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
                        <Link href="https://www.google.com">
                            <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={{backgroundColor:'orange'}}
                            className={classes.submit}
                        >LOGIN
                        </Button></Link>

                        <Grid container >
                            <Grid item xs>
                                <Link href="https://www.google.com" variant="body2" style={{color:'white'}}>
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Typography>Don't have an account? </Typography>  
                                <Link href="#" variant="body2" style={{color:'white'}}>
                                        { " Sign Up "}
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