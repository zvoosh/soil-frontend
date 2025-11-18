// SoilInfo.tsx
const infocard = [
  {
    imgSrc: "/images/soil5.jpg",
    title: "Soil Health & Structure",
    description: `Healthy soil is the foundation of every successful crop. Its structure determines how well roots develop,
  how much water the soil can hold, and how quickly nutrients are absorbed. Good soil structure leads to stronger,
  healthier plants and higher yields.`,
  },
  {
    imgSrc: "/images/soil2.jpg",
    title: "Power of Organic Matter",
    description: `Organic matter improves soil fertility, retains moisture, and boosts microbial activity.
  It acts like a natural sponge—holding water during droughts and releasing it when plants need it most.`,
  },
  {
    imgSrc: "/images/soil3.jpg",
    title: "Balancing Soil Nutrients",
    description: `Plants require balanced nutrients such as nitrogen, phosphorus, and potassium to grow properly.
  Maintaining nutrient balance ensures strong roots, vibrant leaves, and optimal crop performance.`,
  },
  {
    imgSrc: "/images/soil4.jpg",
    title: "Soil pH & Growth",
    description: `The pH level of soil directly affects nutrient availability. Slight variations can make the difference
  between thriving crops and nutrient deficiencies. Regular testing helps farmers optimize soil conditions.`,
  },
  {
    imgSrc: "/images/soil1.jpeg",
    title: "Moisture Retention Ability",
    description: `Soil with good moisture retention supports plants during dry periods and reduces irrigation needs.
  Clay and loamy soils excel at holding water, while sandy soils drain quickly and require more frequent watering.`,
  },
  {
    imgSrc: "/images/soil6.jpg",
    title: "Microbial Life Beneath",
    description: `Millions of microorganisms live in every handful of soil. These microbes break down organic matter,
  release nutrients, protect roots, and maintain ecological balance—a hidden world essential for plant health.`,
  },
];

const SoilInfoCard = ({
  imgSrc,
  title,
  description,
}: {
  imgSrc: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="pb-5 xl:grid grid-cols-[500px_1fr] xl:gap-5 xl:border-b xl:border-gray-300">
      <div className="mb-5">
        <img src={imgSrc} alt={title} className="w-full h-auto object-cover" />
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <p className="mb-2">{description}</p>
      </div>
    </div>
  );
};

export default function SoilInfo() {
  return (
    <div className="w-full h-full flex justify-center pt-20 px-10">
      <div className="w-full 2xl:w-3/4 grid grid-cols-1 gap-10 lg:gap-5">
        {infocard.map((item, index) => (
          <SoilInfoCard
            key={index}
            imgSrc={item.imgSrc}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
