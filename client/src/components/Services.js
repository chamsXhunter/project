import React from 'react'
import Activitycard from './Activitycard'
import { useSelector } from 'react-redux'


function Services() {
  const activites=useSelector((state)=>state.activite.activitelist);
  console.log(activites)
  return (
    <div>
      <>
  <div className="services">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="section_title_container">
            <div className="section_subtitle">welcome to sportfit</div>
            <div className="section_title">Our Courses</div>
          </div>
        </div>
      </div>
      <div style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap", width:"100%", marginTop:"50px"}}>
        {/* Service */}

      {activites?.map((el)=> <Activitycard el={el}/>)} 
 
      </div>
    </div>
  </div>
  {/* Timetable */}
  <div className="timetable">
    <div
      className="parallax_background parallax-window"
      data-parallax="scroll"
      data-image-src="images/timetable.jpg"
      data-speed="0.8"
    />
    <div className="tt_overlay" />
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="section_title_container">
            <div className="section_subtitle">welcome to sportfit</div>
            <div className="section_title">Classes Timetable</div>
          </div>
          <div className="timetable_filtering">
            <ul className="d-flex flex-row align-items-start justify-content-start flex-wrap">
              <li className="active item_filter_btn" data-filter="*">
                All Classes
              </li>
              <li className="item_filter_btn" data-filter=".weight_loss">
                Weight Loss
              </li>
              <li className="item_filter_btn" data-filter=".aerobics">
                Aerobics
              </li>
              <li className="item_filter_btn" data-filter=".crossfit">
                Crossfit
              </li>
              <li className="item_filter_btn" data-filter=".fitness">
                Fitness
              </li>
              <li className="item_filter_btn" data-filter=".yoga">
                Yoga
              </li>
              <li className="item_filter_btn" data-filter=".pilates">
                Pilates
              </li>
              <li className="item_filter_btn" data-filter=".stretching">
                Stretching
              </li>
            </ul>
          </div>
          <div className="timetable_container d-flex flex-sm-row flex-column align-items-start justify-content-sm-between justify-content-start">
            {/* Monday */}
            <div className="tt_day">
              <div className="tt_title">monday</div>
              <div className="tt_day_content grid">
                {/* Class */}
                <div className="tt_class grid-item weight_loss">
                  <div className="tt_class_title">Weight Loss</div>
                  <div className="tt_class_instructor">Jessica Smith</div>
                  <div className="tt_class_time">9:00</div>
                </div>
                {/* Class */}
                <div className="tt_class grid-item aerobics">
                  <div className="tt_class_title">Aerobics</div>
                  <div className="tt_class_instructor">Jessica Smith</div>
                  <div className="tt_class_time">10:00</div>
                </div>
                {/* Class */}
                <div className="tt_class empty grid-item"></div>
                {/* Class */}
                <div className="tt_class grid-item aerobics">
                  <div className="tt_class_title">Aerobics</div>
                  <div className="tt_class_instructor">Jessica Smith</div>
                  <div className="tt_class_time">13:00</div>
                </div>
              </div>
            </div>
            {/* Tuesday */}
            <div className="tt_day">
              <div className="tt_title">tuesday</div>
              <div className="tt_day_content grid">
                {/* Class */}
                <div className="tt_class grid-item weight_loss">
                  <div className="tt_class_title">Weight Loss</div>
                  <div className="tt_class_instructor">Jessica Smith</div>
                  <div className="tt_class_time">8:00</div>
                </div>
                {/* Class */}
                <div className="tt_class empty grid-item"></div>
                {/* Class */}
                <div className="tt_class grid-item aerobics">
                  <div className="tt_class_title">Aerobics</div>
                  <div className="tt_class_instructor">Jessica Smith</div>
                  <div className="tt_class_time">12:00</div>
                </div>
                {/* Class */}
                <div className="tt_class grid-item aerobics">
                  <div className="tt_class_title">Aerobics</div>
                  <div className="tt_class_instructor">Jessica Smith</div>
                  <div className="tt_class_time">13:00</div>
                </div>
              </div>
            </div>
            {/* Wednesday */}
            <div className="tt_day">
              <div className="tt_title">wednesday</div>
              <div className="tt_day_content grid">
                {/* Class */}
                <div className="tt_class grid-item crossfit">
                  <div className="tt_class_title">Crossfit</div>
                  <div className="tt_class_instructor">Jessica Smith</div>
                  <div className="tt_class_time">9:00</div>
                </div>
                {/* Class */}
                <div className="tt_class grid-item aerobics">
                  <div className="tt_class_title">Aerobics</div>
                  <div className="tt_class_instructor">Jessica Smith</div>
                  <div className="tt_class_time">10:00</div>
                </div>
                {/* Class */}
                <div className="tt_class empty grid-item"></div>
                {/* Class */}
                <div className="tt_class grid-item aerobics">
                  <div className="tt_class_title">Aerobics</div>
                  <div className="tt_class_instructor">Jessica Smith</div>
                  <div className="tt_class_time">13:00</div>
                </div>
                {/* Class */}
                <div className="tt_class grid-item aerobics">
                  <div className="tt_class_title">Aerobics</div>
                  <div className="tt_class_instructor">Jessica Smith</div>
                  <div className="tt_class_time">17:00</div>
                </div>
              </div>
            </div>
            {/* Thursday */}
            <div className="tt_day">
              <div className="tt_title">thursday</div>
              <div className="tt_day_content grid">
                {/* Class */}
                <div className="tt_class grid-item fitness">
                  <div className="tt_class_title">Fitness</div>
                  <div className="tt_class_instructor">Jessica Smith</div>
                  <div className="tt_class_time">9:00</div>
                </div>
                {/* Class */}
                <div className="tt_class grid-item aerobics">
                  <div className="tt_class_title">Aerobics</div>
                  <div className="tt_class_instructor">Jessica Smith</div>
                  <div className="tt_class_time">10:00</div>
                </div>
                {/* Class */}
                <div className="tt_class grid-item yoga">
                  <div className="tt_class_title">Yoga</div>
                  <div className="tt_class_instructor">Jessica Smith</div>
                  <div className="tt_class_time">12:00</div>
                </div>
                {/* Class */}
                <div className="tt_class grid-item pilates">
                  <div className="tt_class_title">Pilates</div>
                  <div className="tt_class_instructor">Jessica Smith</div>
                  <div className="tt_class_time">13:00</div>
                </div>
              </div>
            </div>
            {/* Friday */}
            <div className="tt_day">
              <div className="tt_title">friday</div>
              <div className="tt_day_content grid">
                {/* Class */}
                <div className="tt_class grid-item yoga">
                  <div className="tt_class_title">Yoga</div>
                  <div className="tt_class_instructor">Jessica Smith</div>
                  <div className="tt_class_time">9:00</div>
                </div>
                {/* Class */}
                <div className="tt_class grid-item aerobics">
                  <div className="tt_class_title">Aerobics</div>
                  <div className="tt_class_instructor">Jessica Smith</div>
                  <div className="tt_class_time">10:00</div>
                </div>
                {/* Class */}
                <div className="tt_class empty grid-item"></div>
                {/* Class */}
                <div className="tt_class grid-item aerobics">
                  <div className="tt_class_title">Aerobics</div>
                  <div className="tt_class_instructor">Jessica Smith</div>
                  <div className="tt_class_time">13:00</div>
                </div>
              </div>
            </div>
            {/* Saturday */}
            <div className="tt_day">
              <div className="tt_title">Saturday</div>
              <div className="tt_day_content grid">
                {/* Class */}
                <div className="tt_class grid-item weight_loss">
                  <div className="tt_class_title">Weight Loss</div>
                  <div className="tt_class_instructor">Jessica Smith</div>
                  <div className="tt_class_time">9:00</div>
                </div>
                {/* Class */}
                <div className="tt_class grid-item pilates">
                  <div className="tt_class_title">Pilates</div>
                  <div className="tt_class_instructor">Jessica Smith</div>
                  <div className="tt_class_time">10:00</div>
                </div>
                {/* Class */}
                <div className="tt_class empty grid-item"></div>
                {/* Class */}
                <div className="tt_class grid-item aerobics">
                  <div className="tt_class_title">Aerobics</div>
                  <div className="tt_class_instructor">Jessica Smith</div>
                  <div className="tt_class_time">13:00</div>
                </div>
              </div>
            </div>
            {/* Sunday */}
            <div className="tt_day">
              <div className="tt_title">Sunday</div>
              <div className="tt_day_content grid">
                {/* Class */}
                <div className="tt_class grid-item stretching">
                  <div className="tt_class_title">Stretching</div>
                  <div className="tt_class_instructor">Jessica Smith</div>
                  <div className="tt_class_time">9:00</div>
                </div>
                {/* Class */}
                <div className="tt_class grid-item aerobics">
                  <div className="tt_class_title">Aerobics</div>
                  <div className="tt_class_instructor">Jessica Smith</div>
                  <div className="tt_class_time">10:00</div>
                </div>
                {/* Class */}
                <div className="tt_class empty grid-item"></div>
                {/* Class */}
                <div className="tt_class empty grid-item"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Extra */}
  <div className="extra d-flex flex-column align-items-center justify-content-center text-center">
    <div
      className="background_image"
      style={{ backgroundImage: "url(images/extra_wide.jpg)" }}
    />
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="extra_content d-flex flex-column align-items-center justify-content-center text-center">
            <div className="extra_title">15% Discount</div>
            <div className="extra_text">
              <p>
                Morbi sed varius risus, vitae molestie lectus. Donec id
                hendrerit velit, eu fringilla neque. Etiam id finibus sapien.
                Donec sollicitudin luctus ex non pharetra.llus.
              </p>
            </div>
            <div className="button extra_button">
              <a href="#">Join Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default Services
