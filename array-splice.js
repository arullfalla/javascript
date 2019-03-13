function panggilSplice(){
  var kota = ['jakarta','medan','padang','malang']
  console.log(kota)
  // kota.splice(2,0'palembang')
  kota.splice(2,1)
  return kota
}

console.log(panggilSplice())
