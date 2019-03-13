function panggilbilanganKelipatan () {
  var kelipatanlima = []
  for (var i = 1; i < 50; i++) {
    if(i%5 === 0) {
      kelipatanlima.push(i)
    }
  }
  return kelipatanlima
}

console.log(panggilbilanganKelipatan());
