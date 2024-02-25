export const changeAmount = async (chk, CartAmount, setAmount) => {
    if (chk === 'plus' && CartAmount <= 9) {
       setAmount(CartAmount + 1);
    } else if (chk === 'minus' && CartAmount > 1) {
        setAmount(CartAmount - 1);
    }
};