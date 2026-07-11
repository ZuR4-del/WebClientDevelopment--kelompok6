import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'

const story = [
  {
    title: 'The Inception Story',
    date: 'January 1, 2010',
    icon: 'bi-seedling',
    text: 'On this day, Dietary was born with a clear vision to help individuals reach their weight and health goals through personalized nutrition coaching. Recognizing the urgent need for a truly sustainable and effective approach to healthy living, founder Sarah Mitchell set out to make a difference, officially beginning the journey of Dietary.',
  },
  {
    title: 'Research and Expertise Story',
    date: 'March 15, 2012',
    icon: 'bi-clipboard2-data',
    text: 'Following extensive research and close collaboration with leading health experts, Sarah Mitchell and her team developed a comprehensive program rooted in rigorous scientific knowledge and evidence-based strategies. This pivotal milestone marked the formal establishment of Dietary as a premier, trusted authority in personalized nutrition coaching.',
  },
  {
    title: 'Expanding Reach Story',
    date: 'June 10, 2014',
    icon: 'bi-globe2',
    text: 'Dietary has expanded its reach by launching a dynamic online platform, allowing individuals worldwide to access personalized nutrition plans and expert guidance. This pivotal milestone brings unmatched convenience and seamless accessibility to our rapidly growing global client base.',
  },
  {
    title: 'Celebrating Success Stories',
    date: 'September 5, 2015',
    icon: 'bi-trophy',
    text: "Dietary proudly celebrated its 500th client success story, marking a significant milestone in our journey. These powerful transformations highlight the profound, positive impact personalized nutrition coaching has on our clients, while further inspiring our team to deliver exceptional service every day.",
  },
  {
    title: 'Innovating for Clients Story',
    date: 'January 20, 2017',
    icon: 'bi-people',
    text: 'In response to the growing demand for personalized nutrition coaching, Dietary has strategically expanded its team of qualified nutritionists and dietitians. This milestone enhances our capacity to deliver even higher levels of individualized care and tailored support to our growing client base.',
  },
  {
    title: 'Enhanced Support Story',
    date: 'April 1, 2018',
    icon: 'bi-headset',
    text: 'In response to the growing demand for personalized nutrition coaching, Nutritionist expanded its team of qualified nutritionists and dietitians. This milestone enabled us to provide even more individualized care and tailored support to our clients.',
  },
  {
    title: 'Collaborating for Success Story',
    date: 'July 15, 2019',
    icon: 'bi-handshake',
    text: 'Dietary has established strategic partnerships with renowned health professionals, including top-tier nutritionists, dietitians, and wellness experts. These collaborations enable us to integrate diverse perspectives and multidisciplinary expertise, ensuring that our clients receive the absolute highest level of evidence-based guidance.',
  },
  {
    title: 'Continued Growth Story',
    date: 'November 2, 2021',
    icon: 'bi-graph-up-arrow',
    text: 'Dietary proudly celebrated a major milestone, having served over 5,000 clients. This achievement stands as a powerful testament to our unwavering commitment to helping individuals reach their health and weight loss goals, while highlighting the profound, positive impact we have made on thousands of lives.',
  },
  {
    title: 'Recognition and Accolades Story',
    date: 'March 10, 2023',
    icon: 'bi-award',
    text: 'Dietary has earned prestigious industry recognition for its excellence in personalized nutrition coaching. Our innovative approach and unwavering dedication to client success have garnered well-deserved accolades, solidifying our position as a leading provider in the health and wellness sector.',
  },
  {
    title: 'Inspiring Transformations Story',
    date: 'July 1, 2025',
    icon: 'bi-stars',
    text: 'At Dietary, we are constantly empowering people to redefine their lives through customized nutrition coaching. As our community grows and our impact expands, our core mission remains unchanged: helping you manage weight, elevate your health, and unlock a happier, more vibrant lifestyle. We are proud to keep inspiring real transformations, one person at a time.',
  },
]

const achievements = [
  {
    icon: 'bi-people-fill',
    title: '10,000+ Transformations',
    text: 'Our personalized nutrition plans have helped thousands of individuals reach their weight loss goals and maintain a healthy lifestyle.',
  },
  {
    icon: 'bi-patch-check-fill',
    title: 'Recognition for Excellence',
    text: 'Dietary has been widely recognized as a premier provider of personalized nutrition coaching, earning accolades for our forward-thinking approach and unwavering commitment to client success.',
  },
  {
    icon: 'bi-chat-heart-fill',
    title: 'Positive Client Reviews',
    text: 'We have received numerous testimonials from satisfied clients who have experienced significant improvements in their health, weight, and overall well-being through our coaching program.',
  },
  {
    icon: 'bi-diagram-3-fill',
    title: 'Collaborate With Top Health Experts',
    text: 'We have established partnerships with respected nutritionists, dietitians, and health experts to ensure that our clients receive the highest quality guidance and support.',
  },
]

function About() {
  return (
    <>
      <PageHeader
        title="Welcome to Dietary"
        description="Meet Dietary — your ultimate companion for personalized nutrition coaching. We are on a mission to help you smash your weight and health goals with custom meal plans that easily fit your unique lifestyle and taste. Guided by our team of expert nutritionists and dietitians, you'll get the tools and insights needed to build habits that stick. Whether you want to lose weight, feel more energized, or simply fix your relationship with food, we've got your back at every turn."
      />

      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="mb-3">Our Story</h2>
            <p className="mx-auto" style={{ maxWidth: 560 }}>
              Welcome to Dietary, your trusted partner in achieving optimal health through
              personalized nutrition coaching. Our certified nutritionists and dietitians are here
              to guide, support, and empower you on every step of your weight loss journey.
            </p>
          </div>

          <div className="d-flex flex-column gap-4">
            {story.map((item, i) => (
              <div className="row g-4 align-items-center" key={item.title}>
                <div className={`col-md-6 ${i % 2 === 1 ? 'order-md-2' : ''}`}>
                  <ImagePlaceholder icon={item.icon} label="Ganti dengan foto dari Figma" />
                </div>
                <div className={`col-md-6 ${i % 2 === 1 ? 'order-md-1' : ''}`}>
                  <div className="p-4 rounded-card h-100" style={{ backgroundColor: 'var(--card-mint)' }}>
                    <h5 className="mb-2" style={{ borderBottom: '2px solid var(--lime-dark)', display: 'inline-block', paddingBottom: 4 }}>
                      {item.title}
                    </h5>
                    <p className="small mb-3">{item.text}</p>
                    <span className="small fw-semibold" style={{ color: 'var(--text-dark)' }}>
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-cream">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="mb-3">Company Achievements</h2>
            <p className="mx-auto" style={{ maxWidth: 620 }}>
              At Dietary, we take great pride in our milestones and the meaningful, positive impact
              we have made on the lives of our clients. Here is a look at some of our most notable
              achievements.
            </p>
          </div>

          <div className="row g-4">
            {achievements.map((item) => (
              <div className="col-md-6" key={item.title}>
                <div className="p-4 rounded-card h-100 bg-white d-flex gap-3">
                  <div className="icon-badge flex-shrink-0">
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <div>
                    <h6 className="mb-2">{item.title}</h6>
                    <p className="small mb-0">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="rounded-card mt-5 p-4 p-md-5 d-flex flex-column flex-md-row align-items-center justify-content-between gap-4"
            style={{ backgroundColor: 'var(--card-mint)' }}
          >
            <div>
              <h4 className="mb-2">We Are Proud of Our Achievements</h4>
              <p className="mb-0 small" style={{ maxWidth: 520 }}>
                But our ultimate satisfaction comes from seeing our clients achieve their goals and
                live healthier, happier lives. Join Dietary today and embark on your own
                transformative journey towards optimal health and wellness.
              </p>
            </div>
            <Link to="/contact" className="btn btn-lime text-nowrap">Book a Demo</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
