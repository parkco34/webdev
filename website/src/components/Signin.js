import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import {withStyles} from '@material-ui/core/styles';
import LoginButton from './clicks/LoginButton';
import Login from './Login';
import './MandroidBB.css';

const styles = theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 'calc(10px + 2vmin)',

		'& .signin': {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			jusfityContent: 'center',
			fontSize: 'calc(10px + 2vmin)',
			margin: '15%',
		},
        '& .submit-btn': {
            fontSize: 'calc(10px + 2vmin)'
        },
        '& .register': {
            display: 'flex',
            color: 'black',
            textDecoration: 'underline',
            zIndex: '0',
            fontSize: '15px',
        },
        '& a:link, a:visited': {
            color: 'grey',
        },
	},
});

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            message: "",
            open: false,
            member: true,
        };
    }

    setEmail = event => {
        this.setState({
            email: event.target.value
        });
    };

    setPassword = event => {
        this.setState({
            password: event.target.value
        });
    };

    handleMember = () => {
        this.setState({
            member: true
        });
    };

    handleClose = () => {
        this.setState({
            open: false
        });
    };

    render() {
		const {classes} = this.props;

        return (
            <div className="signin-container">
                <header className={classes.root}>
                    <form className="signin">
                        <TextField
                            variant="standard"
                            placeholder="Email"
                            margin="normal"
                            required
                            onChange={this.setEmail}
                            value={this.state.email}
                            style={{fontFamily: 'MandroidBB'}}
                        />

                        <TextField
                            variant="standard"
                            placeholder="Password"
                            margin="normal"
                            required
                            onChange={this.setPassword}
                            value={this.state.password}
                            style={{fontFamily: 'MandroidBB'}}
                        />

                        <button style={{fontFamily: 'MandroidBB'}} type="button" className="submit-btn">
                            {this.state.member ? (
                                <LoginButton title="Submit" />
                            ) : (
                                <Signin />
                            )}
                        </button>
                        <div className="register">
                            <span id="register-link"><a href="#" onClick={this.handleMember}>Not a Member?</a></span>
                        </div>
                    </form>

                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">Sign In</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                {this.state.message}
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Okay
                            </Button>
                        </DialogActions>
                    </Dialog>
                </header>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Signin);

