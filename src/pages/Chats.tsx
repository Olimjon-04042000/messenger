import { Box, Grid, Paper, TextField } from "@mui/material";
import ChatItem from "../components/ChatItem";
import List from "@mui/material/List";
import { Message, Send } from "@mui/icons-material";

const Chats = () => {
  return (
    <Grid container>
      <Grid item sm={4}>
        <List>
          <ChatItem />
          <ChatItem />
          <ChatItem />
        </List>
      </Grid>
      <Grid item sm={8} pb={2} height={"100vh"} display={"flex"}
      flexDirection={"column"} justifyContent={"space-between"}>
        <Paper>
          <Box p={2}>Alex</Box>
        </Paper>
        <Box display={"flex"} alignItems={"center"} gap={2}>
          <TextField sx={{width:"90%"}} placeholder="Send message ..."/>
          <Send  sx={{color:"#1769aa"}}/>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Chats;
