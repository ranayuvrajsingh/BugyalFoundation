import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

function About() {
  return (
    <section id="about" className="bg-green-50 py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center">

        {/* ABOUT SECTION */}
        <div className="about section mb-20">
          <div className="about__container grid">

            <h2 className="section__title-1 text-5xl font-bold mb-10">
              <span>About Us</span>
            </h2>

            <div className="about__perfil mb-10">
              <div className="about__image relative mx-auto w-60 h-60">
                <img 
                  src="student.jpeg" 
                  alt="profile" 
                  className="about__img rounded-full object-cover w-full h-full"
                />
                <img 
                  src="student2.jpeg" 
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
             

              <p className="about__description mb-6 text-lg">
               
              </p>

              <ul className="about__list list-disc list-inside mb-6 text-left max-w-md mx-auto">
                <li className="about__item">
                  <b>Rural Education Empowerment:</b> Ensuring every child in rural communities has access to meaningful education through initiatives like Project Pahaad Pathshala and Shiksha Sapna.
                </li>
                <li className="about__item">
                  <b> We believe that education is a right :</b>  not a privilege, and that protecting nature is essential. Our mission is to make education accessible and inclusive, preserve natural ecosystems, and promote local leadership and sustainable living.
                </li>
                <li className="about__item">
                  <b>Environment & Sustainability:</b> Promoting ecological awareness and action that is community-led and locally rooted, through programs like the Green Roots Movement and EcoVaani.
                </li>
                <li className="about__item">
                  <b> Join us in our mission to empower :</b>  educate, and sustain. Together, we can create a future where every child learns and every tree thrives.
                </li>
              </ul>


            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
