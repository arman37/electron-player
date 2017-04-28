/**
 * @author arman
 * @since 12/31/2016
 *
 */

import React from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const AddLibrary = ({dialogOpen, handleClose, searchPathList, addPath, clearPath}) => {
    const actions = [
        <FlatButton
            label="Add Directory"
            primary={true}
            keyboardFocused={true}
            onClick={addPath.bind(null)} />,
        <FlatButton
            label="Clear"
            primary={true}
            onClick={clearPath.bind(null)} />,
        <FlatButton
            label="OK"
            primary={true}
            onClick={handleClose.bind(null, false)} />
    ];

    return (
        <div className="form-dialog">
            <Dialog
                title="Dialog With Actions"
                actions={actions}
                modal={false}
                open={dialogOpen}
            >
                <TextField
                    value={searchPathList.toJS()}
                    disabled={true}
                    hintText="Path list to search for music..."
                    floatingLabelText="Path list to search for music..."
                    multiLine={true}
                    rows={5}
                /><br />
            </Dialog>
        </div>
    )
};

export default AddLibrary;
