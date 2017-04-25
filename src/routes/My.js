import React from 'react';
import { List, ListItem, Divider, Paper } from 'material-ui';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import { withRouter } from 'react-router'
const My = ({ history }) => {
    function goto(url) {
        return e => {
            history.push(url)
        }

    }
    return <List>
        <ListItem
            primaryText="张先生"
            secondaryText="ID:12400"
            leftIcon={<ActionAccountCircle />}
        />
        <Divider />
        <ListItem primaryText="设置"
            onTouchTap={goto('/my/setting')}
            leftIcon={<ActionSettings />} />
        <Divider />
    </List>
}
export default withRouter(My);