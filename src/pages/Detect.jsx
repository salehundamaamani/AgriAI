import React , {useState} from 'react'

function Detect() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <>
      {/* Main Background */}
      <div className="static w-full h-screen bg-[url('https://img.freepik.com/free-photo/family-enjoying-time-farm_23-2148579763.jpg')] bg-cover flex items-center justify-center">
        {/* File Upload Form - Now centered on the page */}
        <div className='flex flex-col items-center justify-center'>
          <form action="/predict" method="POST" enctype="multipart/form-data">
            <label className="block mb-4 text-sm font-bold text-white" htmlFor="file_input">Upload file for detecting planting Disease</label>
            <input id="inputImage" type="file" name="file" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4" />
            {file && <img className="rounded-md my-4" src={file} alt="Uploaded leaf" />}
            <button className='w-20 py-2 my-4 rounded-lg bg-lime-300' type="submit">Detect</button>
          </form>
        </div>
      </div>

      {/* Cards Grid - Now below the main background */}
      <div className="mt-5 flex justify-center">
        <div className="grid grid-cols-3 gap-4 mx-28">
          {/* Card 1 */}
          <div className="p-6 max-w-sm h-auto bg-teal-200 rounded-lg border border-gray-200 shadow-md">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Easy Detection</h5>
            <p className="font-normal text-gray-900">Just need to click and upload leaf image.</p>
          </div>
          {/* Card 2 */}
          <div className="p-6 max-w-sm h-auto bg-green-300 rounded-lg border border-gray-200 shadow-md">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Cause and Solution</h5>
            <p className="font-normal text-gray-900">Provides the cause and solution of the identified diseases.</p>
          </div>
          {/* Card 3 */}
          <div className="p-6 max-w-sm h-auto bg-teal-200 rounded-lg border border-gray-200 shadow-md">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Large Plant Support</h5>
            <p className="font-normal text-gray-900">Supports around 14 different types of plants.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detect







{/*
import React , {useState} from 'react'


function Detect() {
  const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  return (
    <>
    <div className=" static w-full h-screen bg-[url('https://img.freepik.com/free-photo/family-enjoying-time-farm_23-2148579763.jpg?t=st=1711737361~exp=1711740961~hmac=3231dfb41e683cbdd55fba9472d696f555dc13c106bef5a75a5abd370b40826c&w=1800')] bg-cover flex items-center mt-[-78px]">
    <div className=" grid grid-cols-3  gap-4 mx-28">
    <div class="p-6 max-w-sm h-auto opacity-100 bg-teal-200 rounded-lg border border-gray-200 shadow-md">
   
   <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Easy Detection</h5>
<p class="mb-3 font-normal text-gray-900">Just need to click and upload leaf image.</p>

</div>
<div class="p-6 max-w-sm h-auto opacity-100 bg-green-300 rounded-lg border border-gray-200 shadow-md">
   
   <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Cause and Solution</h5>
<p class="mb-3 font-normal text-gray-900">Provides the cause and solution of the identified diseases.</p>

</div>
<div class="p-6 max-w-sm h-auto opacity-100 bg-teal-200 rounded-lg border border-gray-200 shadow-md">
   
   <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Large Plant Support</h5>
<p class="mb-3 font-normal text-gray-900">Supports around 14 different types of plants.</p>

</div>
    </div>
    </div>
  

       <div className='mt-5 ml-5 mr-5 flex justify-center'>
       <form action="/predict" method="POST" enctype="multipart/form-data">
        <label className="block mb-4 text-sm font-medium text-white-900" for="file_input">Upload file for detecting planting Disease</label>
        <input id="inputImage" type="file" name="file" onChange={handleChange} className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" /> 
        <img  className=" rounded-md my-4" src={file}></img> 
        <button className='w-20 py-2 my-4 rounded-lg bg-lime-300' type="submit">Detect</button>  
       </form>
       </div>
     </>
          
  )
}

export default Detect

*/}

