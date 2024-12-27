import React from "react";

function CategorySection() {

  const image = [
    {
      text: "men",
      image:
        "https://media.istockphoto.com/id/661799106/photo/portrait-of-a-young-french-man.jpg?b=1&s=612x612&w=0&k=20&c=YaPm2YexXe6DFd9MJyeAK8sb6bNoeW_XBoAhF5-RKBs="
    },
    {
      text: "kids",
      image:
        "https://media.istockphoto.com/id/1399611777/photo/portrait-of-a-smiling-little-brown-haired-boy-looking-at-the-camera-happy-kid-with-good.jpg?s=612x612&w=0&k=20&c=qZ63xODwrnc81wKK0dwc3tOEf2lghkQQKmotbF11q7Q="
    },
    {
      text: "womans",
      image:
        "https://media.istockphoto.com/id/1425587834/photo/woman-with-hijab.jpg?s=612x612&w=0&k=20&c=K9RZNiUqZkU4MecCazgAZPZC9hLZZRnBSkJVtVajKuA="
    }
  ];
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer">
      {image.map((item, i) => (
        <div key={i} className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
          <img src={item.image} alt="" className="w-full h-full object-cover rounded-lg shadow-md"/>
        <div className="absolute top-20 left-12">
          <p className="text-xl">{item.text}</p>
          <p className="text-gray-600">View All</p>
        </div>
        </div>
      ))}
    </div>
  );
}

export default CategorySection;
