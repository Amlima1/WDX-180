 /* SETUP */
 const $address = document.querySelector(".address span");
 const $balance = document.querySelector(".balance span");
 const $btcPrice = document.querySelector(".btcprice span");
 const $usd = document.querySelector(".usd span");
 const $button = document.getElementById("getBalance");
 let balance = 0;
 //console.log( $address.textContent );

 /* USING PROMISES */
 
 /*
 $button.addEventListener("click", function(event){

   fetch(`https://blockchain.info/balance?active=${$address.textContent}&cors=true `)
   .then((result)=> result.json())
   .then((data)=>{
     
     console.log( data );
     // 1 BTC === 100000000 Satoshi
     balance = data[ $address.textContent ].final_balance / 100000000; 
     $balance.textContent = balance.toFixed(2);
     return fetch("https://blockchain.info/ticker");
     
   })
   .then((result)=> result.json())
   .then((result)=> {
     
       // 1) Get the USD value for BTC (last) and display the conversion inside the "BTC/USD" section
       // 2) along with the total amount of USD dollars in the "USD" section of the UI
       // 3) Make sure to handle any errors

        // 1) Get the USD value for BTC (last) and display the conversion inside the "BTC/USD" section
        //let's suppose that 1 BTC = $97861.94
        $btcPrice.textContent = `1 BTC = $97861.94`;
        return fetch("https://blockchain.info/ticker");
        
     })
    .then((result)=> {
        // 2) along with the total amount of USD dollars in the "USD" section of the UI
        balance = balance * 97861.94;
        $usd.textContent = balance.toFixed(2);
    })
    .catch((err)=> {
        // const wallet = document.querySelector('.wallet');
        // const errP = document.createElement('p');
        // errP.classList.add('error');
        // const errSpan = document.createElement('span');
        // errP.appendChild(errSpan);
        // wallet.appendChild(errP);
        // const $error = document.querySelector('.error span');
        // $error.textContent = `Something went wrong. Error: ${err}`;
        console.log(err);
    })
   });
   */
   
 /* 4) USING ASYNC/AWAIT: Refactor the callback function above into an async/await syntax: */
 $button.addEventListener("click", async function(event){
    let result;
    try {
        result = await fetch(`https://blockchain.info/balance?active=${$address.textContent}&cors=true `);
        
        result = await result.json();
        const data = await result;
        console.log(data);

        // 1 BTC === 100000000 Satoshi
        balance = data[ $address.textContent ].final_balance / 100000000; 
        $balance.textContent = balance.toFixed(2);        

        $btcPrice.textContent = `1 BTC = $97861.94`;

        balance = balance * 97861.94;
        $usd.textContent = balance.toFixed(2);

    } catch(err){
        console.log(err);
    }
 });  