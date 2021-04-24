import React, {useState} from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Navigation from './Navigation';
import { makeStyles } from '@material-ui/core/styles';
import {DropzoneArea} from 'material-ui-dropzone';
import uniqid from "uniqid";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
const validationSchema = yup.object({
  eventname: yup
    .string('Enter your email')
    .required('Event Name is required'),
  description: yup
    .string('Enter description')
    .required('Description is required')
    .min(100,'Description should be minimum of 100 characters'),
  codeend: yup
    .string('Enter/Generate code')
    .required('Attendance Code is required')
    .min(4,'Attendance Code should be minimum of 4 characters'),
  start: yup
  .string('Enter Start Time')
  .required('Time is required'),
  date: yup
  .string('Enter description')
  .required('Description is required'),
  end: yup
  .string('Enter End Time')
  .required('Time is required'),
  medium:yup
  .string('Enter Host Medium')
  .required('Host Medium is required'),
  hostname:yup
  .string('HostName')
  .required('Time is required'),
  eventlink:yup
  .string('HostName')
  .required('Time is required')
  .min(5,'Event Link should be minimum of 4 characters'),
  file: yup.mixed().required()
});

const AddEvent = () => {
    const [image,setImage]=useState();
  
    const classes = useStyles();

  // const [code,setCode]=useState(formik.values.code);
  const formik = useFormik({
    initialValues: {
      eventname: '',
      description:"",
      codeend: '',
      start:'',
      date:'',
      end:"",
      medium:'',
      hostname:'',
      link:'',
      file:null
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      
      axios.post('https://api.randomuser.me/', {Data:{...values},img:{img:image},
        file:{ 
        fileName: values.file.name, 
        type: values.file.type,
        size: `${values.file.size} bytes`
      }})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
  });
  
  return (
    <div>
      <Navigation />
        <Grid container spacing={3}>
        <Grid item xl={3}></Grid>
        <Grid item xs={12} xl={6}>
        <Typography variant="h3">Create Event</Typography>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={12} xl={6}>
        <div>
        <form onSubmit={formik.handleSubmit}>
            <TextField
                fullWidth
                id="eventname"
                name="eventname"
                label="Event Name"
                value={formik.values.eventname}
                onChange={formik.handleChange}
                error={formik.touched.eventname && Boolean(formik.errors.eventname)}
                helperText={formik.touched.eventname && formik.errors.eventname}
            />
            <TextField
                fullWidth
                id="hostname"
                name="hostname"
                label="Host Name"
                value={formik.values.via}
                onChange={formik.handleChange}
                error={formik.touched.via && Boolean(formik.errors.via)}
                helperText={formik.touched.via && formik.errors.via}
            />
            <TextField
                fullWidth
                id="description"
                name="description"
                label="Description"
                value={formik.values.description}
                onChange={formik.handleChange}
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}
            />
            <InputLabel id="demo-simple-select-label" style={{marginTop:'15px'}}>Host Medium</InputLabel>
            <Select
              id="medium"
              name="medium"
              label="Host Medium"
              value={formik.values.medium}
              onChange={formik.handleChange}
              error={formik.touched.medium && Boolean(formik.errors.medium)}
              helperText={formik.touched.medium && formik.errors.medium}
              style={{marginBottom:'1px'}}
            >
                <MenuItem value={'Zoom'}>Zoom</MenuItem>
                <MenuItem value={'Facebook'}>Facebook</MenuItem>
                <MenuItem value={'Google Meet'}>Google Meet</MenuItem>
                <MenuItem value={'Others'}>Others</MenuItem>
            </Select>
            <TextField
                fullWidth
                id="eventlink"
                name="eventlink"
                label="Event Link"
                value={formik.values.eventlink}
                onChange={formik.handleChange}
                error={formik.touched.eventlink && Boolean(formik.errors.eventlink)}
                helperText={formik.touched.eventlink && formik.errors.eventlink}
            />

            <Grid item l={9}>
             <TextField
                fullWidth
                id="codeend"
                name="codeend"
                label="Attendance Code"
                value={formik.values.codeend}
                onChange={formik.handleChange}
                error={formik.touched.codeend && Boolean(formik.errors.codeend)}
                helperText={formik.touched.codeend && formik.errors.codeend}
                style={{marginTop:'15px'}}
            />
            </Grid>
            <Grid item l={9}>
            <Button variant="contained" style={{marginTop:'15px', marginBottom:'10px'}} color="primary" onClick={() =>{
              formik.setFieldValue ("codeend", uniqid());
            }}> Generate Code </Button>
            </Grid>

            <TextField
            id="date"
            type="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            name="date"
            label="Date"
            value={formik.values.date}
            onChange={formik.handleChange}
            error={formik.touched.date && Boolean(formik.errors.date)}
            helperText={formik.touched.date && formik.errors.date}
            />

          <TextField
          id="time"
          type="time"
          defaultValue="07:30"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          name="start"
          label="Start Time"
          value={formik.values.start}
          onChange={formik.handleChange}
          error={formik.touched.start && Boolean(formik.errors.start)}
          helperText={formik.touched.start && formik.errors.start}
          />

          <TextField
          id="time"
          type="time"
          defaultValue="07:30"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          name="end"
          label="End Time"
          value={formik.values.end}
          onChange={formik.handleChange}
          error={formik.touched.end && Boolean(formik.errors.end)}
          helperText={formik.touched.end && formik.errors.end}
          />
            <Typography variant='h5' style={{marginTop:'10px'}}>
              File Upload
              </Typography>
                  <TextField id="file" name="file" type="file" onChange={(event) => {
                    formik.setFieldValue("file", event.currentTarget.files[0]);
                  }} className="form-control" />
            <div style={{marginBottom:'30px'}}></div>
        <DropzoneArea
        filesLimit='1'
        acceptedFiles={['image/*']}
        dropzoneText={"Drag and drop an image here or click"}
        onChange={(files) =>{
            setImage(files);
            console.log('Files:', files)
          }}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
        Submit
        </Button>
        </form>
        </div>
        </Grid>
        <Grid item xs={3}></Grid>
        </Grid>
        
    </div>
  );
};

export default AddEvent;
