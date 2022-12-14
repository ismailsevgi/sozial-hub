import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Feed from '../Components/Feed/Feed';
import Header from '../Components/Header/Header';
import Popup from '../Components/Popup/Popup';
import { useAppDispatch } from '../Features/hooks';
import { CHANGE_USER_STATE } from '../Features/userSlice';
import { getAccessToken } from '../Utils/fetchUserDetails';
import { RandomUserCreator, userState } from '../Interfaces/interfaces';
import { faker } from '@faker-js/faker';

export default function Home() {
  const router = useRouter();
  const auth = getAuth();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(CHANGE_USER_STATE(user));
      }
      if (!user) {
        const randomUserName = 'Guest' + Math.random() * 1_000;
        const randomId = `${Math.floor(Math.random() * 1_000_000)}`;
        const fakeImageUrl = faker.image.avatar();

        dispatch(
          CHANGE_USER_STATE(
            RandomUserCreator(randomUserName, fakeImageUrl, randomId)
          )
        );
      }
    });
    unsub();
  }, []);

  return (
    <div className='bg-gradient-to-r from-purple-800 via-blue-700 to-sky-600'>
      <Head>
        <title>SozialHub</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Feed />

      {/* Modal */}
      <Popup />
    </div>
  );
}
