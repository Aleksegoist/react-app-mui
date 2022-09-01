import { Box, Stack } from "@mui/system";
import Add from "./components/Add";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent='space-between'>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </Box >);
};

export default App;
