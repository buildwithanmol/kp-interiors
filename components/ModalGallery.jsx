import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import PhotoAlbum from "react-photo-album";
import PhotoGallery from './PhotoGallery'

const ModalGallery = ({ title }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const Residential = [
    {
      src: "https://images.unsplash.com/photo-1455593984172-9f753a2e1ebd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzaWRlbmNlfGVufDB8fDB8fHww",
      width: 2,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1455593984172-9f753a2e1ebd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzaWRlbmNlfGVufDB8fDB8fHww",
      width: 1,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1455593984172-9f753a2e1ebd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzaWRlbmNlfGVufDB8fDB8fHww",
      width: 2,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1455593984172-9f753a2e1ebd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzaWRlbmNlfGVufDB8fDB8fHww",
      width: 1,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1455593984172-9f753a2e1ebd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzaWRlbmNlfGVufDB8fDB8fHww",
      width: 2,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1455593984172-9f753a2e1ebd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzaWRlbmNlfGVufDB8fDB8fHww",
      width: 1,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1455593984172-9f753a2e1ebd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzaWRlbmNlfGVufDB8fDB8fHww",
      width: 2,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1455593984172-9f753a2e1ebd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzaWRlbmNlfGVufDB8fDB8fHww",
      width: 1,
      height: 1,
    },
  ];
  const Commercial = [
    {
      src: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbWVyY2lhbCUyMHJvb218ZW58MHx8MHx8fDA%3D",
      width: 2,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbWVyY2lhbCUyMHJvb218ZW58MHx8MHx8fDA%3D",
      width: 1,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbWVyY2lhbCUyMHJvb218ZW58MHx8MHx8fDA%3D",
      width: 2,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbWVyY2lhbCUyMHJvb218ZW58MHx8MHx8fDA%3D",
      width: 1,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbWVyY2lhbCUyMHJvb218ZW58MHx8MHx8fDA%3D",
      width: 2,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbWVyY2lhbCUyMHJvb218ZW58MHx8MHx8fDA%3D",
      width: 1,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbWVyY2lhbCUyMHJvb218ZW58MHx8MHx8fDA%3D",
      width: 2,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbWVyY2lhbCUyMHJvb218ZW58MHx8MHx8fDA%3D",
      width: 1,
      height: 1,
    },
  ];
  const Workshops = [
    {
      src: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbWVyY2lhbCUyMHJvb218ZW58MHx8MHx8fDA%3D",
      width: 2,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbWVyY2lhbCUyMHJvb218ZW58MHx8MHx8fDA%3D",
      width: 1,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbWVyY2lhbCUyMHJvb218ZW58MHx8MHx8fDA%3D",
      width: 2,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbWVyY2lhbCUyMHJvb218ZW58MHx8MHx8fDA%3D",
      width: 1,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbWVyY2lhbCUyMHJvb218ZW58MHx8MHx8fDA%3D",
      width: 2,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbWVyY2lhbCUyMHJvb218ZW58MHx8MHx8fDA%3D",
      width: 1,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbWVyY2lhbCUyMHJvb218ZW58MHx8MHx8fDA%3D",
      width: 2,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbWVyY2lhbCUyMHJvb218ZW58MHx8MHx8fDA%3D",
      width: 1,
      height: 1,
    },
  ];

  const Retailers = [
    {
      src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmV0YWlsZXJzJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
      width: 2,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmV0YWlsZXJzJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
      width: 1,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmV0YWlsZXJzJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
      width: 2,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmV0YWlsZXJzJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
      width: 1,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmV0YWlsZXJzJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
      width: 2,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmV0YWlsZXJzJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
      width: 1,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmV0YWlsZXJzJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
      width: 2,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmV0YWlsZXJzJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
      width: 1,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmV0YWlsZXJzJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
      width: 2,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmV0YWlsZXJzJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
      width: 1,
      height: 1,
    },
  ];

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);
  return (
    <>
      <button
        type="button"
        className="p-2 bg-accent-secondary px-3 rounded-xl text-white transition-all hover:shadow-md"
        onClick={handleOpenModal}
      >
        {title}
      </button>
      <section
        className={`fixed top-0 left-0 bottom-0 p-2 right-0 duration-500 transition-[scale, opacity] bg-white z-[1000]  ${isModalOpen ? " scale-100 opacity-100" : " scale-0 opacity-0 "
          } overflow-y-scroll `}
      >
        <RiCloseCircleLine
          className="fixed top-8 right-8 text-4xl cursor-pointer text-slate-400"
          onClick={handleCloseModal}
        />

        {title === "Residential" ? (
          <PhotoGallery src={Residential} />
        ) : title === "Commercial" ? (
          <PhotoGallery src={Commercial} />
        ) : title === "Workshop" ? (
          <PhotoGallery src={Workshops} />
        ) : title === "Retail" ? (
          <PhotoGallery src={Retailers} />
        ) : null}
      </section>
    </>
  );
};

export default ModalGallery;
