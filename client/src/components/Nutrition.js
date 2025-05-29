
import { useNavigate } from 'react-router-dom';
function Nutrition() {
  const navigate=useNavigate()
  return (
    <div className='doctor'>
      <h4>DOCTEUR FITNESS</h4>
      <section>
      <h3>Tous nos articles Nutrition</h3>
      </section>

<div style={{display:"flex", justifyContent:"space-around", padding:"14px 264px"}}>
<img src="https://www.jefit.com/wp/wp-content/uploads/2021/12/healthy-food-high-protein-scaled.jpg" style={{borderRadius:"50%", width:"250px", height:"250px"}} />
<img  src="https://www.cdc.gov/diabetes/media/images/2024/05/Diabetes-and-carbs-thumbnail.jpg"  style={{borderRadius:"50%", width:"250px", height:"250px"}}/>
<img  src="https://domf5oio6qrcr.cloudfront.net/medialibrary/11483/a4591d01-1c90-4211-a11d-ff6815bebac0.jpg"  style={{borderRadius:"50%", width:"250px", height:"250px"}}/>
    
    

</div>

<div style={{display:"flex", justifyContent:"space-around", padding:"14px 264px"}} className='divfood'>
  <button onClick={()=>navigate("/proteine")}>Food with protein</button>
    <button onClick={()=>navigate("/carb")}>Food with Carb</button>
      <button onClick={()=>navigate("/vitamine")}>Food with vitamine</button>
</div>
    </div>
  )
}

export default Nutrition
