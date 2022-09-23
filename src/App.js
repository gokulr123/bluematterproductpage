
import './App.css';
import Productpage from './Pages/Productpage';
function App() {
  const webobj=[{
    projectid:'pr01',
    projectname:"Disaster Notifications",
    projecttype:"Mini Project",
    frontend:"Html,Css,Javascript",
    backend:"Python",
    database:"Mysql",
    submittedcolleges:['Mohandas College'],
    newprice:"6000",
    oldprice:"12000",
    image1:"../../../d1.png",
    image2:"../../../disaster2.png",
    image3:"../../../d1.png",
    image4:"../../../disaster3.png",
    abstract:"Disaster is a very well known word that disrupts life, livelihoods, economy etc. The Global Climate Change and Vulnerability Index reveals that India is ranked as the second most vulnerable country in the world to natural hazards. It is not possible to avoid the disasters, but suffering can be minimized by applying effective Disaster Management which demands rapid access to reliable data and the capacity to assess, analyze and integrate information from varied sources. This information is as much as necessary as water, food, medicine and support. This arises the need of disaster awareness systems which can provide valuable and live saving information so that the disaster losses can be reduced to some extent."

},
{
projectid:'pr02',
projectname:"Canteen Management",
projecttype:"Main Project",
frontend:"Html,css,Javascript",
backend:"Nodejs",
database:"Mongodb",
submittedcolleges:['Mohandas College'],
abstract:""
},
{
    projectid:'pr03',
    projectname:"Smart Class",
    projecttype:"Main Project",
    frontend:"Html,css,Javascript",
    backend:"Python",
    database:"Mysql",
    submittedcolleges:['Christ Nagar College'],
    abstract:""
    
}
]

  return (
    <div>
     <Productpage data={webobj} />
     
    </div>
  );
}

export default App;
