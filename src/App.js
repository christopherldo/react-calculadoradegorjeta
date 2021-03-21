import { useState } from 'react';
import styled from 'styled-components';

const Site = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
`;

const CalcArea = styled.div`
  display: flex;
  flex-flow: column;
  padding: 20px;
  width: 400px;
  height: 400px;
  border-radius: 10px;
  background-color: #fff;
  text-align: center;
`;

const CalcTitle = styled.h1`
  font-size: 25px;
  font-weight: normal;
`;

const CalcInputArea = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

const CalcLabel = styled.label`
  width: 100%;
  align-self: flex-start;
  padding: 10px;
  text-align: start;
  :last-child{
    margin-top: 10px;
  };
`;

const CalcInput = styled.input`
  display: block;
  padding: 10px;
  width: 90%;
  margin-top: 5px;
`;

const HorizontalRow = styled.div`
  height: 1px;
  width: 100%;
  background-color: #333;
`;

const CalcResultArea = styled.div`
  flex: 2;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const CalcResult = styled.div`
  padding: 2px;
  :last-child{
    font-size: 20px;
    font-weight: bold;
  }
`;

const App = () => {
  const [amount, setAmount] = useState(0);
  const [tipPercent, setTipPercent] = useState(10);

  return (
    <Site>
      <CalcArea>
        <CalcTitle>Calculadora de Gorjeta</CalcTitle>
        <CalcInputArea>
          <CalcLabel>
            Valor da conta:
            <CalcInput autoFocus type='number' value={amount} onChange={e => setAmount(e.target.value)} />
          </CalcLabel>
          <CalcLabel>
            Porcentagem de gorjeta:
            <CalcInput type='number' value={tipPercent} onChange={e => setTipPercent(e.target.value)} />
          </CalcLabel>
        </CalcInputArea>

        <HorizontalRow />

        <CalcResultArea>
          {(amount > 0 && tipPercent > 0) ?
            <>
              <CalcResult>Sub-total: R${parseFloat(amount).toFixed(2)}</CalcResult>
              <CalcResult>Gorjeta ({tipPercent}%): R${parseFloat(amount * tipPercent / 100).toFixed(2)}</CalcResult>
              <CalcResult>Total: R${(parseFloat(amount) + parseFloat(amount * tipPercent / 100)).toFixed(2)}</CalcResult>
            </>
            :
            <CalcResult>Total: R$0.00</CalcResult>
          }
        </CalcResultArea>
      </CalcArea>
    </Site>
  );
};

export default App;