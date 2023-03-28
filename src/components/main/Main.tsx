import { Card , CardContent} from "@mui/material"
import React from "react"
import SedansPart from '../sedans/Sedans'
import SuvsPart from '../suvs/Suvs'
import LuxaryPart from '../luxary/Luxary'
import "./Main.css"

const main = () => {
    return (
        <Card className="PartsConteiner">
            <CardContent className="content">
                <SedansPart/>
                <SuvsPart/>
                <LuxaryPart/>  
            </CardContent>  
        </Card>
    )
}

export default main