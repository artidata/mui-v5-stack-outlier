import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

export default function BasicStack() {
  return (
    <div>
      <Stack spacing={2}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Item
          sx={{
            bgcolor: "#000",
            color: "#fff",
            "&&": {
              mt: 5
            }
          }}
        >
          Item 4
        </Item>
        <Item>Item 5</Item>
      </Stack>
    </div>
  );
}
