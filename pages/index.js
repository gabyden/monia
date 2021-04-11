import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CoinGecko from 'coingecko-api';

const coinGeckoClient = new CoinGecko()
export default function Home(props) {
  const { data } = props.result;
  return (
    <div className={styles.container}>
      <Head>
        <title>Monia - A crypto tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </div>
  )
}

export async function getServerSideProps(context) {  
  const params = {    
    order: CoinGecko.ORDER.MARKET_CAP_DESC  };  
  const result = await coinGeckoClient.coins.markets({params});
}