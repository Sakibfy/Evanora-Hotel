import { motion } from "framer-motion";

const facilitiesData = [
  {
    title: "Have High Rating",
    description:
      "We take pride in curating a selection of hotels that consistently receive high ratings and positive reviews.",
    imageUrl: "https://i.ibb.co.com/pjDD2GZ9/like.png",
  },
  {
    title: "Quiet Hours",
    description:
      "We understand that peace and uninterrupted rest are essential for a rejuvenating experience romantic getaway.",
    imageUrl: "https://i.ibb.co.com/LzgNdJmQ/clock.png",
  },
  {
    title: "Best Location",
    description:
      "At our hotel booking website, we take pride in offering accommodations in the most prime and sought-after locations.",
    imageUrl: "https://i.ibb.co.com/G3CFfZQH/placeholder.png",
  },
  {
    title: "Free Cancellation",
    description:
      "We understand that travel plans can change unexpectedly, which is why we offer the flexibility of free cancellation.",
    imageUrl: "https://i.ibb.co.com/Fbmk2XnK/cancel.png",
  },
  {
    title: "Payment Options",
    description:
      "Our hotel booking website offers a range of convenient payment options to suit your preferences.",
    imageUrl: "https://i.ibb.co.com/LdrQMSbF/credit-card.png",
  },
  {
    title: "Special Offers",
    description:
      "Whether you're planning a romantic getaway or a business trip, our carefully curated special offers cater to your needs.",
    imageUrl: "https://i.ibb.co.com/W4vvsf1j/email.png",
  },
];

const FacilitiesData = () => {
  return (
    <motion.div
      className="my-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-center font-semibold text-xl">FACILITIES</h2>
      <h3 className="text-center font-bold text-5xl pb-10">Core Features</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {facilitiesData.map((facility, index) => (
          <motion.div
            key={index}
            className="max-w-xl p-6 rounded-md bg-gray-50 text-gray-900 shadow-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <img className="w-12 h-12" src={facility.imageUrl} alt="" />
            <div className="mt-6 mb-2 text-left">
              <h2 className="text-xl font-semibold tracking-wide">
                {facility.title}
              </h2>
            </div>
            <p className="text-black">{facility.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FacilitiesData;
