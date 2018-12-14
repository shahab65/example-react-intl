import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {IntlProvider, FormattedMessage} from "react-intl";
import {localSet} from './actions/localeActions';
import messages_en from "./translations/en.json";
import messages_fa from "./translations/fa.json";

const messages = {
  'fa': messages_fa,
  'en': messages_en
};
const App = ({lang, setLocale}) => {

  return (
    <IntlProvider locale={lang} messages={messages[lang]} key={lang}>

      <div className="App">
        <h1 className="App-title">
          <FormattedMessage
            id="app.hello.message"
            defaultMessage="Hello"
          />
        </h1>
        <button onClick={() => setLocale('en')}>en</button>
        <button onClick={() => setLocale('fa')}>fa</button>
      </div>
    </IntlProvider>
  );
}

const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({
    setLocale: localSet,
  }, dispatch);

}

const mapStateToProps = (state) => {
  return {
    lang: state.locale.lang,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
