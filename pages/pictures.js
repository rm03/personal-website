import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Pictures.module.css'
import Gallery from "react-photo-gallery-next";
import { useCallback } from 'react';
import img0542 from '../public/static/IMG_0542.jpeg';
import img0546 from '../public/static/IMG_0546.jpeg';
import img3989 from '../public/static/IMG_3989.jpeg';
import img4313 from '../public/static/IMG_4313.jpeg';
import img4641 from '../public/static/IMG_4641.jpeg';
import img4840 from '../public/static/IMG_4840.jpeg';
import img4846 from '../public/static/IMG_4846.jpeg';
import img4856 from '../public/static/IMG_4856.jpeg';
import img4892 from '../public/static/IMG_4892.jpeg';
import img4914 from '../public/static/IMG_4914.jpeg';
import img4919 from '../public/static/IMG_4919.jpeg';
import img4930 from '../public/static/IMG_4930.jpeg';
import img4945 from '../public/static/IMG_4945.jpeg';
import img5150 from '../public/static/IMG_5150.jpeg';
import img5160 from '../public/static/IMG_5160.jpeg';
import img5393 from '../public/static/IMG_5393.jpeg';
import img5492 from '../public/static/IMG_5492.jpeg';
import img5721 from '../public/static/IMG_5721.jpeg';
import img5750 from '../public/static/IMG_5750.jpeg';
import img5776 from '../public/static/IMG_5776.jpeg';
import img6011 from '../public/static/IMG_6011.jpeg';
import img6013 from '../public/static/IMG_6013.jpeg';
import img6042 from '../public/static/IMG_6042.jpeg';
import img6072 from '../public/static/IMG_6072.jpeg';
import img6085 from '../public/static/IMG_6085.jpeg';
import img6096 from '../public/static/IMG_6096.jpeg';
import img6153 from '../public/static/IMG_6153.jpeg';
import img6157 from '../public/static/IMG_6157.jpeg';
import img6176 from '../public/static/IMG_6176.jpeg';
import img6190 from '../public/static/IMG_6190.jpeg';
import img6268 from '../public/static/IMG_6268.jpeg';
import img6273 from '../public/static/IMG_6273.jpeg';
import img6320 from '../public/static/IMG_6320.jpeg';
import img6430 from '../public/static/IMG_6430.jpeg';
import img6478 from '../public/static/IMG_6478.jpeg';
import img6534 from '../public/static/IMG_6534.jpeg';
import img6588 from '../public/static/IMG_6588.jpeg';
import img6606 from '../public/static/IMG_6606.jpeg';
import img6617 from '../public/static/IMG_6617.jpeg';
import img6685 from '../public/static/IMG_6685.jpeg';
import img6734 from '../public/static/IMG_6734.jpeg';
import img6779 from '../public/static/IMG_6779.jpeg';
import img6952 from '../public/static/IMG_6952.jpeg';
import img6796 from '../public/static/IMG_6796.jpeg';

const photos = [
  {
    src: '/static/IMG_3989.jpeg',
    width: 3,
    height: 4
  },
  {
    src: '/static/IMG_4313.jpeg',
    width: 3,
    height: 4
  },
  {
    src: '/static/IMG_4641.jpeg',
    width: 3,
    height: 4
  },

  {
    src: '/static/IMG_4840.jpeg',
    width: 4,
    height: 3
  },
  {
    src: '/static/IMG_4846.jpeg',
    width: 4,
    height: 3
  },

  {
    src: '/static/IMG_4856.jpeg',
    width: 4,
    height: 3
  },
  {
    src: '/static/IMG_4892.jpeg',
    width: 4,
    height: 3
  },
  {
    src: '/static/IMG_4914.jpeg',
    width: 3,
    height: 4
  },
  {
    src: '/static/IMG_4919.jpeg',
    width: 4,
    height: 3
  },
  {
    src: '/static/IMG_4930.jpeg',
    width: 4,
    height: 3
  },
  {
    src: '/static/IMG_4945.jpeg',
    width: 3,
    height: 4
  },
  {
    src: '/static/IMG_0542.jpeg',
    width: 3,
    height: 4
  },
  {
    src: '/static/IMG_0546.jpeg',
    width: 3,
    height: 4
  },
  {
    src: '/static/IMG_5150.jpeg',
    width: 3,
    height: 4
  },
  {
    src: '/static/IMG_5160.jpeg',
    width: 4,
    height: 3
  },
  {
    src: '/static/IMG_5393.jpeg',
    width: 3,
    height: 4
  },
  {
    src: '/static/IMG_5492.jpeg',
    width: 4,
    height: 3
  },
  {
    src: '/static/IMG_5721.jpeg',
    width: 3,
    height: 4
  },
  {
    src: '/static/IMG_5750.jpeg',
    width: 3,
    height: 4
  },
  {
    src: '/static/IMG_5776.jpeg',
    width: 4,
    height: 3
  },
  {
    src: '/static/IMG_6011.jpeg',
    width: 4,
    height: 3
  },
  {
    src: '/static/IMG_6013.jpeg',
    width: 3,
    height: 4
  },
  {
    src: '/static/IMG_6042.jpeg',
    width: 3,
    height: 4
  },
  {
    src: '/static/IMG_6072.jpeg',
    width: 3,
    height: 4
  },
  {
    src: '/static/IMG_6085.jpeg',
    width: 3,
    height: 4
  },
  {
    src: '/static/IMG_6096.jpeg',
    width: 3,
    height: 4
  },
  {
    src: '/static/IMG_6153.jpeg',
    width: 4,
    height: 3
  },
  {
    src: '/static/IMG_6157.jpeg',
    width: 3,
    height: 4
  },
  {
    src: '/static/IMG_6176.jpeg',
    width: 3,
    height: 4
  },
  {
    src: '/static/IMG_6190.jpeg',
    width: 3,
    height: 4
  },
  {
    src: '/static/IMG_6268.jpeg',
    width: 4,
    height: 3
  },
  {
    src: '/static/IMG_6273.jpeg',
    width: 4,
    height: 3
  },
  {
    src: '/static/IMG_6320.jpeg',
    width: 4,
    height: 3
  },
  {
    src: '/static/IMG_6430.jpeg',
    width: 4,
    height: 3
  },
  {
    src: '/static/IMG_6478.jpeg',
    width: 3,
    height: 4
  },
  {
    src: '/static/IMG_6534.jpeg',
    width: 4,
    height: 3
  },
  {
    src: '/static/IMG_6588.jpeg',
    width: 4,
    height: 3
  },
  {
    src: '/static/IMG_6606.jpeg',
    width: 3,
    height: 4
  },
  {
    src: '/static/IMG_6617.jpeg',
    width: 3,
    height: 4
  },
  {
    src: '/static/IMG_6685.jpeg',
    width: 3,
    height: 4
  },
  {
    src: '/static/IMG_6734.jpeg',
    width: 4,
    height: 3
  },
  {
    src: '/static/IMG_6779.jpeg',
    width: 4,
    height: 3
  },
  {
    src: '/static/IMG_6796.jpeg',
    width: 4,
    height: 3
  },
  {
    src: '/static/IMG_6952.jpeg',
    width: 3,
    height: 4
  }
].reverse()

// bruh moment, very bad code
const mp = new Map();
mp.set('img3989', img3989);
mp.set('img4313', img4313);
mp.set('img4641', img4641);
mp.set('img4840', img4840);
mp.set('img4846', img4846);
mp.set('img4856', img4856);
mp.set('img4892', img4892);
mp.set('img4914', img4914);
mp.set('img4919', img4919);
mp.set('img4930', img4930);
mp.set('img4945', img4945);
mp.set('img0542', img0542);
mp.set('img0546', img0546);
mp.set('img5150', img5150);
mp.set('img5160', img5160);
mp.set('img5393', img5393);
mp.set('img5492', img5492);

mp.set('img5721', img5721);
mp.set('img5750', img5750);
mp.set('img5776', img5776);
mp.set('img6011', img6011);
mp.set('img6013', img6013);
mp.set('img6042', img6042);
mp.set('img6072', img6072);
mp.set('img6085', img6085);
mp.set('img6096', img6096);
mp.set('img6153', img6153);
mp.set('img6157', img6157);
mp.set('img6176', img6176);
mp.set('img6190', img6190);
mp.set('img6268', img6268);
mp.set('img6273', img6273);
mp.set('img6320', img6320);
mp.set('img6430', img6430);
mp.set('img6478', img6478);
mp.set('img6534', img6534);
mp.set('img6588', img6588);
mp.set('img6606', img6606);
mp.set('img6617', img6617);
mp.set('img6685', img6685);
mp.set('img6734', img6734);
mp.set('img6779', img6779);
mp.set('img6952', img6952);
mp.set('img6796', img6796);


export default function Pictures() {
  const imageRenderer = useCallback(
    ({ index, key, photo }) => (
      <div style={{ margin: '2px', height: photo.height, width: photo.width, overflow: 'hidden', position: 'relative' }}>
        <Image
          key={key}
          index={index}
          src={mp.get(photo.src.substring(photo.src.lastIndexOf('/') + 1).replace('_', '').substring(0, 7).toLowerCase())}
          width={photo.width}
          height={photo.height}
          placeholder='blur'
        />
      </div>

    )
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Pictures – Rohan Moniz</title>
        <meta name="description" content="My personal website" />
        <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Pictures</h1>
        <Gallery photos={photos} renderImage={imageRenderer} />
      </main>
    </div>
  )
}