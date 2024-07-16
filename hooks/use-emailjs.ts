// hooks/useEmailJS.ts
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';

const useEmailJS = () => {
  useEffect(() => {
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_USER_ID!,
      blockHeadless: true,
      limitRate: {
        id: 'app',
        throttle: 10000,
      },
    });
    console.log("emailJS initialized");
  }, []);
};

export default useEmailJS;
