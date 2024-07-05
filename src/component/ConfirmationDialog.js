import React, { useContext } from "react";
import {
  Typography,
  Dialog,
  DialogContent,
  Button,
  Box,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { AuthContext } from "src/context/Auth";
import ButtonCircularProgress from "./ButtonCircularProgress";

export default function AlertDialog({
  title,
  desc,
  isLoading,
  productName,
  open,
  handleClose,
  productData,
  deleteProductHandler,
  deleteServiceHandler,
}) {
  const history = useHistory();

  const auth = useContext(AuthContext);

  const logoutHandler = () => {
    history.push("/");
    auth.userLogIn(false, null);
    window.sessionStorage.removeItem("token");
  };
  return (
    <div>
      {title === "Logout" ? (
        <Dialog
          open={open}
          onClose={() => {
            if (!isLoading) {
              handleClose();
            }
          }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullWidth
          maxWidth="xs"
        >
          <DialogContent>
            <Box align="center">
              <Typography
                variant="h3"
                style={{ color: "#FFFFFF", fontSize: "25px" }}
              >
                {title}
              </Typography>
            </Box>
            <Typography
              variant="h5"
              style={{
                color: "#FFFFFF",
                fontSize: "16px",
                margin: "20px 0px",
                textAlign: "center",
              }}
            >
              {desc}
            </Typography>
            <Box mb={2} align="center">
              <Button
                disabled={isLoading}
                variant="contained"
                color="secondary"
                onClick={handleClose}
                style={{ padding: "7px 23px" }}
              >
                Cancel
              </Button>
              <Button
                disabled={isLoading}
                style={{ marginLeft: "13px", padding: "7px 20px" }}
                variant="outlined"
                color="primary"
                onClick={logoutHandler}
              >
                Confirm {isLoading && <ButtonCircularProgress />}
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      ) : (
        <Dialog
          open={open}
          onClose={() => {
            if (!isLoading) {
              handleClose();
            }
          }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullWidth
          maxWidth="xs"
        >
          <DialogContent>
            <Box align="center">
              <Typography variant="h3" style={{ color: "#FFFFFF" }}>
                {title}
              </Typography>
            </Box>
            <Box my={3} align="center">
              <Typography variant="h6" style={{ color: "#FFFFFF" }}>
                {desc}
              </Typography>
            </Box>
            <Box mb={2} align="center">
              <Button
                disabled={isLoading}
                variant="contained"
                color="secondary"
                onClick={handleClose}
                style={{ padding: "7px 23px" }}
              >
                Cancel
              </Button>
              <Button
                disabled={isLoading}
                style={{ marginLeft: "13px", padding: "7px 20px" }}
                variant="outlined"
                color="primary"
                onClick={() => {
                  if (productName === "Product") {
                    deleteProductHandler(productData?._id);
                  }
                  if (productName === "Service") {
                    deleteServiceHandler(productData?._id);
                  }
                }}
              >
                Confirm {isLoading && <ButtonCircularProgress />}
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
