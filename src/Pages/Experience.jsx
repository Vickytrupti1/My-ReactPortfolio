import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import { IoMdSchool } from "react-icons/io";
import { FaSchool } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import '../styles/Experience.css'

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#00b0b5' className=''>
        <VerticalTimelineElement className='vertical-timeline-elment--eduction ' 
            date='2011-2014' iconStyle={{background:"#00b0b5",color:"white"}}
             icon={<FaSchool/>}>
              <h3 className='vertical-timeline-element-title '>Bhatimunda High School,Tangi,Cuttack,Odisha</h3>
              <p>High School</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-elment--eduction' 
            date='2014-2016' iconStyle={{background:"#00b0b5",color:"white"}}
             icon={<IoMdSchool/>}>
              <h3 className='vertical-timeline-element-title'>DRIEMS Science College,Tangi,Cuttack,Odisha</h3>
              <p>My +2 College</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-elment--eduction' 
            date='2016-2019' iconStyle={{background:"#00b0b5",color:"white"}}
             icon={<FaUserGraduate/>}>
              <h3 className='vertical-timeline-element-title'>Kushagra Institute of Information and Management Science(KIIMS),Cuttack,Odisha</h3>
              <p>Bachelor's Degree</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-elment--eduction' 
            date='2023-2024' iconStyle={{background:"#00b0b5",color:"white"}}
             icon={<IoBookSharp/>}>
              <h3 className='vertical-timeline-element-title'>JSpider,Basavanagudi,Bengaluru</h3>
              <p>Completed MernStack Development Cousre</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience