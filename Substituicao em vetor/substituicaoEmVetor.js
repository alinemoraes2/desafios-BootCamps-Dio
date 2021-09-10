function vetorI() {
    for (let i = 0; i < 10; i++) {
      let X = parseInt(gets()); 
      
      if (X <= 0 ) {
        X = 1;
      }
      
      console.log(`X[${i}] = ${X}`); 
    }
  }
  vetorI();