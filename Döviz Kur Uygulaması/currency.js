class Currency{
    constructor(){
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_frXZnxG3RF8aJI8O2M16rhhkiosz88WqXfk9a1eT&base_currency=";
    }

    async exchange(amount, firstCurrency, secoundCurrency){
        const response = await fetch(`${this.url}${firstCurrency}`);
        const result = await response.json();
        const exchangeResult = amount * result.data[secoundCurrency];

        return exchangeResult;
    }
}