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

		'& .signin': {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			jusfityContent: 'center',
			margin: '15%',
		},
        '& .submit-btn': {
            fontSize: 'calc(10px + 2vmin)',
			padding: '10px 10px 20px 10px',
        },
		'& .submit-btn:hover': {
			cursor: 'pointer',
		},
        '& .register': {
            display: 'flex',
            color: 'black',
            textDecoration: 'underline',
            zIndex: '0',
            fontSize: '15px',
        },
        '& .register-link': {
            zINdex: '0',
        },
        '& a:link, a:visited': {
            color: 'grey',
			zIndex: '0',
			textDecoration: 'underline',
        },
		'& .member': {
			zIndex: '0',
			textDecoration: 'underline',
			color: 'grey',
			cursor: 'pointer',
		},
		'& .member:hover': {
			cursor: 'pointer',
		},
		'& .disappear': {
            visibility: 'hidden',
		},
	},
});

class Signin extends Component {
    constructor(props) {
        super(props);
		this.handleMember = this.handleMember.bind(this);
		this.setEmail = this.setEmail.bind(this);
		this.setPassword = this.setPassword.bind(this);
		this.handleClose = this.handleClose.bind(this);

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
            member: !this.state.member
        });
    };

    handleClose = () => {
        this.setState({
            open: false
        });
    };

    render() {
		const {classes} = this.props;
        const isMember = this.state.member;

        let button;
        if (isMember) {
            button = <LoginButton title="Submit" />;
        }
        else {
            button = <Login />;
        }

        return (
            <div className="signin-container">
                <header className={classes.root}>
                    <form className="signin">
                        <TextField
							className={this.state.member ? "" : "disappear"}
                            variant="standard"
                            placeholder="Email"
                            margin="normal"
                            required
                            onChange={this.setEmail}
                            value={this.state.email}
                            style={{fontFamily: 'MandroidBB'}}
                        />

                        <TextField
							className={this.state.member ? "" : "disappear"}
                            variant="standard"
                            placeholder="Password"
                            margin="normal"
                            required
                            onChange={this.setPassword}
                            value={this.state.password}
                            style={{fontFamily: 'MandroidBB'}}
                        />
                        <button type="button" className="submit-btn" style={{fontFamily: "MandroidBB"}}>
                            {button}
                        </button>
                        <div
							className="member"
                            onClick={this.handleMember}
                        >
							{this.state.member ? "Not a Member?" : "Signin"}
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


