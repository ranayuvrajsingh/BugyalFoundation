
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const projectData = [
  {
    title: "Pahaad Pathshala",
    description: "Bringing education to remote mountain villages.",
    image: "Pahaad Pathshala1.avif"
  },
  {
    title: "Green Roots Movement",
    description: "Reviving forests and inspiring climate action.",
    image: "greenroots.avif"
  },
  {
    title: "Shiksha Sapna",
    description: "No child left behind due to lack of resources.",
    image: "Shiksha Sapna.avif"
  },
  {
    title: "EcoVaani",
    description: "Environmental storytelling through local arts.",
    image: "EcoVaani.avif"
  }
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative mt-12  bg-gradient-to-br from-green-50 via-white to-green-100 py-20 px-4 md:px-12 overflow-hidden"
    >
      {/* Decorative background blur circles */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-green-200 opacity-30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-100 opacity-30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-green-800 mb-6 drop-shadow-lg">
          Our Projects
        </h2>
        {/* <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          We believe education is a right, not a privilege, and protecting nature is essential.
          Our work combines sustainability, knowledge, and empowerment for lasting change.
        </p> */}

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
        >
          {projectData.map((project, index) => (
            <SwiperSlide key={index}>
              <Card style={{ width: '100%' }} className="h-100 shadow-lg">
                <Card.Img variant="top" src={project.image} alt={project.title} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  {/* <Button variant="primary">Learn More</Button> */}
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA Section */}
        <div className="bg-green-600 text-white mt-24 p-12 rounded-3xl shadow-2xl max-w-5xl mx-auto relative overflow-hidden">
          {/* Gradient Accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 blur-2xl -z-10" />
         
         
         
        </div>
      </div>
    </section>
  );
}

export default Projects;
