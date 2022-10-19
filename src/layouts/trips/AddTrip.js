import DashboardLayout from "examples/LayoutContainers/DashboardLayout"
import DashboardNavbar from "examples/Navbars/DashboardNavbar"
import Sidenav from "examples/Sidenav"


// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Icon, TextField } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
 
function AddTrip() {
    return(
        <DashboardLayout>
            <DashboardNavbar />
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Card>
                        <MDBox p={3}>
                            <MDTypography variant='h5'>Add New Trip</MDTypography>
                            <MDBox pt={4} pb={2}>
                                <MDBox mb={3}><TextField fullWidth label='Trip Title' /></MDBox>
                                <MDBox mb={3}><TextField fullWidth label='Trip Cost' /></MDBox>
                                <MDBox mb={3}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateTimePicker
                                    renderInput={(props) => <TextField fullWidth {...props}/>}
                                    label="Trip Date"
                                    value=''
                                    onChange={(newValue) => {
                                        console.log(newValue)
                                    }}
                                    />
                                </LocalizationProvider>
                                </MDBox>
                                    <Button variant="contained" color="primary"  component="label" >
                                        <MDTypography color="white" variant="p">
                                            <Grid container spacing={2}>
                                                <Grid item><Icon>photo_library</Icon></Grid>
                                                <Grid item>Upload Photos</Grid>
                                            </Grid>
                                        </MDTypography>
                                        <MDBox mb={3} ><input hidden accept="image/*" type="file" id='trip-photos'/></MDBox>
                                    </Button> 
                            </MDBox>
                        </MDBox>
                    </Card>
                </Grid> 
             </Grid>
        </DashboardLayout>
        )
}
export default AddTrip