// MUI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { TextField, Button, MenuItem } from "@mui/material";
import { Formik } from "formik";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";

// Components
import Navbar from "../components/Navbar";
// import Authenticator from "../components/Authenticator";

const timeZones = ["GMT", "UTC", "EST", "CST", "MST", "PST", "AKST", "HST"];

const ScheduleNewMessagePage = () => {
  return (
    // <Authenticator>
    <div className="homePage">
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "90vh",
        }}
      >
        <Box
          sx={{
            width: "50%",
            padding: "2rem",
            backgroundColor: "white",
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
          <Formik
            initialValues={{
              message: "",
              title: "",
              timeZone: "CST",
            }}
            // onSubmit={(values) => {}}
          >
            {({
              values,
              handleChange,
              handleBlur,
              setFieldValue,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography variant="h4" align="center">
                      Schedule New Message
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      required
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="title"
                      label="Title"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      required
                      multiline
                      rows={4}
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="message"
                      label="Message"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterLuxon}>
                      <DateTimePicker
                        slotProps={{
                          textField: { fullWidth: true, required: true },
                        }}
                        label="Delivery Date"
                        required
                        value={values.deliveryDate}
                        onChange={(date) => setFieldValue("deliveryDate", date)}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      required
                      select
                      value={values.timeZone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="timeZone"
                      label="Time Zone"
                    >
                      {timeZones.map((zone) => (
                        <MenuItem key={zone} value={zone}>
                          {zone}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} align="center">
                    <Button type="submit" variant="contained" color="primary">
                      Schedule Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </Box>
      </Box>
    </div>
    // </Authenticator>
  );
};

export default ScheduleNewMessagePage;
