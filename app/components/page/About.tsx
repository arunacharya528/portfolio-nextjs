"use client";

import { useState, useEffect } from 'react';
import Title from "../Title";
import { motion } from "framer-motion";
import { getIcon } from "@/app/const/Icons";
import Retriever from '@/app/lib/Retriever';
import { HiMapPin } from 'react-icons/hi2';
import Link from 'next/link';

export default function About() {
  const [data, setData] = useState<{
    name: Awaited<typeof Retriever.name>;
    title: Awaited<typeof Retriever.title>;
    about: Awaited<typeof Retriever.about>;
    location: Awaited<typeof Retriever.location>;
    links: Awaited<typeof Retriever.links>;
  }>({
    name: '',
    title: '',
    about: '',
    location: '',
    links: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const name = await Retriever.name;
      const title = await Retriever.title;
      const about = await Retriever.about;
      const location = await Retriever.location;
      const links = await Retriever.links;

      setData({ name, title, about, location, links });
    };

    fetchData();
  }, []);

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: [20, -5, 0],
      }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      className='min-h-screen flex flex-col justify-center items-center'
    >
      {
        data.name && data.title && data.location &&
        <>
          <Title className='font-bold'>{`Hey there, I'm ${data.name}`}</Title>

          <p className='text-balance w-1/2 text-center mx-auto'>
            {data.title}
          </p>

          <div className="mt-10">
            <HiMapPin className="w-6 h-6 inline-block mr-2" />
            <span className="leading-4">{data.location}</span>
          </div>

          <div className='flex space-x-10 mt-8'>
            {data.links.map((link, index) =>
              <Link key={index} target='_blank' href={link.href}>{getIcon(link.title,"size-8")}</Link>)
            }
          </div>
        </>
      }
    </motion.section>
  );
}
