function hello(language)


   if ( language ===1 ) {
    message = '外野手(36歳）172㎝/75kg　右投右打';

 }else if (language ===2) {
     message = '内野手(30歳)　180 cm/88kg 右投右打';
 }else if (language===3){
     message = '捕手(18歳) 178cm/98kg 右投右打';
 }else if (language ===4){
     message = '投手(20歳) 190cm/85kg 右投右打';
 } else {
     message = '想定されてない'
 }

 unction janken (myHand) {

  let = handArray = ['グー', 'チョキ', 'パー' ];

  console.log ('プレイヤーの手は,' +handArray[myHand]);

 let result = 0;

 let rand = Math.random () + 100;
 console.log (rand)

 let = randInt = Math.floor (rand);
 let computerHand = randInt % 3;
 console.log ('コンピュータの手は, ' + handArray[computerHand]    );

 let result = 0;
 
 if (myHand=== 0 ) {
  if (computerHand ===0) {
      console .log ('アイコです,' );

  }else if (computerHand ===1) {
    result = 2;

  }else if (computerHand === 2) {
    result = 1;

  }
}
console.log (resultText [result]) ;
 console.log (randInt);



}
