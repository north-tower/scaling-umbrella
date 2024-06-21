import React from 'react'


export type Posts = {
  id: string
  date: string
  title: string
  shortDescription: string
  description: string
}


async function fetchData() {
  try {
    const response = await fetch('https://supreme-goggles-beta.vercel.app/api/v1/getAllBudgetUsages');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: Posts[] = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return [];
  }
}


function page() {
  return (
    <div>page</div>
  )
}

export default page



