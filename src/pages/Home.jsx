import Button from '../components/Button';
import logo from '../assets/logo.png';

const Home = () => {
    return (
      <>
        <div className="w-full h-screen bg-[url('https://wallpaperaccess.com/full/3830884.jpg')] bg-cover flex items-center mt-[-78px]">
          <div className="md:mx-40 sm:mx-20 2xs:mx-10 select-none">

          <div className="flex flex-col items-start justify-center"> {/* This makes the text and the logo align vertically */}
              <h2 className="xs:text-2xl text-xl text-white text-opacity-70">Empowering Farmers with Intelligent Plant disease detection</h2>
              <div className="flex items-center"> {/* This will place the logo to the right of the "AgriAI" text */}
                <h1 className='xs:text-6xl 2xs:text-3xl text-xl text-white text-opacity-70 font-bold mr-4'>AgriAI</h1>
                {/* <img src={logo} alt="Logo" style={{ width: '80px', height: '80px' }} /> */}
              </div>
            </div>
         {/*
          <h2 className="xs:text-2xl text-xl text-white text-opacity-70">Make it easy</h2>
          <h1 className='xs:text-6xl 2xs:text-3xl text-xl text-white text-opacity-100 font-bold'>AgriAI</h1>
          <img src={logo} alt="Logo" style={{ width: '40px', height: '40px' }} />
            */}

                       <div className='mt-6'>
                {/*  <Button>Get Started </Button>  */}
              </div>

          </div>
        </div>


       
        <div className="mt-8 mx-10" id="about">

        <h1 className="text-3xl text-orange-900 font-bold ">WHAT WE DO</h1>
        <br />
        <p className="text-black text-lg">
          {" "}
          “Our goal is to provide utilitarian services, which can make them more productive, like detecting diseases, and to create a platform where farmers can share their resources with their peers.”{" "}
        </p>

        <h1 className="mt-5 text-3xl text-orange-900 font-bold ">VISION</h1>
        <br />
        <p className="text-black text-lg">
          {" "}
          We want to build app which every farmer in the country to utilize the immensely useful features. Starting with the proactive feature of detecting diseases, to sharing resources among the other farmers in the community, to selling their yield directly to the customers. We hope this user-friendly app will help them in making prudent decisions and increase their yield to the maximum.{" "}
        </p>
        <h1 className="mt-5 text-3xl text-orange-900 font-bold ">TEAM</h1>
       
        <br />
        <ul className="list-disc list-inside">
          <li>Rehaan Arai</li>
          <li>Aamani Salehundam</li>
          <li>Jahnavi Mandadi</li>
          <li className='mb-8'>Bhuvaneshvar Narayan</li>
  
        </ul>

        
      </div>
      </>
    );
  };
  
export default Home;