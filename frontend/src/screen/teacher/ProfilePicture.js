import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { Grid, Typography, TextareaAutosize, Button, Paper, Box } from '@mui/material'

const styles = {
    paperContainer: {
        backgroundImage: `url(${"/1-headsets-for-elementary_1.webp"})`,

        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "3rem",
    }
}
function ProfilePicture() {


    const navigate = useNavigate()
    const [fileInputState, setFileInputState] = useState(null)
    const [previewSource, setPreviewSource] = useState(null)
    const { genaratedToken } = useSelector((state) => { return state.genaratedToken })
    console.log(genaratedToken, "userToken")

    // useEffect(() => {
    //     let preImage = async () => {
    //         let { data } = axios.get('/api/teacher/teacherDetails', {
    //             headers: {
    //                 authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
    //             }
    //         })
    //     }
    //     preImage()
    // }, [])

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
    };
    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }

    }
    const handleSubmitFile = (e) => {
        e.preventDefault()

        if (!previewSource) return;
        uploadImage(previewSource);

    }
    const uploadImage = async (base64EncodededImage) => {

        try {
            let { data } = await axios.post('/api/teacher/teacherProfile', { imageAddress: base64EncodededImage }, {
                headers: {
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
                }
            })
            console.log('resonse data', data)
            navigate('/teacherHomePage')
        }
        catch (error) {
            console.log(error)
        }
    }





    const paperStyle = { padding: 20, height: 'auto', margin: ' auto' }

    return (
        <div style={styles.paperContainer} >
            <form onSubmit={handleSubmitFile}>
                <Paper sx={{ maxWidth: '720px' }} style={paperStyle} textAlign={'center'}>
                    <Grid container display={'flex'} justifyContent={'center'}>
                        <Grid item textAlign={'center'} spacing={2} xs={'12'} style={{ backgroundColor: 'rgb(84,214,158)' }} >
                            <Typography variant='h4' color={'white'} >CONTINUE BUILDING YOUR PROFILE</Typography>
                        </Grid>
                        <Grid item variant='h2' textAlign={'center'} xs={'12'} spacing={2}>
                            <Typography  >3</Typography>
                        </Grid>
                        <Grid item textAlign={'center'} xs={'12'} spacing={2}>
                            <Typography variant='h5' color={'blue'} >Add front facing Profile Picture</Typography>
                        </Grid>
                        <Grid item textAlign={'center'} xs={'12'} spacing={2}>



                        </Grid>
                        <Grid item textAlign={'center'} xs={'12'} spacing={2}>
                            {previewSource ?
                                <img src={previewSource} alt="chooser" style={{ height: '200px' }} /> : <img src='/imagePaceHolder.png' alt="image label"></img>}
                            <input accept='image/*' value={fileInputState} type={'file'} id="select-image" onChange={handleFileInputChange} hidden />
                        </Grid>
                        {/* <Grid item xs={12} display={'flex'} alignItems={'center'}> */}

                        <label htmlFor='select-image'>
                            <Button variant='contained' color='primary' justifyContent={'center'} component="span">
                                Select Image
                            </Button>
                        </label>
                        {/* </Grid> */}
                        <Grid item textAlign={'center'} display={'flex'} spacing={5} >
                            {previewSource && <Button type='submit' variant="contained" >Save & Next</Button>}
                            {/* <Button variant="contained" >Change Image</Button> */}
                        </Grid>
                    </Grid>
                </Paper>
            </form>
        </div>
    )
}
export default ProfilePicture