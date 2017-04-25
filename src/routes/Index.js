import React from 'react';
import { FlatButton, RaisedButton, FloatingActionButton, IconButton, Dialog } from 'material-ui'
import ActionAndroid from 'material-ui/svg-icons/action/android';
import ActionAccessibility from 'material-ui/svg-icons/action/accessibility';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ActionHome from 'material-ui/svg-icons/action/home';

import { fullWhite } from 'material-ui/styles/colors';
class Index extends React.PureComponent {
    state = {
        open: false,
    }
    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
            />,
        ];
        return <div>
            <FlatButton label="Default" icon={<ActionAndroid />} onTouchTap={this.handleOpen} />
      

            <Dialog
                title="Dialog With Actions"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
            >
                The actions in fasdfthdis window were passed in as an array of React objects.
        </Dialog>
        </div>
    }
}

export default Index;
