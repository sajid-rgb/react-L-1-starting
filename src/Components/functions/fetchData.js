const fetchData = (setCountries, setIsLoading)=>{
    fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                setCountries(data);
                setIsLoading(false)
            })
}

export default fetchData;