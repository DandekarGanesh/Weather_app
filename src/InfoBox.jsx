import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';


export default function InfoBox({info}) {
    let INIT_URL = "https://media.istockphoto.com/id/1052047454/photo/sandstorm.webp?b=1&s=170667a&w=0&k=20&c=VA2ByaYSfa1wqzAaPeviTU-ZpGlKwJrYcvgtbpqjFUg=";
    const HOT_URL = "https://media.istockphoto.com/id/1224021113/photo/indian-cameleers-camel-driver-with-camel-silhouettes-in-dunes-on-sunset-jaisalmer-rajasthan.webp?b=1&s=170667a&w=0&k=20&c=tbQHyU-nBmjXzDltzBkwERtNwR7u9X0pQAJedllsCDg=";
    const COLD_URL = "https://images.unsplash.com/photo-1635495672599-cb0c64399b58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbGQlMjBlbnZpcm9ubWVudHxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL = "https://media.istockphoto.com/id/175919401/photo/natural-female-beauty-in-autumn-rain.webp?b=1&s=170667a&w=0&k=20&c=RUHCsvLszxDPL4C0enlqVcnENys14XqiByGgE5Po4Es=";

    return (
     <div className="InfoBox">

      <div className="cardContainer">
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
           <p> Temperature = {info.temp}&deg;C</p>
           <p> Humidity = {info.humidity}</p>
           <p> Min Temo = {info.tempMin}&deg;C</p>
           <p> Max Temo = {info.tempMax}&deg;C</p>
           <p>The weather can be described as <i> {info.weather}</i> feels like {info.feelsLike}</p>
        </Typography>
      </CardContent>
    </Card>


    </div>
     </div>
    );
}