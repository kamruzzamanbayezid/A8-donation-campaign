

const Banner = () => {
      return (
            <div>
                  <div className="bannerStyle w-full h-[400px] relative mb-7 lg:mb-20">
                        <img src="https://i.ibb.co/H4zHnBD/smiley-volunteers-posing-boxes-donation.jpg" alt="Background Image" className="w-full h-full" />
                        <div className="w-full h-full absolute top-0 left-0 bg-[#fffffff2]"></div>
                        <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                              <h1 className='text-[#0B0B0B] text-4xl mb-9 font-bold'>I Grow By Helping People In Need</h1>
                              <input className='rounded-l-lg lg:w-1/2 w-full h-14 text-[#0b0b0b66] bg-[#FFF] border border-solid border-[#DEDEDE] pl-4' type="text" placeholder="Search here...." />
                              <button className='bg-[#FF444A] text-[#FFF] rounded-r-lg  font-semibold py-4 px-7'>Search</button>
                        </div>
                  </div>
            </div>
      );
};

export default Banner;