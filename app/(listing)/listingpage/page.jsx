import React from 'react'
import ListSearchBtn from './_components/listsearchbtn/ListSearchBtn'

import PagenationDisplay from './_components/pagenationDisplay/PagenationDisplay'
import Navbar from '@/app/(home)/_components/nav/Navbar';

function page() {
  return (
    <div>
    <Navbar />
      <ListSearchBtn />
      <PagenationDisplay />
    </div>
  );
}

export default page
