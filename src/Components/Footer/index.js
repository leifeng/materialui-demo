import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';
import { Paper, BottomNavigation, BottomNavigationItem } from 'material-ui'
import ActionFace from 'material-ui/svg-icons/action/face';
import ActionHome from 'material-ui/svg-icons/action/home';

import { white } from 'material-ui/styles/colors';
const styles = {
    position: 'fixed',
    bottom: 0
}
const Enum = {
    '/index': 0,
    '/list': 1,
    '/my': 2,
}
class Footer extends PureComponent {
    state = {
        selectedIndex: 0,
    };
    select = (index, url) => {
        this.props.history.push(url)
        this.setState({ selectedIndex: index });
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.history.location.pathname)
        this.setState({ selectedIndex: Enum[nextProps.history.location.pathname] });
    }
    render() {
        return (
            <div>
                <BottomNavigation selectedIndex={this.state.selectedIndex} style={styles}>
                    <BottomNavigationItem
                        label="首页"
                        icon={<ActionHome />}
                        onTouchTap={() => this.select(0, '/index')}
                    />
                    <BottomNavigationItem
                        label="列表"
                        icon={<ActionFace />}
                        onTouchTap={() => this.select(1, '/list')}
                    />
                    <BottomNavigationItem
                        label="我"
                        icon={<ActionFace />}
                        onTouchTap={() => this.select(2, '/my')}
                    />
                </BottomNavigation>
            </div>
        )
    }
}
export default withRouter(Footer);