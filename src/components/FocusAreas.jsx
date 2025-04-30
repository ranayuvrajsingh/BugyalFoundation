import React from 'react';

function FocusAreas() {
  return (
    <section id="about" className="bg-green-50 py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* ABOUT SECTION */}
        <div className="about section mb-20">
          <div className="about__container grid">
            <h2 className="section__title-1 text-5xl font-bold mb-10">
              <span>Focus Areas</span>
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
              {/* <p className="about__description mb-6 text-lg">
                <strong>"Let the Hills Learn. Let the Earth Heal."</strong> Founded with love for the land and people of the Himalayas, 
                Bugyal Foundation works to empower rural communities, especially in remote and underdeveloped areas. 
                Our name comes from the word “Bugyal”, meaning alpine meadows in the mountains—a symbol of harmony between nature and life.
              </p> */}

              <div className="text-left max-w-3xl mx-auto">
                <h3 className="text-2xl font-semibold text-green-800 mb-4">1. Rural Education Empowerment</h3>
                <p className="mb-4">
                  <strong>"Shiksha Se Shakti – Education is Power."</strong> We are dedicated to ensuring that every child in rural communities has access to meaningful education.
                </p>
                <ul className="list-disc list-inside mb-6">
                  <li><strong>Project Pahaad Pathshala</strong>: Establishing and enhancing village schools in hill regions.</li>
                  <li><strong>Shiksha Sapna</strong>: Supporting students with learning materials, uniforms, and digital access.</li>
                  <li><strong>Teacher Training</strong>: Empowering educators through specialized training programs.</li>
                  <li><strong>Community Learning Centers</strong>: Creating spaces for after-school programs and adult literacy drives.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-green-800 mb-4">2. Environment & Sustainability</h3>
                <p className="mb-4">
                  <strong>"Green Minds. Clean Earth."</strong> We promote ecological awareness and action that is community-led and locally rooted.
                </p>
                <ul className="list-disc list-inside mb-6">
                  <li><strong>Green Roots Movement</strong>: Tree plantations, native forest revival, and climate awareness campaigns.</li>
                  <li><strong>EcoVaani</strong>: Environmental education using stories, folk art, and local wisdom.</li>
                  <li><strong>Clean Water and Sanitation</strong>: Implementing village-level clean water, sanitation, and plastic-free campaigns.</li>
                  <li><strong>Sustainable Farming Training</strong>: Conducting waste management workshops and promoting sustainable agricultural practices.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FocusAreas;
