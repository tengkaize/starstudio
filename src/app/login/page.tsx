import { AccountCircle, Login, Password } from "@mui/icons-material";
import {
  Button,
  TextField,
  Box,
  FormControl,
  InputAdornment,
} from "@mui/material";

export default function LoginPage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        label="Account"
      />
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Password />
            </InputAdornment>
          ),
        }}
        label="Password"
        type="password"
      />
      <Button variant="outlined" startIcon={<Login />}>
        Login
      </Button>
    </Box>
  );
}
