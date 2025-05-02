import { ArrowRight } from 'lucide-react';
import NavBar from './navbar';
import NavLink from './NavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

// First, make sure to import these fonts in your _app.js or globals.css:
// @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap');

// And add this to your tailwind.config.js:
// module.exports = {
//   theme: {
//     extend: {
//       fontFamily: {
//         poppins: ['Poppins', 'sans-serif'],
//         montserrat: ['Montserrat', 'sans-serif'],
//         opensans: ['Open Sans', 'sans-serif']
//       },
//     },
//   }
// }

export default function MealTopiaHomepage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white py-4 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-11">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <Image src="/logo2.png" alt="Logo" className="h-18 mr-4" width={100} height={100} />

              <div className="flex flex-col">
                <h1 style={{ color: '#663698' }} className="font-bold font-poppins tracking-wide text-4xl">
                  <span className='font-light'>Meal</span>Topia
                </h1>
                <span className="text-xs ml-3 tracking-wider text-gray-300 font-montserrat">BETTER PEOPLE&apos;S LIVES</span>
              </div>
            </div>

            <div className="relative right-18">
              <NavBar />
            </div>


          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="py-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/MealTopia.png')" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-xl mx-auto grid md:grid-cols-2 gap-8 px-6 py-10">
            <div className="flex flex-col justify-center">
              <h1 style={{ color: '#663698' }} className="text-6xl font-bold font-poppins mb-4 tracking-wider"><span className="font-light">Meal</span>Topia</h1>
              <h2 className="text-3xl text-green-500 mb-4 font-semibold font-montserrat tracking-wider">Your Guide to Economic,<p> Healthy Lifestyle</p></h2>
              <p className="text-gray-700 mb-8 font-opensans">
                Eating healthy can be a challenge in today&apos;s fast-<br></br>
                paced world. However, choosing healthy food<br></br>
                without overspending is possible, and made easier<br></br>
                with our application.</p>
              <div className="flex flex-col space-y-4 mb-8">
                <a href="#" className="flex items-center">
                  <Image src="/App Store.png" alt="App Store" className="h-16" width={100} height={100} />
                </a>

                <a href="#" className="flex items-center">
                  <Image src="/play.png" alt="Google Play" className="h-16" width={100} height={100} />
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#f9f9f9]">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto px-12">
            <h2 style={{ color: '#412B59' }} className="text-3xl font-semibold font-poppins text-center mb-12">
              What MealTopia Gives To You!
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              {[
                { title: "Value", desc: "Balanced diet plans tailored to your needs" },
                { title: "Value", desc: "Improve your wellbeing with expert guidance" },
                { title: "Value", desc: "Quick meal prep and planning tools" },
                { title: "Value", desc: "Cost-effective meal solutions" },
                { title: "Value", desc: "Premium recipes and ingredients" },
                { title: "Value", desc: "Track progress & stay on top of goals" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#ffffff] border border-[#f2f2f2] rounded-md p-6 flex flex-col gap-3 shadow-[0_4px_6px_0_#1018280D] transition-all duration-300"
                  style={{ minWidth: '380px', minHeight: '200px' }}  // Added to control the column width
                >
                  <div className="w-18 h-18 rounded-full border border-gray-300 bg-white flex items-center justify-center mb-2">
                    <Image
                      src="/icon.png"
                      alt="Feature Icon"
                      className="w-10 h-10 object-contain"
                      width={100}
                      height={100}
                    />
                  </div>
                  <h3 style={{ color: '#663698' }} className="font-poppins text-3xl font-semibold font-poppins text-gray-800">
                    {item.title}
                  </h3>
                  <p style={{ color: '#5F6D7E' }} className="text-gray-600 text-lg font-opensans">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Main Benefits Section */}
      <section
        className="py-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.png')" }} // background pattern
      >
        <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between">

          {/* Left Content */}
          <div className="md:w-1/2 p-8">
            <h2 style={{ color: '#663698' }} className="text-3xl md:text-4xl font-bold font-poppins mb-4 leading-tight">
              The Main Service<br />MealTopia Offers
            </h2>
            <p style={{ color: '#5F6D7E' }} className="text-gray-700 mb-6 font-opensans">
              We provide a lot of information for customers to make their choices on what to buy and what to cook: Nutritional food value in grocery stores, food markets, restaurants, etc.
            </p>
            <ul className="space-y-3 mb-6">
              <li style={{ color: '#5F6D7E' }} className="flex items-start text-gray-700 font-opensans">
                <svg className="h-5 w-5 text-green-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Register in the app.
              </li>
              <li style={{ color: '#5F6D7E' }} className="flex items-start text-gray-700 font-opensans">
                <svg className="h-5 w-5 text-green-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Enter all the ingredients you have in your house.
              </li>
              <li style={{ color: '#5F6D7E' }} className="flex items-start text-gray-700 font-opensans">
                <svg className="h-5 w-5 text-green-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Get all nutritional information for each ingredient in the house.
              </li>
            </ul>
            <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition flex items-center font-poppins font-medium">
              Start now
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 p-8 flex justify-center">
            <Image
              src="/Photo.png"
              alt="Chef character"
              className="max-w-sm w-full h-auto"
              width={100}
              height={100}
            />
          </div>
        </div>
      </section>

      {/* Articles & Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto px-13">
            <h2 className="text-3xl font-semibold font-poppins text-center text-gray-800 mb-2">Our Latest Articles & Events</h2>
            <p style={{ color: '#5F6D7E' }} className="text-center mb-12 font-montserrat">people find it very difficult to find the time to cook their food. cooking food can be costly if you don’t know what ingredients to buy and what to cook.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Article 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <Image src="/Rectangle 1.png" alt="Food" className="w-full h-48 object-cover" width={100} height={100} />
                <div className="p-6">
                  <h3 style={{ color: '#412B59' }} className="text-xl font-semibold font-poppins mb-2">Eat Healthy - Everything You Need To Know</h3>
                  <p style={{ color: '#5F6D7E' }} className="mb-4 text-sm font-opensans">Discover the best practices for maintaining a balanced diet and improving your overall health.</p>
                  <a href="#" className="text-green-500 hover:text-purple-700 font-medium font-montserrat flex items-center">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Article 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <Image src="/Rectangle 1 (1).png" alt="Vegetables" className="w-full h-48 object-cover" width={100} height={100} />
                <div className="p-6">
                  <h3 style={{ color: '#412B59' }} className="text-xl font-semibold font-poppins mb-2">Are you eating enough Vegetables?</h3>
                  <p style={{ color: '#5F6D7E' }} className="mb-4 text-sm font-opensans">Learn about the importance of vegetables in your diet and how to incorporate more of them.</p>
                  <a href="#" className="text-green-500 hover:text-purple-700 font-medium font-montserrat flex items-center">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Article 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <Image src="/Rectangle 1 (2).png" alt="Cook" className="w-full h-48 object-cover" width={100} height={100} />
                <div className="p-6">
                  <h3 style={{ color: '#412B59' }} className="text-xl font-semibold font-poppins mb-2">Want to prepare health foods quickly?</h3>
                  <p style={{ color: '#5F6D7E' }} className="mb-4 text-sm font-opensans">Time-saving tips and tricks for preparing nutritious meals without spending hours in the kitchen.</p>
                  <a href="#" className="text-green-500 hover:text-purple-700 font-medium font-montserrat flex items-center">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-20 relative" style={{ backgroundImage: "url('/Footer 1.png')" }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start max-w-7xl mx-auto px-12">

          {/* Logo & Tagline */}
          <div className="flex items-start space-x-4">
            <Image
              src="/logo-footer.bmp"
              alt="Logo"
              className="h-22 self-start -mt-4"  // ⬅ Moves the logo image up slightly
              width={100}
              height={100}
            />
            <div>
              <h1 className="font-bold font-poppins tracking-wide text-white text-3xl">
                <span className="font-light">Meal</span>Topia
              </h1>
              <span className="text-xs tracking-wider text-gray-200 opacity-60 font-montserrat">BETTER PEOPLE&apos;S LIVES</span>
            </div>
          </div>



          {/* Links & Contact */}
          <div className="md:col-span-3 md:ml-50 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Quick Link 1 */}
            <div>
              <h4 className="mb-4 text-white tracking-wide font-montserrat" style={{ opacity: 0.5 }}>
                Quick Link
              </h4>
              <ul className="space-y-2">
                <li><NavLink href="/" label="Home" /></li>
                <li><NavLink href="#" label="About" /></li>
                <li><NavLink href="#" label="Team" /></li>
              </ul>
            </div>

            {/* Quick Link 2 */}
            <div>
              <h4 className="mb-4 text-white tracking-wide font-montserrat" style={{ opacity: 0.5 }}>
                Quick Link
              </h4>
              <ul className="space-y-2">
                <li><NavLink href="/articles" label="Articles & Events" /></li>
                <li><NavLink href="/careers" label="Careers" /></li>
                <li><NavLink href="/contact" label="Contact" /></li>
              </ul>
            </div>

            {/* Contact Info & Social */}
            <div>
              <h4 className="mb-4 text-white tracking-wide font-montserrat" style={{ opacity: 0.5 }}>
                Get In Touch
              </h4>
              <ul className="space-y-3 text-gray-200 text-sm font-opensans">
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faPhone} className="mr-2 w-6" />
                  +20 1060228306
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2 w-6" />
                  info@mealtopia.com
                </li>
              </ul>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-white hover:text-gray-300 text-xl">
                  <i className="fab fa-facebook-f w-6"></i>
                </a>
                <a href="#" className="text-white hover:text-gray-300 text-xl">
                  <i className="fab fa-instagram w-6"></i>
                </a>
                <a href="#" className="text-white hover:text-gray-300 text-xl">
                  <i className="fab fa-twitter w-6"></i>
                </a>
                <a href="#" className="text-white hover:text-gray-300 text-xl">
                  <i className="fab fa-youtube w-6"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

      </footer>


      <div className="bg-[#4A116D] py-6">
        <div className="max-w-7xl mx-auto px-13">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 text-center">
            <p className="opacity-50 font-opensans mb-2 md:mb-0">
              2022 MEALTOPIA LIFESTYLE CORP. All Rights Reserved.
            </p>
            <div className="flex space-x-4">
              <NavLink href="/privacy" label="Privacy Policy" />
              <NavLink href="/terms" label="Terms and Conditions" />
            </div>
          </div>
        </div>
      </div>





    </div>
  )
}