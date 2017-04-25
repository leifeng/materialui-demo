import React, { PureComponent } from 'react';
import { IconMenu, IconButton, MenuItem, AppBar, Drawer } from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

import { withRouter } from 'react-router';

class Header extends PureComponent {
    constructor() {
        super();
        this.state = {
            open: false
        }
    }
    onLeftIconButtonTouchTap = () => {
        this.setState({ open: true })
    }
    onItemTouchTap = (e, child) => {
        const { history } = this.props;
        history.push(child.props.value)
    }
    onBack = () => {
        const { history } = this.props;
        history.goBack()
    }
    handleClose = () => {
        this.setState({ open: false })
    }
    render() {
        var isIndex = this.props.history.location.pathname === '/index';
        return (
            <div>
                <AppBar
                    title="Title"
                    onLeftIconButtonTouchTap={isIndex ? this.onLeftIconButtonTouchTap : this.onBack}
                    iconElementLeft={<IconButton>{isIndex ? <NavigationMenu/> : <NavigationArrowBack />}</IconButton>}

                    iconElementRight={
                        <IconMenu
                            onItemTouchTap={this.onItemTouchTap}
                            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                        >

                            <MenuItem primaryText="我的" value="/my" />
                            <MenuItem primaryText="退出" value="/logout" />
                            <MenuItem primaryText="2323" value="/my/setting" />
                        </IconMenu>
                    }
                />
                <Drawer
                    docked={false}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({ open })}
                >
                    <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        )
    }
}

export default withRouter(Header);