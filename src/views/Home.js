import React from 'react'
import Loader from '../components/Loader'
import NftCard from '../components/NftCard'
import { useAxiosGet } from '../Hooks/HttpRequests'

export default function Home(){
  const url = `https://5ed83599152c310016d8584e.mockapi.io/api/v1/nfts?p=1&l=10`

  let nfts = useAxiosGet(url)

  let content = null

  if(nfts.error){
    content = <p>
      There was an error. Please refresh or try again later.
    </p>
  }

  if(nfts.loading){
    content = <Loader />
  }

  if(nfts.data){
    content =
      nfts.data.map((nft, index) =>
        <div key={index}>
          <NftCard
            nft={ nft }
          />
        </div>
      )
  }

  return(
    <div>
      <h1 className="font-bold text-2xl mb-3">
        Best Sellers
      </h1>
      {content}
    </div>
  )
}
