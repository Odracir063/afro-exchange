//usamos la libreria numerals.js para formatear
// los distintos datos numericos de la api CoinCap 

import numeral from 'numeral';

const dollarFilter = function(value){
    if (!value){
        return '$ 0'
    }

    return numeral(value).format('($ 0.00a)');
}

const percentFilter = (value) => {
    if(!value){
        return '0%'
    }

    return `${Number(value).toFixed(2)}%`
}

export { dollarFilter, percentFilter};