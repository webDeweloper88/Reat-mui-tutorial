import { Box, MenuItem, Stack, TextField } from "@mui/material";
import { useState } from "react";

export const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);
  const [country, setCountry] = useState("");

  const handleCountry = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string);
  };
  const handleCountries = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <>
      <Stack spacing={4}>
        <Stack spacing={2} direction="row">
          <Box width="250px">
            <TextField
              label="Mamlakatlarni tanlang"
              select
              fullWidth
              value={countries}
              onChange={handleCountries}
              SelectProps={{
                multiple: true,
              }}
              size="small"
              color="primary"
              helperText="Mamlakatlarni tanlang"
            >
              <MenuItem value="us">USA</MenuItem>
              <MenuItem value="IN">India</MenuItem>
              <MenuItem value="UZ">Uzbekistan</MenuItem>
            </TextField>
          </Box>
          <Box width="250px">
            <TextField
              label="Mamlakatni tanlang"
              select
              fullWidth
              value={country}
              onChange={handleCountry}
            >
              <MenuItem value="us">USA</MenuItem>
              <MenuItem value="IN">India</MenuItem>
              <MenuItem value="UZ">Uzbekistan</MenuItem>
            </TextField>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};
