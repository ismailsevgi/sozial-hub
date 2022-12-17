import { faker } from '@faker-js/faker';
import React, { useEffect, useState } from 'react';

import {
  suggestionTuble,
  SuggestionCreator,
} from '../../../Interfaces/interfaces';

function Suggestions() {
  const [suggestionList, setSuggestionList] = useState<suggestionTuble>([]);
  useEffect(() => {
    setSuggestionList(
      [...Array(5)].map((suggest) => {
        return SuggestionCreator(
          faker.datatype.uuid(),
          faker.internet.userName(),
          faker.image.avatar()
        );
      })
    );
  }, []);

  return (
    <div className=''>
      <div className='flex justify-between items-center bg-white px-4'>
        <p className={`text-gray-500 text-bold text-sm  my-2`}>
          Suggestions for you
        </p>
        <button className='text-sm'>See All</button>
      </div>
      <div className='rounded-bl-lg rounded-br-lg border'>
        {suggestionList.map((profile) => {
          return (
            <div
              className='flex items-center justify-between py-4 bg-white px-4 '
              key={profile.id}
            >
              <div className='flex items-center'>
                <div className='w-10 h-10'>
                  <img
                    className='rounded-full'
                    src={profile.profilePhoto}
                    alt='Profile Photo'
                  />
                </div>
                <div className='ml-4 my-1'>
                  <p className='font-semibold text-sm'>{profile.username}</p>
                  <p className='text-gray-500 text-xs'>Suggested for you</p>
                </div>
              </div>

              <button className='text-blue-400 text-sm font-bold'>
                Follow
              </button>
            </div>
          );
        })}
      </div>
      <div className='flex flex-wrap space-x-2 mt-2 justify-center items-center text-white'>
        <p>About</p>
        <span>&#183;</span>
        <p>Help</p>
        <span>&#183;</span>
        <p>Press</p>
        <span>&#183;</span>
        <p>API</p>
        <span>&#183;</span>
        <p>Jobs</p>
        <span>&#183;</span>
        <p>Privacy</p>
        <span>&#183;</span>
        <p>Terms</p>
        <span>&#183;</span>
        <p>Locations</p>
        <span>&#183;</span>
        <p>Language</p>
      </div>

      <div className='text-xs mt-6 text-semibold text-gray-400 text-center'>
        <p>© 2022 derived from Instagram</p>
      </div>
    </div>
  );
}

export default Suggestions;
