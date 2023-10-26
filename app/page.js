"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Header from '../components/header.jsx'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseApp } from './firebase/firebaseConfig'; 
import { useRouter } from 'next/navigation';
import { checkUserSession } from '../components/utility/index';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    checkUserSession((user) => {
      if (user) {       
        router.push('/dashboard');
      } else {
        router.push('/login');
      }
    });
  }, []);

  return (
<>


      </>
              
      );      
}
