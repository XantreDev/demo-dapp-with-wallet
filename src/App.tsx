import './App.scss';
import './trackers';
import {
    RequiredFeatures,
    THEME,
    TonConnectUIProvider,
} from '@tonconnect/ui-react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { TxForm } from './components/TxForm/TxForm';
import { ConnectionButton } from './components/ConnectionButton/ConnectionButton';
import { SignDataForm } from './components/SignDataForm/SignDataForm';
import { SubscriptionForm } from './components/SubscriptionForm/SubscriptionForm';

const walletsRequiredFeatures: RequiredFeatures = {
    sendTransaction: {
        extraCurrencyRequired: true,
        minMessages: 10
    },
    subscription: {
      versions: { v2: true },
    },
    // signData: {
    //     types: ['text', 'binary', 'cell']
    // },
};

const urlObj = new URL(window.location.toString());
urlObj.pathname = '/tonconnect-manifest.json'
const url = urlObj.toString()

function App() {
  return (
    <TonConnectUIProvider
      manifestUrl={url}
      uiPreferences={{theme: THEME.DARK}}
      // walletsRequiredFeatures={walletsRequiredFeatures}
      // walletsPreferredFeatures={walletsRequiredFeatures}
      actionsConfiguration={{
        twaReturnUrl: 'https://t.me/tc_twa_demo_bot/start'
      }}
    >
      <div className="app">
        <Header/>
        <TxForm/>
        {/*<TonProofDemo />*/}
        <SignDataForm/>
        <SubscriptionForm/>
        <ConnectionButton/>
        <Footer/>
      </div>
    </TonConnectUIProvider>
  )
}

export default App;
