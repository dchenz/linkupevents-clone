import { Close, Settings } from "@mui/icons-material";
import { Box, Divider, Modal } from "@mui/material";
import React, { useContext } from "react";
import IconButton from "../../components/IconButton";
import CalendarContext, { setModalOpen } from "./Context/CalendarContext";
import "./styles.css";
import TimetableUpload from "./TimetableUpload";

export default function SettingsModal() {
  const { calendar, setCalendar } = useContext(CalendarContext);

  return (
    <React.Fragment>
      <Modal
        open={calendar.isModalOpen}
        onClose={() => setModalOpen(setCalendar, false)}
      >
        <Box className="content-modal">
          <Box className="content-modal-header">
            <IconButton onClick={() => setModalOpen(setCalendar, false)}>
              <Close />
            </IconButton>
          </Box>
          <Divider />
          <Box className="content-modal-body">
            <TimetableUpload />
          </Box>
        </Box>
      </Modal>
      <IconButton onClick={() => setModalOpen(setCalendar, true)}>
        <Settings />
      </IconButton>
    </React.Fragment>
  );
}