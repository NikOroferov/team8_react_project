import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineCursorClick, HiOutlineLightBulb } from "react-icons/hi";
import { authSelectors } from "../../redux/auth/auth-selectors"
import * as authOperations from "../../redux/auth/auth-operations"
import { BalanceContainer, BalanceTitle, BalanceAmount, SubmitBtn, BalanceWrap, BalanceModal, BalanceText, BalanceNote } from "./Balance.styled";

export default function Balance() {
    const [balance, setBalance] = useState("");
    const currentBalance = useSelector(authSelectors.getCurrentBalance);
    const dispatch = useDispatch();

    const [balanceNote, setBalanceNote] = useState(true);
    const removeBalanceNote = () => { setBalanceNote(false) };

    const handleChange = (evt) => {
        const { value } = evt.currentTarget;
            setBalance(Number(value));
        };
        
    useEffect(() => {
            dispatch(authOperations.getBalance());
          }, [dispatch]);   
    
    const handleSubmit = (evt) => {
            evt.preventDefault();
            dispatch(authOperations.updBalance({balance}))
         };
  
    return (
        <BalanceContainer 
        onSubmit={handleSubmit}
        >
         <BalanceTitle>Баланс:</BalanceTitle>
            {currentBalance === 0 && <BalanceWrap>
                                        <BalanceAmount 
                                            required
                                            name="balance"
                                            type="text"
                                            onChange={handleChange}
                                            autoComplete="off"
                                            placeholder={`${currentBalance.toFixed(2)} UAH`}
                                            />
                                        <SubmitBtn type="submit">подтвердить</SubmitBtn>
                                        {balanceNote && <BalanceModal onClick={removeBalanceNote}>
                                        <BalanceText>Привет! Для начала работы внеси текущий баланс своего счета!</BalanceText>
                                        <BalanceNote>Ты не можешь тратить деньги пока их у тебя нет 
                                            <HiOutlineLightBulb style={{ fontSize: 16, marginLeft: 10 }}/>
                                        </BalanceNote>
                                        <HiOutlineCursorClick style={{ fontSize: 20, marginLeft: "80%" }}/>
                                        </BalanceModal>}
                                    </BalanceWrap> }
            
                {currentBalance > 0 && <BalanceWrap>
                                            <BalanceAmount 
                                                name="balance"
                                                type="text"
                                                value={`${parseFloat(currentBalance).toFixed(2)} UAH`}
                                                disabled/>
                                            <SubmitBtn type="submit" 
                                                        onSubmit={handleSubmit} 
                                                        disabled>подтвердить</SubmitBtn>
                                        </BalanceWrap>}
                {currentBalance < 0 && <BalanceWrap>
                                            <BalanceAmount 
                                                name="balance"
                                                type="text"
                                                value={`${parseFloat(currentBalance).toFixed(2)} UAH`}
                                                disabled/>
                                            <SubmitBtn type="submit" 
                                                        onSubmit={handleSubmit} 
                                                        disabled>подтвердить</SubmitBtn>
                                            {balanceNote && <BalanceModal onClick={removeBalanceNote}>
                                            <BalanceText>Привет! Обрати внимание на то, что твои расходы привышают доходы!</BalanceText>
                                            <BalanceNote>Пора усердно поработать! 
                                                <HiOutlineLightBulb style={{ fontSize: 16, marginLeft: 10 }}/>
                                            </BalanceNote>
                                            <HiOutlineCursorClick style={{ fontSize: 20, marginLeft: "80%" }}/>
                                            </BalanceModal>}
                                        </BalanceWrap> }
         </BalanceContainer>
  )
}