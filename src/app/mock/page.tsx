"use client";

import { useEffect, useState } from "react";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

type User = {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
};

export default function MockPage() {
  const [users, setUsers] = useState<User[] | null>(null);
  useEffect(() => {
    fetch("https://631333b8a8d3f673ffc6500b.mockapi.io/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);
  if (!users) return <Typography>Loading...</Typography>;
  return (
    <List>
      {users.map(({ name, avatar, id, createdAt }) => (
        <ListItem key={id}>
          <ListItemAvatar>
            <Avatar alt={name} src={avatar} />
          </ListItemAvatar>
          <ListItemText primary={name} secondary={new Date(createdAt).toLocaleDateString()} />
        </ListItem>
      ))}
    </List>
  );
}
