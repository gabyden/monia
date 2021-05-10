import CoinGecko from 'coingecko-api';
import Head from 'next/head';

import { TableView } from '../components/TableView';
import styles from '../styles/main.module.css';

const coinGeckoClient = new CoinGecko();
export default function Main(properties) {
  const { data } = properties.result;
  const lastUpdated = new Date(data[0].last_updated);

  return (
    <div className={styles.container}>
      <Head>
        <title>Monia - A crypto tracker</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📈</text></svg>"
        />
      </Head>
      <h1 className="text-4xl text-gray-200 p-12 font-sans">
        Top 100 crypto{' '}
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </h1>
      <p className="textMain">{`Last updated: ${lastUpdated.toLocaleString()}`}</p>
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
