import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import logo1 from '../assets/logo1.png';
import MyModal from './MyModal';
import { useState } from 'react';


function Header() {
    const [showMyModal, setShowMyModal] = useState(false);
  const handleOnClose = () => setShowMyModal(false);
 
  return (
  <div>
<div class='flex justify-between items center'>

<div class='flex justify-start'>
<img class='' src={logo1} alt='logo' />
</div>
<ul class='flex justify-evenly items-center font-bold'>
  <li class='p-4'>Home</li>
  <Link t0='/placetostay'>
    <li class='p-4'>Place to stay</li>
  </Link>
  <li class='p-4'>NFTs</li>
  <li class='p-4'>Community</li>
</ul>
<ul>
  <button
   onClick={() => setShowMyModal(true)}  class='bg-[#A02279] text-white rounded-lg p-2'>Connect wallet</button>
</ul>
</div>
  <MyModal onClose={handleOnClose} visible={showMyModal} />

    </div>

  )
};

export default Header;

