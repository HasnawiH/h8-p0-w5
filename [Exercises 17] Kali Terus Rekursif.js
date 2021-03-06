function kaliTerusRekursif(angka) {
    // you can only write your code here!

  var string = angka.toString()

  // basecase
  if (string.length === 1){
    return parseInt(string)
  }
  // eksekusi
  else{
    return kaliTerusRekursif(parseInt(string[0]) * kaliTerusRekursif(parseInt(string.slice(1, angka.length))))
  }
}
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6
