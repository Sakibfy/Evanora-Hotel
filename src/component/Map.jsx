

const Map = () => {
  return (
    <div className="map-container my-4">
      <div><h2 className="map-title font-bold text-3xl my-3">Our Location</h2>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1558.2302306640606!2d100.56210199639237!3d13.73270066009115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29eef17783845%3A0x53c19159f3407675!2sPark%20Plaza%20Bangkok%20Soi%2018!5e1!3m2!1sen!2sbd!4v1734868516135!5m2!1sen!2sbd"
          width="50%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map Location"
        ></iframe>
        
        </div></div>
      <div></div>
    </div>
  );
};

export default Map;