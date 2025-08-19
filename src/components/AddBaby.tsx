import React, { useState } from "react";
import { Button, TextField, MenuItem } from "@mui/material";

const AddBaby: React.FC = () => {
  const [formData, setFormData] = useState({
    babyName: "",
    parentName: "",
    contactNumber: "",
    bloodType: "",
    birthWeight: "",
    birthDate: "",
    gender: "",
    incubatorNumber: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <div style={{ width: "100%", maxWidth: "1300px", background: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
        <h2 style={{ marginBottom: "20px" }}>Add Baby</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          <TextField
            label="Baby Name"
            name="babyName"
            value={formData.babyName}
            onChange={handleChange}
            fullWidth
            style={{ flex: "1 1 45%" }}
          />
          <TextField
            label="Parent's Name"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            fullWidth
            style={{ flex: "1 1 45%" }}
          />
          <TextField
            label="Contact Number"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            fullWidth
            style={{ flex: "1 1 45%" }}
          />
          <TextField
            label="Blood Type"
            name="bloodType"
            value={formData.bloodType}
            onChange={handleChange}
            fullWidth
            style={{ flex: "1 1 45%" }}
          />
          <TextField
            label="Birth Weight (kg)"
            name="birthWeight"
            value={formData.birthWeight}
            onChange={handleChange}
            fullWidth
            style={{ flex: "1 1 45%" }}
          />
          <TextField
            label="Birth Date"
            name="birthDate"
            type="date"
            value={formData.birthDate}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
            style={{ flex: "1 1 45%" }}
          />
          <TextField
            label="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            select
            fullWidth
            style={{ flex: "1 1 45%" }}
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </TextField>
          <TextField
            label="Incubator Number"
            name="incubatorNumber"
            value={formData.incubatorNumber}
            onChange={handleChange}
            fullWidth
            style={{ flex: "1 1 45%" }}
          />
          <TextField
            label="Notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            multiline
            rows={3}
            fullWidth
            style={{ flex: "1 1 100%" }}
          />

          <Button type="submit" variant="contained" color="primary" style={{ marginTop: "20px" }}>
            Save
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddBaby;
