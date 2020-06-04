import React from 'react'
import { Link } from 'react-router-dom'

export default function NftCard(props){
  return(
    <div className="border mb-4 rounded overflow-hidden">
      <Link to={`/nfts/${props.nft.id}`}>
        <div
          style={{
            'backgroundImage': `url('${props.nft.avatar}')`
          }}
          className="w-full h-64 bg-blue bg-cover"
        >
        </div>
      </Link>
      <div className="p-3">
        <h3 className="font-bold text-xl mb-3">
          <Link to={`/nfts/${props.nft.id}`}>
            {props.nft.name}
          </Link>
        </h3>
        <div className="mb-3">
          {props.nft.createdAt}
        </div>
        <Link
          to={`/nfts/${props.nft.id}`}
          className="bg-blue-500 text-white p-2 flex justify-center"
        >
          View
        </Link>
      </div>
    </div>
  )
}
