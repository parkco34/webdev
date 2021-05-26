import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import LoginBox from './LoginBox';

const ModalDialog = ({open, handleClose}) => {
	return (
		<Dialog open={open} onClose={handleClose}>
			<LoginBox handleClose={handleClose} />
		</Dialog>
	);
};

export default ModalDialog;
