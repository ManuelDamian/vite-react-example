
import { Card, CardActions, CardContent, Typography } from "@mui/material"
import CardMedia from '@mui/material/CardMedia';
import "./Luxary.css"



const luxary = () => {
    return (
        <Card className="CardBody" sx={{ MaxWidth: 425 , backgroundColor: "#004140"}}>
            <CardMedia className="Logo"
                component="img"
                alt="Suvs"
                image="src/assets/LuxaryLogo.svg"
                />
            <CardContent className="cardcontent">
                <Typography  className="Title"  component="div">Suvs</Typography>
                <Typography className="Text">
                Cruise in the best car brands without the bloated prices. 
                Enjoy the enhanced comfort of a luxury rental and arrive in style. 
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

export default luxary