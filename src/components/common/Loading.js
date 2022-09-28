import React from 'react';

import { Dialog } from 'primereact/dialog';
import { ProgressSpinner } from 'primereact/progressspinner';

export const Loading = (props) => {
    const { onHide } = props;

    return (
        <Dialog
            {...props} showHeader={false} resizable={false} focusOnShow={false}
            style={{ width: '20vw', height: '20vw', background: 'rgba(0, 0, 0, 0.8) !important', opacity: 1}}
            modal
            onHide={onHide}
            className="transparent-dialog"
        >
            <ProgressSpinner />
        </Dialog>
    );
}