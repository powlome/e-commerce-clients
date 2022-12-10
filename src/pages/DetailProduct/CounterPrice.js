import AddIcon from "@mui/icons-material/Add";
import MinimizeIcon from "@mui/icons-material/Minimize";
import { Box, Typography } from "@mui/material";
import React from "react";

const CounterPrice = ({ disabledButton, setCount, count, totalPrice }) => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pt: 1,
          pr: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <span
            onClick={() => setCount(count + 1)}
            style={{
              width: "30px",
              height: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#f5841a",
              fontSize: "1rem",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            <AddIcon />
          </span>
          <Typography sx={{ px: 2 }} variant="h6" gutterBottom>
            {count}
          </Typography>
          <span
            onClick={() => setCount(disabledButton ? count : count - 1)}
            style={{
              width: "30px",
              height: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: disabledButton ? "#666" : "#f5841a",
              fontSize: "1rem",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            <MinimizeIcon />
          </span>
        </Box>
        <Box>
          <Typography variant="h6" gutterBottom>
            ${totalPrice}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default CounterPrice;
