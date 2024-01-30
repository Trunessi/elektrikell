function printToConsole(prevState, queryData) {
    const dateFrom = queryData.get('dateFrom');
    const dateUntil = queryData.get('dateUntil');
    
    console.log(dateFrom + " - " + dateUntil);
  }

  export default printToConsole;