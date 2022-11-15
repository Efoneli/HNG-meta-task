import log1 from '../assets/01.png';
import Frame1 from '../assets/Frame1.png';
import Frame51 from '../assets/Frame51.png';
import Frame3 from '../assets/Frame3.png';
import Frame4 from '../assets/Frame4.png';
import Frame5 from '../assets/Frame5.png';
import Frame6 from '../assets/Frame6.png';
import Frame7 from '../assets/Frame7.png';
import Frame8 from '../assets/Frame8.png';
import Framestars from '../assets/Frame-stars.png';
import Frame3pic from '../assets/Frame3pic.png';
import mbToken from '../assets/mbToken.png';
import metaMask from '../assets/metaMask.png';
import openSea from '../assets/openSea.png';
import Footer from '../components/Footer';


function App() {
  
  return (
    <div class='h-screen p-8 text-[#434343]'>
   
      <div class='flex justify-between items-center p-4'>
        <div class='p-4'>
          <p class='text-4xl font-bold text-[#434343]'>
            Rent a <span class='text-[#A02279]'>Place</span> far away from <br /> <span class='text-[#A02279]'>Home</span> in the <span class='text-[#A02279]'>Metaverse</span>
          </p>
          <p class='font-bold text-[#434343]'>
            We provide you access to luxury and affordable houses <br /> in the metaverse, get a chance to turn your <br /> imagination to your comfort zone.
          </p>
          <div class='pt-5'>
            <input class='border-solid border-2 border-grey-500 rounded-md px-2' placeholder='Search for location'/>
            <button className='bg-[#A02279] text-white rounded-r-lg px-3 outline-none focus:outline-none'>Search</button>
          </div>
        </div>
        <div>
          < img class='' src={log1} alt='img' />
        </div>
      </div>

      <div class='bg-[#A02279] flex justify-around items-center'>
        <img src={mbToken} alt='mbToken' />
        <img src={metaMask} alt='metaMask' />
        <img src={openSea} alt='opensea' />
      </div>

      <div class='flex flex-col items-center justify-center bg-white'>
        <p class='text-2xl text-black font-bold p-4'>Inspiration for your next adventure</p>
        <div class='grid lg:grid-cols-4 gap-4 sm:grid-cols-2 md:grid-cols-3'>

        <div class='max-w-sm w-full rounded-lg p-2 shadow-2xl border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r leading-normal'>
            <img src={Frame1} alt='' />
            <div class='mt-2'>
              <div class='flex justify-between mb-2'>
              <p>Desert king</p>
              <p class='text-bold'>1MBT per night</p>
              </div>
              <div class='flex justify-between mb-2'>
                <p>2345km away</p>
                <p>available for 2 weeks stay</p>
              </div>
              <img src={Framestars} alt='stars' />
            </div>
          </div>

          <div class='max-w-sm w-full rounded-lg p-2 shadow-2xl border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r leading-normal'>
            <img src={Frame3} alt='' />
            <div class='mt-2'>
              <div class='flex justify-between mb-2'>
              <p>Desert king</p>
              <p class='text-bold'>1MBT per night</p>
              </div>
              <div class='flex justify-between mb-2'>
                <p>2345km away</p>
                <p>available for 2 weeks stay</p>
              </div>
              <img src={Framestars} alt='stars' />
            </div>
          </div>

          <div class='max-w-sm w-full rounded-lg p-2 shadow-2xl border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r leading-normal'>
            <img src={Frame4} alt='' />
            <div class='mt-2'>
              <div class='flex justify-between mb-2'>
              <p>Desert king</p>
              <p class='text-bold'>1MBT per night</p>
              </div>
              <div class='flex justify-between mb-2'>
                <p>2345km away</p>
                <p>available for 2 weeks stay</p>
              </div>
              <img src={Framestars} alt='stars' />
            </div>
          </div>

          <div class='max-w-sm w-full rounded-lg p-2 shadow-2xl border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r leading-normal'>
            <img src={Frame5} alt='' />
            <div class='mt-2'>
              <div class='flex justify-between mb-2'>
              <p>Desert king</p>
              <p class='text-bold'>1MBT per night</p>
              </div>
              <div class='flex justify-between mb-2'>
                <p>2345km away</p>
                <p>available for 2 weeks stay</p>
              </div>
              <img src={Framestars} alt='stars' />
            </div>
          </div>

          <div class='max-w-sm w-full rounded-lg p-2 shadow-2xl border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r leading-normal'>
            <img src={Frame51} alt='' />
            <div class='mt-2'>
              <div class='flex justify-between mb-2'>
              <p>Desert king</p>
              <p class='text-bold'>1MBT per night</p>
              </div>
              <div class='flex justify-between mb-2'>
                <p>2345km away</p>
                <p>available for 2 weeks stay</p>
              </div>
              <img src={Framestars} alt='stars' />
            </div>
          </div>

          <div class='max-w-sm w-full rounded-lg p-2 shadow-2xl border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r leading-normal'>
            <img src={Frame6} alt='' />
            <div class='mt-2'>
              <div class='flex justify-between mb-2'>
              <p>Desert king</p>
              <p class='text-bold'>1MBT per night</p>
              </div>
              <div class='flex justify-between mb-2'>
                <p>2345km away</p>
                <p>available for 2 weeks stay</p>
              </div>
              <img src={Framestars} alt='stars' />
            </div>
          </div>

          <div class='max-w-sm w-full rounded-lg p-2 shadow-2xl border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r leading-normal'>
            <img src={Frame7} alt='' />
            <div class='mt-2'>
              <div class='flex justify-between mb-2'>
              <p>Desert king</p>
              <p class='text-bold'>1MBT per night</p>
              </div>
              <div class='flex justify-between mb-2'>
                <p>2345km away</p>
                <p>available for 2 weeks stay</p>
              </div>
              <img src={Framestars} alt='stars' />
            </div>
          </div>

          <div class='max-w-sm w-full rounded-lg p-2 shadow-2xl border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r leading-normal'>
            <img src={Frame8} alt='' />
            <div class='mt-2'>
              <div class='flex justify-between mb-2'>
              <p>Desert king</p>
              <p class='text-bold'>1MBT per night</p>
              </div>
              <div class='flex justify-between mb-2'>
                <p>2345km away</p>
                <p>available for 2 weeks stay</p>
              </div>
              <img src={Framestars} alt='stars' />
            </div>
          </div>

        </div>
      </div>

      <div class='flex justify-between items-center bg-[#A02279] p-8 text-white'>
        <div>
          <p class='text-2xl mb-4'>Metabnb NFTs</p>
          <p class='mb-4'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTsgives our customer access to loads of our exclusive services.</p>
          <button class='text-[#A02279] bg-white rounded-lg p-2'>Learn more</button>
        </div>
        <img class='' src={Frame3pic} alt='' />
      </div>
    </div>
  );
}

export default App;
