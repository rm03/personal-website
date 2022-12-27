import Head from 'next/head'
import styles from '../styles/Pictures.module.css'
import Gallery from "react-photo-gallery-next";

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

export default function Pictures() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pictures – Rohan Moniz</title>
        <meta name="description" content="My personal website" />
        <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <h1>Pictures</h1>
      <Gallery photos={photos} />
      </main>
    </div>
  )
}