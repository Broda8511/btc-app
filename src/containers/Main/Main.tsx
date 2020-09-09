import React from 'react';

import Textarea from '../../components/Textarea';
import ErrorList from '../../components/ErrorList';

import useEnhancedState from '../../hooks/useEnhancedState';

import * as Api from '../../shared/api';

import Selector from './Selector';

import * as Types from './Main.types';
import * as Styles from './Main.styles';

const Main: React.FunctionComponent = () => {
  const [state, setState] = useEnhancedState<Types.State>({
    inputValue: '',
    outputValue: '',
    selectors: [],
    errors: [],
  });

  const onChangeInputValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState({ inputValue: e.target.value });
  };

  const onAddNewSelectors = React.useCallback(
    async (newSelectors: Selector[]) => {
      const newSelectorsWithAPIData = await Promise.all(
        newSelectors.map(async (selector) => {
          try {
            if (selector.argument) {
              const coinResponse = await Api.getCoinBySymbol(selector.argument);

              const coin = coinResponse.data.currencies[0];

              if (coin) {
                const exchangeResponse = await Api.getExchangeByCoinId(coin.id);

                const exchange = exchangeResponse.data[0];

                selector.setValue({ name: coin.name, exchange: exchange.open || null });
              }

              if (!coin) {
                selector.setValue({ error: `Coin doesn't exist for selector ${selector.value}` });
              }

              return selector;
            }

            selector.setValue({ error: `No argument for selector ${selector.value}` });

            return selector;
          } catch (error) {
            selector.setValue({
              error: `Unable to get data for selector ${selector.value} from Coinpaprika's API. Try again later.`,
            });

            return selector;
          }
        })
      );

      return setState({ selectors: [...state.selectors, ...newSelectorsWithAPIData] });
    },

    [state.selectors, setState]
  );

  const onUpdateSelectors = React.useCallback(() => {
    // Regex for getting selector from input text.
    const regex1 = /\{{([^{}]*)\}}/g;

    // Regex for removing parenthesis and white spaces from selectors.
    const regex2 = /(?<=\s)(.*?)(?=\s)/g;

    // Get all selectors from input text.
    const inputSelectors = state.inputValue.match(regex1);

    if (inputSelectors && inputSelectors.length > 0) {
      const newSelectors: Selector[] = inputSelectors
        .map((inputSelectorText) => {
          // Create selector instance.
          const selector = new Selector();

          // Remove parenthesis and white spaces from selector text.
          const selectorValueArr = inputSelectorText.match(regex2);

          if (selectorValueArr && selectorValueArr[0]) {
            const selectorValue = selectorValueArr[0];
            const splittedSelectorValue = selectorValue.split('/');

            const method = splittedSelectorValue[0];
            const argument = splittedSelectorValue[1];

            if (method && argument) {
              selector.setValue({
                method,
                argument,
                value: inputSelectorText,
              });

              return selector;
            }

            selector.setValue({ error: `Cannot read method and argument of selector ${inputSelectorText}.` });

            return selector;
          }

          selector.setValue({ error: `Cannot decode selector ${inputSelectorText}.` });

          return selector;
        })
        // Remove selectors that has been already added to state to avoid unnecessary requests.
        .filter((s1) => state.selectors.find((s2) => s2.value === s1?.value) === undefined);

      onAddNewSelectors(newSelectors);
    }

    return;
  }, [state.inputValue, state.selectors, onAddNewSelectors]);

  const onUpdateErrors = React.useCallback(() => {
    state.selectors.forEach((selector) => {
      if (selector.value) {
        const existInInputText = state.inputValue.includes(selector.value);
        const existInSate = state.errors.find((error) => error.id === selector.value) !== undefined;

        if (existInInputText && selector.error && !existInSate) {
          setState({ errors: [...state.errors, { id: selector.value, message: selector.error }] });
        }

        // Remove it if selector has been removed from input but exists in error array.
        if (!existInInputText && existInSate) {
          setState({ errors: state.errors.filter((error) => error.id !== selector.value) });
        }
      }
    });
  }, [state.errors, state.inputValue, state.selectors, setState]);

  const onUpdateOutput = React.useCallback(() => {
    let outputValue = state.inputValue;

    state.selectors.forEach((selector) => {
      if (selector.value && selector.method) {
        const regex = new RegExp(selector.value, 'g');
        const isName = selector.method.toLowerCase() === 'name';
        const isExchange = selector.method.toLowerCase() === 'rate';

        if (isName) {
          outputValue = outputValue.replace(regex, selector.name || '');
        }

        if (isExchange) {
          outputValue = outputValue.replace(regex, `$${selector.exchange?.toFixed(2)}` || '');
        }
      }
    });

    if (outputValue !== state.outputValue) {
      setState({ outputValue });
    }
  }, [state.inputValue, state.selectors, state.outputValue, setState]);

  React.useEffect(() => {
    const timeoutId = setTimeout(onUpdateSelectors, 1000);

    return () => clearTimeout(timeoutId);
  }, [state.inputValue]);

  React.useEffect(() => {
    onUpdateOutput();
    onUpdateErrors();
  }, [state.inputValue, state.selectors, onUpdateSelectors, onUpdateErrors, onUpdateOutput]);

  return (
    <Styles.Section>
      <Styles.Heading>Cryptocurrency Exercise</Styles.Heading>
      <Styles.SubHeading>by Adam Megger</Styles.SubHeading>

      <Styles.FlexContainer>
        <Textarea
          id="input"
          label="Input"
          value={state.inputValue}
          onChange={onChangeInputValue}
          placeholder="Start typing..."
        />

        <Textarea
          readOnly
          id="input"
          label="Output"
          value={state.outputValue}
          onChange={(e) => e.preventDefault()}
          placeholder="...so you will see your output here."
        />
      </Styles.FlexContainer>

      {state.inputValue.length > 0 && <ErrorList errors={state.errors.map((error) => error.message)} />}
    </Styles.Section>
  );
};

export default Main;
