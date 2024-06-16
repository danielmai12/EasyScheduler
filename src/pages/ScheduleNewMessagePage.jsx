// MUI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";

// Formik
import { Formik } from "formik";

// Components
import Navbar from "../components/Navbar";
import Authenticator from "../components/Authenticator";

// Amplify
import { generateClient } from "aws-amplify/data";

const ScheduleNewMessagePage = () => {
  const client = generateClient();
  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

  const handleSubmit = async (values) => {
    const { title, message, deliveryDate } = values;
    await client.mutations.createMessageSchedule({
      title: title,
      message: message,
      deliveryDate: deliveryDate.toISO(),
      timezone: timeZone,
    });
  };
  return (
    <Authenticator>
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
            }}
            onSubmit={async (values, { resetForm }) => {
              await handleSubmit(values);
              resetForm({});
            }}
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
                        disablePast
                        slotProps={{
                          textField: { fullWidth: true, required: true },
                          field: { clearable: true },
                        }}
                        label="Delivery Date"
                        required
                        value={values.deliveryDate}
                        onChange={(date) => setFieldValue("deliveryDate", date)}
                        // renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      required
                      disabled
                      defaultValue={timeZone}
                      helperText="This is your current time zone based on your browser settings."
                      label="Time Zone"
                      inputProps={{ readOnly: true }}
                    />
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
    </Authenticator>
  );
};

export default ScheduleNewMessagePage;
