import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Grid, Button, Typography, Paper, TextField } from "@mui/material";
import { SidebarTeacher } from "../../components/teacher/sidebar-teacher";

const ProfileCom = () => {
  const navigate = useNavigate();
  const [previewSource, setPreviewSource] = useState(null);
  const [fileInputState, setFileInputState] = useState(null);
  const [imagecloud, setimagecloud] = useState();
  const [uploadLink, setUploadLink] = useState(false);
  const [videoLink, setVideoLink] = useState("");
  const [userDetails, setUserDetails] = useState("");

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  let user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    const teacherInfo = async () => {
      const config = {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      };

      let { data } = await axios.get(`/api/teacher/teacherDetails`, config);
      setimagecloud(data.teacherDetails.image);
      setUserDetails(data);
    };
    teacherInfo();
  }, []);
  console.log(userDetails);


  const config = {
    headers: {
      authorization: `Bearer ${user.token}`,
    },
  };

  const videoLinkHandler = async () => {
    alert(videoLink);
  
    let url = "/api/teacher/updateVideo";
    let { data } = await axios.post(url, { videoLink }, config);
  };

  const [coordinates,setCoordinates]=useState([])
 

  const getLocation=async()=>{

    navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        setCoordinates([...coordinates,position.coords.longitude,position.coords.latitude])
      
      });
     
      
  }
const submitCoordinates=async()=>{

  let {data}=await axios.post('/api/teacher/location',{coordinates:coordinates}, config)
  console.log(data)
}
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={2}>
          <SidebarTeacher />
        </Grid>

        <Grid item xs={12} md={3} margin={"10px"}>
          {imagecloud ? (
            <img
              style={{
                height: "150px",
                display: "flex",
                alignContent: "center",
              }}
              src={imagecloud}
            ></img>
          ) : (
            <img src="/imagePaceHolder.png" alt="image label"></img>
          )}
          <br />{" "}
          <Button onClick={() => navigate("/profilePicture")}>
            Change/Add image
          </Button>
          <br />
        </Grid>
        <Grid item xs={12} md={3} margin={"10px"}>
          <Typography style={{ color: "red" }}>Basic Informations </Typography>
          {userDetails && (
            <>
              <Typography>Name:{userDetails.teacherDetails.name}</Typography>
              <Typography>email:{userDetails.teacherDetails.email}</Typography>
              <Typography>
                Contact Number:{userDetails.teacherDetails.contactNumber}
              </Typography>
              <Typography>PIN:{userDetails.teacherDetails.pincode}</Typography>
              <Typography>
                Subject:{userDetails.teacherDetails.subject}
              </Typography>
              <Typography>Location:</Typography>
              <Typography>latitude:{coordinates}</Typography>
              {/* <Typography>Longitude:{longitude}</Typography> */}
              <Button onClick={()=>getLocation()}> Update</Button>
              <Button onClick={()=>submitCoordinates()}> Submit</Button>
            </>
          )}
        </Grid>
        <Grid item xs={12} md={3} margin={"10px"}>
          {userDetails.teacherDetails && (
            <iframe
              width="auto"
              height="auto"
              src={userDetails.teacherDetails.video}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          <br />
          Demo video
          <Button onClick={() => setUploadLink(true)}>
            Upload/change Video
          </Button>
          <br />
          {uploadLink && (
            <>
              <TextField
                id="standard-basic"
                label="Video link"
                value={videoLink}
                variant="standard"
                onChange={(e) => setVideoLink(e.target.value)}
              />
              <Button onClick={videoLinkHandler}>Submit</Button>
              
            </>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfileCom;
