function songPlaying(song='Nothing', singer){
    if (song != 'Nothing'){
        console.log(`${song} by ${singer} is playing.`);
    } else {
        console.log(`Nothing is playing.`);
    }
}
songPlaying();

function exponentiation(base, exponent){
   const operation = base**exponent;
   return operation;
}
console.log(exponentiation());
