"use client";

import { Avatar } from "@mui/material";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This platform has transformed how we run our clinic!",
      author: "Dr. Smith",
      image: "images/testinomial1.jpg",
    },
    {
      quote: "Efficient and easy to use, highly recommend.",
      author: "Dr. Johnson",
      image: "images/testinomial2.jpg",
    },
    {
      quote: "Our clinic's productivity has increased significantly thanks to this system.",
      author: "Dr. Williams",
      image: "images/testinomial3.jpg",
    },
  ];


  return (
    <section id="testimonials" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headerStyle}>What Our Clients Say</h2>
        <div style={testimonialsContainerStyle}>
          {testimonials.map((testimonial, index) => (
            <div style={testinomialsStyle}>
            <Avatar sx={{ height: '70px', width: '70px' }} alt = "R" src = {testimonial.image}/>
            <div key={index} style={testimonialStyle}>
              <p style={quoteStyle}>"{testimonial.quote}"</p>
              <p style={authorStyle}>- {testimonial.author}</p>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
const testinomialsStyle = {
    display:"flex", alignItems:"center",justifyContent:"center",flexDirection:"column",
}
const sectionStyle = {
  padding: '150px 0',
  backgroundColor: '#ffffff',
};

const containerStyle = {
  width: '80%',
  margin: '0 auto',
  textAlign: 'center',
};

const headerStyle = {
  fontSize: '2.5em',
  marginBottom: '30px',
};

const testimonialsContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
};

const testimonialStyle = {
  flex: '1',
  margin: '10px',
  maxWidth: '300px',
  border: '1px solid #e0e0e0',
  padding: '20px',
  borderRadius: '5px',
  backgroundColor: '#f9f9f9',
};

const quoteStyle = {
  fontSize: '1.2em',
  fontStyle: 'italic',
  marginBottom: '10px',
};

const authorStyle = {
  fontSize: '1em',
  color: '#666',
};

export default Testimonials;
