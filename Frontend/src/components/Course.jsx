import React from 'react'
import Cards from  "./Cards"
import list from "../../public/list.json"
import{Link} from"react-router-dom"

function Course() {
  return (
   <>
   <div className='grid max-w-screen-2xl container items-stretch
 mx-auto md:px-20 px-4'>
   <div className=" items-center justify-center text-center">
  <h1 className="mt-28 text-2xl md:text-4xl">
    We're Delighted to have you{" "}
    <span className="text-orange-400 font-semibold">Here :)</span>{" "}
  </h1>
  <p className="mt-5">
    We are delighted to have you here. Explore our comprehensive courses
    designed to enhance your skills and knowledge. Whether you're a beginner or
    looking to advance in your career, our expertly crafted courses cater to all
    levels. Join us on a journey of learning and growth, and unlock your
    potential with our industry-relevant content.
  </p>
  <Link to="/">
    <button className="mt-6 bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-500 duration-500">
      Back
    </button>
  </Link>
</div>

<div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
  {
    list.map((item) =>(
      <Cards key={item.id} item={item} />
    ))
  }
</div>
   </div>
   </>
  );
}

export default Course
