import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CloseIcon from "@mui/icons-material/Close";

interface IBasicModal {
  open: boolean;
  hideClose?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export function BasicModal({
  open,
  onClose,
  children,
  hideClose,
}: IBasicModal) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style} className="w-[700px]">
          {!hideClose && (
            <div className="flex justify-end mt-[-10px] mr-[-12px]">
              <span onClick={onClose}>
                <CloseIcon className="cursor-pointer" />
              </span>
            </div>
          )}
          {children}
        </Box>
      </Fade>
    </Modal>
  );
}
