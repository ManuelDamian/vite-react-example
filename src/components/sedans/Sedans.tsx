import { Card, CardActions, CardContent, Typography } from "@mui/material"
import CardMedia from '@mui/material/CardMedia';
import "./Sedans.css"

const sedans = () => {
    return (
        <Card className="CardBody" sx={{ MaxWidth: 425 , backgroundColor: "#E28625"}}>
            <CardMedia className="Logo"
                component="img"
                alt="Sedans"
                image="src/assets/SedansLogo.svg"
                />
            <CardContent className="cardcontent">
                <Typography  className="Title"  component="div">SEDANS</Typography>
                <Typography className="Text">
                    Choose a sedan for its affordability and excellent fuel economy. 
                    Ideal for cruising in the city or on your next road trip.
                </Typography>
            </CardContent>
            <CardActions>
                <button className="Learn">
                        Learn More
                </button>
            </CardActions>
        </Card>
    )
}

export default sedans