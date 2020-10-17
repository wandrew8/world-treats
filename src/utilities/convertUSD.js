const convertUSD = (num) => {
    const dollars = num / 100;
    return dollars.toLocaleString("en-US", {style:"currency", currency:"USD"});
}

export default  convertUSD;