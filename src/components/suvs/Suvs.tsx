import { Card, CardActions, CardContent, Typography } from "@mui/material"
import CardMedia from '@mui/material/CardMedia';
import "./Suvs.css"


const suvs = () => {
    return (
        <Card className="CardBody" sx={{ MaxWidth: 425 , backgroundColor: "#006971"}}>
            <CardMedia className="Logo"
                component="img"
                alt="Suvs"
                image="src/assets/SuvsLogo.svg"
                />
            <CardContent className="cardcontent">
                <Typography  className="Title"  component="div">Suvs</Typography>
                <Typography className="Text">
                Take an SUV for its spacious interior, power, and versatility. 
                Perfect for your next family vacation and off-road adventures.
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

export default suvs