const features = [
  {
    icon: 'bi-clipboard2-pulse',
    title: 'Personalized Nutrition Plans',
    desc: 'Receive a tailored nutrition plan designed specifically for your body and goals. Our certified nutritionists will consider your unique needs, dietary preferences, and health conditions to create a plan that suits you best.',
  },
  {
    icon: 'bi-mortarboard',
    title: 'Guidance from Certified Nutritionists',
    desc: 'Our team of experienced and certified nutritionists will provide professional guidance and support throughout your journey. They will answer your questions, address your concerns, and keep you motivated as you work towards your goals.',
  },
  {
    icon: 'bi-egg-fried',
    title: 'Food Tracking and Analysis',
    desc: 'Effortlessly track your food intake using our user-friendly app. Our nutritionists will analyze your data to provide insights into your eating habits, help you identify areas for improvement, and make personalized recommendations.',
  },
  {
    icon: 'bi-journal-richtext',
    title: 'Meal Planning and Recipes',
    desc: 'Access a vast collection of delicious and healthy recipes tailored to your dietary needs. Our nutritionists will also create personalized meal plans, making it easier for you to stay on track and enjoy nutritious meals.',
  },
  {
    icon: 'bi-heart-pulse',
    title: 'Lifestyle and Behavior Coaching',
    desc: 'Achieving sustainable results requires more than just a diet plan. Our nutritionists will work with you to develop healthy habits, address emotional eating, and provide strategies to overcome obstacles along the way.',
  },
  {
    icon: 'bi-basket2',
    title: 'Nutritional Education and Workshops',
    desc: 'Expand your knowledge of nutrition through informative articles and educational workshops. Our nutritionists will equip you with the knowledge and tools to make informed choices for long-term success.',
  },
]

function Features() {
  return (
    <section id="about" className="py-5 bg-white">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="mb-3">Features</h2>
          <p className="mx-auto" style={{ maxWidth: 560 }}>
            Welcome to the Feature Section of Dietary, your ultimate destination for all things
            nutrition and wellness.
          </p>
        </div>

        <div className="row g-4">
          {features.map((feature) => (
            <div className="col-md-6" key={feature.title}>
              <div className="p-4 rounded-card h-100" style={{ backgroundColor: 'var(--card-mint)' }}>
                <div className="d-flex align-items-start gap-3">
                  <div className="icon-badge flex-shrink-0">
                    <i className={`bi ${feature.icon}`}></i>
                  </div>
                  <div>
                    <h5 className="mb-2">{feature.title}</h5>
                    <p className="mb-0 small">{feature.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
