import CoinGecko from 'coingecko-api';
import Head from 'next/head';

import styles from '../styles/main.module.css';
import { TableView } from './components/TableView';

const coinGeckoClient = new CoinGecko();
export default function Main(properties) {
  const { data } = properties.result;

  return (
    <div className={styles.container}>
      <Head>
        <title>Monia - A crypto tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-4xl text-gray-200 p-12 font-sans">
        Explore cryptocurrencies
      </h1>
      <TableView allData={data} />
    </div>
  );
}

export async function getServerSideProps() {
  const parameters = {
    order: CoinGecko.ORDER.PRICE_ASC
  };
  const result = await coinGeckoClient.coins.markets({ params: parameters });
  return {
    props: {
      result
    }
  };
}
