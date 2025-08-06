import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye, FaStar } from 'react-icons/fa';

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    published_date = author.published_date,
  } = news;

  const formatDate = (date) =>
    new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  return (
    <div className="card bg-base-100 shadow-md rounded-xl overflow-hidden w-full max-w-xl mx-auto">
      {/* Author Info */}
      <div className="flex  bg-base-200 justify-between items-center  p-4">
       <div className='flex items-center gap-3'>
         <div className="avatar">
          <div className="w-12 rounded-full">
            <img src={author.img} alt={author.name} />
          </div>
        </div>
        <div>
          <h2 className="font-semibold">{author.name}</h2>
          <p className="text-xs text-gray-500">{formatDate(published_date)}</p>
        </div>
        </div>
        <div>
            <button className='text-gray-500 hover:text-primary flex gap-1'>
            <CiBookmark></CiBookmark>
            <CiShare2></CiShare2>
        </button>
        </div>
       
      </div>

      {/* Title */}
      <div className="px-4">
        <h2 className="text-lg font-bold text-gray-800 leading-snug">
          {title}
        </h2>
      </div>

      {/* Thumbnail */}
      <figure className="px-4 pt-4">
        <img
          src={thumbnail_url}
          alt="news thumbnail"
          className="w-full h-56 object-cover rounded-xl"
        />
      </figure>

      {/* Content */}
      <div className="card-body pt-4">
        <p className="text-sm text-gray-600 leading-relaxed">
          {details.length > 200 ? details.slice(0, 200) + '...' : details}
        </p>
        <button className="text-primary font-semibold hover:underline mt-2">
          Read More
        </button>

        {/* Footer Info */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-200 mt-4 text-sm text-gray-600">
          {/* Rating */}
          <div className="flex items-center gap-1 text-orange-500">
            {Array.from({ length: Math.round(rating.number) }, (_, i) => (
              <FaStar key={i} />
            ))}
            <span className="ml-1 text-gray-700">{rating.number}</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-1">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
