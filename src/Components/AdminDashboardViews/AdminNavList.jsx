import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ContactsIcon from '@mui/icons-material/Contacts';
import MessageIcon from '@mui/icons-material/Message';
import CollectionsIcon from '@mui/icons-material/Collections';
import BackupIcon from '@mui/icons-material/Backup';

export default function AdminNavList(props) {
    const {
        callback,
        index
    } = props


    return (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <ContactsIcon />
            </ListItemIcon>
            <ListItemText primary="Participants" />
        </ListItemButton>
        {/*<ListItemButton>*/}
        {/*    <ListItemIcon>*/}
        {/*        <MessageIcon />*/}
        {/*    </ListItemIcon>*/}
        {/*    <ListItemText primary="Messaging" />*/}
        {/*</ListItemButton>*/}
        {/*<ListItemButton>*/}
        {/*    <ListItemIcon>*/}
        {/*        <CollectionsIcon />*/}
        {/*    </ListItemIcon>*/}
        {/*    <ListItemText primary="Gallery" />*/}
        {/*</ListItemButton>*/}
        <ListItemButton>
            <ListItemIcon>
                <BackupIcon />
            </ListItemIcon>
            <ListItemText primary="Backups" />
        </ListItemButton>
    </React.Fragment>
)};

