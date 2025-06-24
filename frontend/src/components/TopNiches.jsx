import React from 'react'

const TopNiches = () => {
    const services = [
    {
      id: 1,
      service: "Software Development",
      description:
        "Delivering cutting-edge software development solutions to create, enhance, and modernize applications while ensuring top-quality performance and reliability.",
    },
    {
      id: 2,
      service: "Web Development",
      description:
        "End-to-end web development services, from intuitive front-end design to seamless back-end integration, creating responsive and user-centric websites.",
    },
    {
      id: 3,
      service: "Data Science",
      description:
        "Expert data science solutions to process and uncover valuable insights from complex data, enabling smart, data-driven decision-making.",
    },
    {
      id: 4,
      service: "Cloud Computing",
      description:
        "Trusted cloud computing solutions for efficient data management, storage, and processing, delivering scalable and adaptable cloud services.",
    },
    {
      id: 5,
      service: "DevOps",
      description:
        "DevOps solutions that unify software development and operations, improving deployment speed and accelerating time-to-market.",
    },
    {
      id: 6,
      service: "Mobile App Development",
      description:
        "Professional mobile app development for iOS and Android, delivering seamless, user-friendly, and engaging mobile experiences.",
    },
  ];

  return (
    <section className='services'>
        <h3>Top Job Fields</h3>
        <div className="grid">
            {
                services.map(element=>{
                    return(
                        <div className="card" key={element.id}>
                            <h4>{element.service}</h4>
                            <p>{element.description}</p>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default TopNiches