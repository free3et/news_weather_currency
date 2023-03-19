import { Grid, Box, Button, Typography, Modal } from "@mui/material";
import { VideoPlayer } from "../Player/Player";

import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  //bgcolor: "background.paper",
  //border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 1.5,
  p: 2,
  backgroundColor: "rgba(255, 255, 255, .95)",
};

export const VideoModal = ({ title, src, lessonId }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="outlined">
        Watch Video
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h4"
            color="primary"
            textAlign="center"
            mb="10px"
          >
            {title}
          </Typography>
          <Grid item>
            <VideoPlayer src={src} lessonId={lessonId} />
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};
