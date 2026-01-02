import Image from 'next/image';
import React from 'react'

const PhotoGallery = ({ src, name }) => {
    if (typeof src !== 'object') return;

    return (
        <section className='py-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:px-16'>
            {
                src.map((item, index) => (
                    <div key={index} className=''>
                        <Image src={item} width={500} height={500} alt='photo-gallery' className='w-full mx-auto  rounded-3xl' />
                    </div>
                ))
            }
        </section>
    )
}

export default PhotoGallery