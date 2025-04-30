// function GetInvolved() {
//     return (
//       <section id="involved">
//         <h2>Get Involved</h2>
//         <p>Be the voice of the village. Be the change in the climate.</p>
//         <ul style={{ listStyle: 'none', padding: 0 }}>
//           <li>🌿 Volunteer with us</li>
//           <li>🌿 Donate to support our projects</li>
//           <li>🌿 Partner for corporate or academic collaboration</li>
//         </ul>
//       </section>
//     );
//   }

//   export default GetInvolved;


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

function GetInvolved() {
  return (
    <section id="about" className="bg-green-50 py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center">

        {/* ABOUT SECTION */}
        <div className="about section mb-20">
          <div className="about__container grid">

            <h2 className="section__title-1 text-5xl font-bold mb-10">
              <span>Get Involved</span>
            </h2>

            <div className="about__perfil mb-10">
              <div className="about__image relative mx-auto w-60 h-60">
                <img
                  src="a.avif"
                  alt="profile"
                  className="about__img rounded-full object-cover w-full h-full"
                />
                <img
                  src="b.avif"
                  alt="profile"
                  className="about__img rounded-full object-cover w-full h-full"
                />
                {/* Decorations */}
                <div className="about__shadow absolute inset-0 bg-black opacity-10 rounded-full"></div>
                <div className="geometric-box absolute top-0 left-0 w-6 h-6 bg-green-500"></div>
                <div className="about__box absolute bottom-0 right-0 w-8 h-8 bg-green-300"></div>
              </div>
            </div>

            <div className="about__info text-gray-700">
              {/* <p className="about__description mb-6 text-lg">
               </p> */}
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>🌿 Volunteer with us</li>
                <li>🌿 Donate to support our projects</li>
                <li>🌿 Partner for corporate or academic collaboration</li>
              </ul>
              {/* <ul className="about__list list-disc list-inside mb-6 text-left max-w-md mx-auto">
                <li className="about__item">
                  <b>My Skills Are:</b> HTML, CSS, JavaScript, React, Git & GitHub, Bootstrap, Flutter & Figma.
                </li>
              </ul> */}

              {/* <div className="about__buttons flex justify-center gap-6">
                <a href="#contact" className="button flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
                  <i className="ri-send-plane-line"></i> Contact Me
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="button__ghost flex items-center gap-2 px-4 py-2 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-50 transition">
                  <i className="ri-linkedin-box-line"></i>
                </a>
              </div> */}
            </div>

          </div>
        </div>

    

      </div>
    </section>
  );
}

export default GetInvolved;
