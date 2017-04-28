/**
 * @author arman
 * @since 12/29/16
 *
 */

import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const Open = ({handleOpen}) => {
    return (
        <div className="open-file">
            <FloatingActionButton onClick={handleOpen} mini={true}>
                <ContentAdd />
            </FloatingActionButton>
        </div>
    )
};

export default Open;
