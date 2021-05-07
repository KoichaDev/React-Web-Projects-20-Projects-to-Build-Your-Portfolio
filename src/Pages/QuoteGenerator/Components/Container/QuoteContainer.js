import { useState, useEffect } from 'react';
import { shuffleArrayIndex } from '../../../../utils/array.js';
import QuoteText from '../Quote/QuoteText';
import QuoteAuthor from '../Quote/QuoteAuthor';
import QuteButton from '../Button/QuoteButton';
import SpinnerLoader from '../Animation/SpinnerLoader';

import classes from './QuoteContainer.module.scss';

const { main, 'main-container': mainContainer } = classes;

function QuoteContainer() {
  let loadSpinner;
  const [isActive, setIsActive] = useState(true);
  const [quoteData, setQuoteData] = useState([]);
  const [textQuote, setTextQuote] = useState('');
  const [authorQuote, setAuthorQuote] = useState('');

  // Perform SideEffect by getting the API
  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then((res) => res.json())
      .then((quote) => {
        const { text, author } = shuffleArrayIndex(quote);

        if (isActive) {
          setQuoteData((prevQuotes) => {
            return {
              ...prevQuotes,
              quote,
            };
          });

          setTextQuote(text);
          setAuthorQuote(author);
        }
      })
      .catch((err) => console.log(err));

    // Cancenling/cleaning up the fetch when it's finished to fetch
    return setIsActive(false);
  }, []);

  function generateNewQuoteHandler() {
    const { text, author } = shuffleArrayIndex(quoteData?.quote);
    setTextQuote(text);
    setAuthorQuote(author);
  }

  if (isActive) {
    loadSpinner = <SpinnerLoader />;
  }
  return (
    <main className={main}>
      <section className={mainContainer}>
        <QuoteText quote={textQuote} />
        <QuoteAuthor author={authorQuote} />
        <QuteButton clickHandler={generateNewQuoteHandler} />
        {loadSpinner}
      </section>
    </main>
  );
}

export default QuoteContainer;
