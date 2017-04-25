import React from 'react';
import { List, ListItem, Subheader, Checkbox, Toggle, Divider } from 'material-ui';


const Setting = () => {
    return <List>
        <Subheader>账号设置</Subheader>
        <ListItem primaryText="消息提醒" />
        <Divider />
        <ListItem primaryText="隐私" />
        <Divider />
        <ListItem primaryText="通用" />
        <Divider />
        <ListItem primaryText="关于" />
        <ListItem primaryText="退出" />
        <ListItem
            rightToggle={<Toggle />}
            primaryText="勿扰模式"
            secondaryText="开启后，收到的新消息不会响铃和震动"
        />
        <ListItem
            rightToggle={<Toggle />}
            primaryText="自动更新"
            secondaryText="所有通知声音"
        />
        <ListItem
            leftCheckbox={<Toggle />}
            primaryText="Notifications"
            secondaryText="Allow notifications"
        />
    </List>
}
export default Setting;