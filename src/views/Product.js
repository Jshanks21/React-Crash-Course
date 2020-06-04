import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import { useAxiosGet } from '../Hooks/HttpRequests'

export default function Product(){
  const { id } = useParams()
  const url = `https://5ed83599152c310016d8584e.mockapi.io/api/v1/nfts/${id}`

  let nft = useAxiosGet(url)

  let content = null

  if(nft.error){
    content = <p>
      NFTs coming to a device near you.
    </p>
  }

  if(nft.loading){
    content = <Loader />
  }

  if(nft.data){
    content =
      <div>
        <h1 className="text-2xl font-bold mb-3">
          {nft.data.name}
        </h1>
        <div>
          <img src={nft.data.avatar} alt={nft.data.name} />
        </div>
        <div className="font-bold text-xl mb-3">
          Member: {nft.data.createdAt}
        </div>
      </div>
  }

  return(
    <div>
      {content}
    </div>
  )

}
