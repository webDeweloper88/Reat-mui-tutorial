import { Button, Stack, IconButton, ButtonGroup, Typography, ToggleButtonGroup, ToggleButton } from "@mui/material"
import { useState } from "react";
import { Send, FormatBold, FormatItalic, FormatUnderlined } from '@mui/icons-material';

const MuiButton = () => {
  const [formats, setFormats] = useState<string[]>([])
  console.log({ formats, })

  const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
    setFormats(updatedFormats)
  }
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction='row'>
        <Button variant="text" href="https://google.com">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} direction='row'>
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button variant="contained" color="error">Error</Button>
        <Button variant="contained" color="warning">Warning</Button>
        <Button variant="contained" color="info">Info</Button>
        <Button variant="contained" color="success">Succsess</Button>
      </Stack>
      <Stack spacing={2} direction='row' display='block'>
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="medium">Medium</Button>
        <Button variant="contained" size="large">Large</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<Send />} disableRipple onClick={() => alert('Cliced')}>Send</Button>
        <Button variant="contained" endIcon={<Send />} disableElevation>Send</Button>
        <IconButton aria-label="sent" color="success" size="large">
          <Send />
        </IconButton>
      </Stack>
      <Stack spacing={2} direction='row' alignItems='center'>
        <Typography variant="h5">ButtonGroup</Typography>
        <ButtonGroup variant="contained" orientation="vertical" size="small" color="secondary" aria-aria-label="aligment-button-group">
          <Button onClick={() => alert('Cliced left Button')}>Left</Button>
          <Button onClick={() => alert('Cliced center Button')}>Center</Button>
          <Button onClick={() => alert('Cliced Right Button')}>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction='row'>
        <ToggleButtonGroup aria-label="Text-formating" value={formats} onChange={handleFormatChange} size="small" color="info" orientation="vertical">
          <ToggleButton value='bold' aria-label="bold"><FormatBold /></ToggleButton>
          <ToggleButton value='italic' aria-label="italic"><FormatItalic /></ToggleButton>
          <ToggleButton value='underlined' aria-label="underline"><FormatUnderlined /></ToggleButton>
        </ToggleButtonGroup>
      </Stack>

    </Stack>
  )
}

export default MuiButton