// components/Card.js
import { formatter } from '@/static';
import { History } from '@/types';
import Link from 'next/link';
import React from 'react';
import DeleteButton from './DeleteButton';

const HistoryCard = ( {history} : {history: History}) => {
  const { newsLink, branch, createdAt, category, photoUrl, eventDate, description, id } = history

  console.log(typeof history)


  if(!history.category) return <p>Kosong</p>
  return (
    <div className="rounded overflow-hidden shadow-lg bg-sky-700 m-4 flex flex-col justify-between">
      <img className="w-full" src={photoUrl} alt={description} />
      <div className="text-white px-6 py-4 overflow-auto max-h-56">
        <div className="font-bold text-xl mb-2">{description}</div>
        <p className="text-base">
          Branch: {branch}
        </p>
        <p className="text-base">
          Category: {category}
        </p>
        <p className="text-base">
          Event Date: {new Date(eventDate).toLocaleDateString()}
        </p>
        <p className="text-base">
          Created At: {formatter.format(+createdAt as number)}
        </p>
      </div>
      <div className="flex justify-around">  
        <Link href={newsLink} className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Read More</Link>
        <Link href={`/galery/edit/${id}`} className="inline-block bg-yellow-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Edit</Link>
      
        <DeleteButton id={id} />

        
      </div>
    </div>
  );
};

export default HistoryCard;
