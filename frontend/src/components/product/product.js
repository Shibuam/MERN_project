import { Card, Typography, CardMedia, CardContent, CardActions, Button, Grid } from "@mui/material"

function product({ product }) {

    return (
   <Grid container>
                <Card item  >
                    <CardMedia
                        component="img"
                        height="140"
                        image={product.image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.name}
                        </Typography>

                    </CardContent>

                </Card>
              
                </Grid>  
    )
}
export default product