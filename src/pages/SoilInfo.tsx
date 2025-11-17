// SoilInfo.tsx
const infocard = [
  {
    imgSrc: "images/soil1.jpeg",
    title: "Nesto",
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          numquam repellendus illum ut asperiores quod ad ratione cupiditate!
          Cupiditate voluptate libero dolorum maxime eum inventore culpa nostrum
          quasi recusandae dolore! Facere illum asperiores magnam dicta
          recusandae voluptatibus maxime soluta quidem autem, corrupti magni
          temporibus mollitia eum delectus modi error provident?`,
  },
  {
    imgSrc: "images/soil2.jpg",
    title: "Nesto",
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          numquam repellendus illum ut asperiores quod ad ratione cupiditate!
          Cupiditate voluptate libero dolorum maxime eum inventore culpa nostrum
          quasi recusandae dolore! Facere illum asperiores magnam dicta
          recusandae voluptatibus maxime soluta quidem autem, corrupti magni
          temporibus mollitia eum delectus modi error provident?`,
  },
  {
    imgSrc: "images/soil3.jpg",
    title: "Nesto",
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          numquam repellendus illum ut asperiores quod ad ratione cupiditate!
          Cupiditate voluptate libero dolorum maxime eum inventore culpa nostrum
          quasi recusandae dolore! Facere illum asperiores magnam dicta
          recusandae voluptatibus maxime soluta quidem autem, corrupti magni
          temporibus mollitia eum delectus modi error provident?`,
  },
  {
    imgSrc: "images/soil1.jpeg",
    title: "Nesto",
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          numquam repellendus illum ut asperiores quod ad ratione cupiditate!
          Cupiditate voluptate libero dolorum maxime eum inventore culpa nostrum
          quasi recusandae dolore! Facere illum asperiores magnam dicta
          recusandae voluptatibus maxime soluta quidem autem, corrupti magni
          temporibus mollitia eum delectus modi error provident?`,
  },
  {
    imgSrc: "images/soil2.jpg",
    title: "Nesto",
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          numquam repellendus illum ut asperiores quod ad ratione cupiditate!
          Cupiditate voluptate libero dolorum maxime eum inventore culpa nostrum
          quasi recusandae dolore! Facere illum asperiores magnam dicta
          recusandae voluptatibus maxime soluta quidem autem, corrupti magni
          temporibus mollitia eum delectus modi error provident?`,
  },
  {
    imgSrc: "images/soil3.jpg",
    title: "Nesto",
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          numquam repellendus illum ut asperiores quod ad ratione cupiditate!
          Cupiditate voluptate libero dolorum maxime eum inventore culpa nostrum
          quasi recusandae dolore! Facere illum asperiores magnam dicta
          recusandae voluptatibus maxime soluta quidem autem, corrupti magni
          temporibus mollitia eum delectus modi error provident?`,
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
    <>
      <div className="mb-5">
        <img src={imgSrc} alt="name" className="w-full h-auto object-cover" />
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <p className="mb-2">{description}</p>
      </div>
    </>
  );
};

export default function SoilInfo() {
  return (
    <div className="w-full h-full flex justify-center pt-20">
      <div className="w-full lg:w-2/3 grid grid-cols-1 2xl:grid-cols-[500px_1fr] gap-10 lg:gap-5">
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
