import React from 'react';

const Location = () => {
  return (
    <div className="w-[90%] mx-auto h-[300px] md:h-[400px] lg:h-[500px] mb-12 md:mb-16">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12764.132520468675!2d30.639687999999997!3d36.8674683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39c5fb2c3498d%3A0x9ba0016c086e71e!2zS29ueWFhbHTEsSBTYWhpbGk!5e0!3m2!1str!2str!4v1710272027071!5m2!1str!2str"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full rounded-lg shadow-md"
      ></iframe>
    </div>
  );
};

export default Location;
