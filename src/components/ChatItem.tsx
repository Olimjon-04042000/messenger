


import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Person from '@mui/icons-material/Person';
import { Divider } from '@mui/material';

const ChatItem = () => {
  return (
      <>
      <ListItem sx={{cursor:"pointer"}}>
        <ListItemAvatar>
          <Avatar>
            <Person />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Alex" secondary="Jan 9, 2014" />
      </ListItem>
      <Divider/>
      </>
  );
};

export default ChatItem;
