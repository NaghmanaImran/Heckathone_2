import React from "react";

const Category = () => {
  return (
    <>
    <h1>Popular Car</h1>

    <div className="p-4 flex flex-wrap justify-center gap-[50px]">
      {/* Card 1 */}
      <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
        {/* Heart Icon */}
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Koenigsegg</h3>
          <span className="text-red-500 text-xl">❤️</span>
        </div>
        <p className="text-gray-500 text-sm">Sport</p>
        {/* Car Image */}
        <img src="/Car2.png" alt="Car 1" className="w-full h-[120px] object-contain my-4" />
        {/* Specifications */}
        <div className="flex justify-between text-gray-500 text-sm">
          <span>90L</span>
          <span>Manual</span>
          <span>2 People</span>
        </div>
        {/* Pricing */}
        <div className="flex justify-between items-center my-2">
          <p className="text-lg font-bold text-gray-800">$99.00/day</p>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">Rent Now</button>
        </div>
      </div>

      {/* Duplicate Card Structure for Additional Cards */}
      <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Nissan GT - R</h3>
          <span className="text-gray-500 text-xl">♡</span>
        </div>
        <p className="text-gray-500 text-sm">Sport</p>
        <img src="/Car1.png" alt="Car 2" className="w-full h-[120px] object-contain my-4" />
        <div className="flex justify-between text-gray-500 text-sm">
          <span>80L</span>
          <span>Manual</span>
          <span>2 People</span>
        </div>
        <div className="flex justify-between items-center my-2">
          <p className="text-lg font-bold text-gray-800">$80.00/day</p>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">Rent Now</button>
        </div>
      </div>


      <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Nissan GT - R</h3>
          <span className="text-gray-500 text-xl">♡</span>
        </div>
        <p className="text-gray-500 text-sm">Sport</p>
        <img src="/Car.png" alt="Car 2" className="w-full h-[120px] object-contain my-4" />
        <div className="flex justify-between text-gray-500 text-sm">
          <span>80L</span>
          <span>Manual</span>
          <span>2 People</span>
        </div>
        <div className="flex justify-between items-center my-2">
          <p className="text-lg font-bold text-gray-800">$80.00/day</p>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">Rent Now</button>
        </div>
      </div>



      <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Nissan GT - R</h3>
          <span className="text-gray-500 text-xl">♡</span>
        </div>
        <p className="text-gray-500 text-sm">Sport</p>
        <img src="/Car6.png" alt="Car 2" className="w-full h-[120px] object-contain my-4" />
        <div className="flex justify-between text-gray-500 text-sm">
          <span>80L</span>
          <span>Manual</span>
          <span>2 People</span>
        </div>
        <div className="flex justify-between items-center my-2">
          <p className="text-lg font-bold text-gray-800">$80.00/day</p>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">Rent Now</button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
        {/* Heart Icon */}
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Koenigsegg</h3>
          <span className="text-red-500 text-xl">❤️</span>
        </div>
        <p className="text-gray-500 text-sm">Sport</p>
        {/* Car Image */}
        <img src="/Car9.png" alt="Car 1" className="w-full h-[120px] object-contain my-4" />
        {/* Specifications */}
        <div className="flex justify-between text-gray-500 text-sm">
          <span>90L</span>
          <span>Manual</span>
          <span>2 People</span>
        </div>
        {/* Pricing */}
        <div className="flex justify-between items-center my-2">
          <p className="text-lg font-bold text-gray-800">$99.00/day</p>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">Rent Now</button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
        {/* Heart Icon */}
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Koenigsegg</h3>
          <span className="text-red-500 text-xl">❤️</span>
        </div>
        <p className="text-gray-500 text-sm">Sport</p>
        {/* Car Image */}
        <img src="/Car10.png" alt="Car 1" className="w-full h-[120px] object-contain my-4" />
        {/* Specifications */}
        <div className="flex justify-between text-gray-500 text-sm">
          <span>90L</span>
          <span>Manual</span>
          <span>2 People</span>
        </div>
        {/* Pricing */}
        <div className="flex justify-between items-center my-2">
          <p className="text-lg font-bold text-gray-800">$99.00/day</p>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">Rent Now</button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
        {/* Heart Icon */}
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Koenigsegg</h3>
          <span className="text-red-500 text-xl">❤️</span>
        </div>
        <p className="text-gray-500 text-sm">Sport</p>
        {/* Car Image */}
        <img src="/Car11.png" alt="Car 1" className="w-full h-[120px] object-contain my-4" />
        {/* Specifications */}
        <div className="flex justify-between text-gray-500 text-sm">
          <span>90L</span>
          <span>Manual</span>
          <span>2 People</span>
        </div>
        {/* Pricing */}
        <div className="flex justify-between items-center my-2">
          <p className="text-lg font-bold text-gray-800">$99.00/day</p>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">Rent Now</button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
        {/* Heart Icon */}
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Koenigsegg</h3>
          <span className="text-red-500 text-xl">❤️</span>
        </div>
        <p className="text-gray-500 text-sm">Sport</p>
        {/* Car Image */}
        <img src="/Car12.png" alt="Car 1" className="w-full h-[120px] object-contain my-4" />
        {/* Specifications */}
        <div className="flex justify-between text-gray-500 text-sm">
          <span>90L</span>
          <span>Manual</span>
          <span>2 People</span>
        </div>
        {/* Pricing */}
        <div className="flex justify-between items-center my-2">
          <p className="text-lg font-bold text-gray-800">$99.00/day</p>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">Rent Now</button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
        {/* Heart Icon */}
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Koenigsegg</h3>
          <span className="text-red-500 text-xl">❤️</span>
        </div>
        <p className="text-gray-500 text-sm">Sport</p>
        {/* Car Image */}
        <img src="/Car13.png" alt="Car 1" className="w-full h-[120px] object-contain my-4" />
        {/* Specifications */}
        <div className="flex justify-between text-gray-500 text-sm">
          <span>90L</span>
          <span>Manual</span>
          <span>2 People</span>
        </div>
        {/* Pricing */}
        <div className="flex justify-between items-center my-2">
          <p className="text-lg font-bold text-gray-800">$99.00/day</p>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">Rent Now</button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
        {/* Heart Icon */}
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Koenigsegg</h3>
          <span className="text-red-500 text-xl">❤️</span>
        </div>
        <p className="text-gray-500 text-sm">Sport</p>
        {/* Car Image */}
        <img src="/Car2.png" alt="Car 1" className="w-full h-[120px] object-contain my-4" />
        {/* Specifications */}
        <div className="flex justify-between text-gray-500 text-sm">
          <span>90L</span>
          <span>Manual</span>
          <span>2 People</span>
        </div>
        {/* Pricing */}
        <div className="flex justify-between items-center my-2">
          <p className="text-lg font-bold text-gray-800">$99.00/day</p>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">Rent Now</button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
        {/* Heart Icon */}
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Koenigsegg</h3>
          <span className="text-red-500 text-xl">❤️</span>
        </div>
        <p className="text-gray-500 text-sm">Sport</p>
        {/* Car Image */}
        <img src="/Car14.png" alt="Car 1" className="w-full h-[120px] object-contain my-4" />
        {/* Specifications */}
        <div className="flex justify-between text-gray-500 text-sm">
          <span>90L</span>
          <span>Manual</span>
          <span>2 People</span>
        </div>
        {/* Pricing */}
        <div className="flex justify-between items-center my-2">
          <p className="text-lg font-bold text-gray-800">$99.00/day</p>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">Rent Now</button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
        {/* Heart Icon */}
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Koenigsegg</h3>
          <span className="text-red-500 text-xl">❤️</span>
        </div>
        <p className="text-gray-500 text-sm">Sport</p>
        {/* Car Image */}
        <img src="/Car15.png" alt="Car 1" className="w-full h-[120px] object-contain my-4" />
        {/* Specifications */}
        <div className="flex justify-between text-gray-500 text-sm">
          <span>90L</span>
          <span>Manual</span>
          <span>2 People</span>
        </div>
        {/* Pricing */}
        <div className="flex justify-between items-center my-2">
          <p className="text-lg font-bold text-gray-800">$99.00/day</p>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">Rent Now</button>
        </div>
      </div>






      
      
    </div>
    </>
  );
};

export default Category;