import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { uploadFileToIPFS } from "./pinata";
import Evault from "./Evault.json";
function FormDialog({ signer }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState("");

  const ethers = require("ethers");
  // //After adding your Hardhat network to your metamask, this code will get providers and signers
  // const provider = new ethers.providers.BrowserProvider(window.ethereum);
  // const signer = provider.getSigner();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (event) => {
    // handle file upload
    event.preventDefault();
    try {
      const response = await uploadFileToIPFS(file);
      if (response.success) {
        setFileURL(response.pinataURL);
        console.log("Uploaded file to IPFS and received url", fileURL);
      }
    } catch (error) {
      console.log("Some error uloading file to IPFS", error);
    }
    try {
      const contract = new ethers.Contract(
        Evault.address,
        Evault.abi, //the abi
        signer
      );
      console.log(name, description, fileURL);
      let transaction = await contract.addEvidence(name, description, fileURL);
      console.log(transaction);

      await transaction.wait();
    } catch (e) {
      console.log(e);
    }
    // Close the dialog
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open Dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Form Dialog</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input type="file" accept="image/*" onChange={handleFileChange} />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            style={{ marginTop: "16px" }}
          >
            Submit
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default FormDialog;
