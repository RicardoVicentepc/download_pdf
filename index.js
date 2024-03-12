// A propriedade base64Blob contém a string base64 do Blob recebida do Apex Salesforce
var base64Blob = "..."; // Insira a string base64 aqui

// Decodifique a string base64 em um objeto Blob
var byteCharacters = atob(base64Blob);
var byteArrays = [];
for (var offset = 0; offset < byteCharacters.length; offset += 512) {
  var slice = byteCharacters.slice(offset, offset + 512);

  var byteNumbers = new Array(slice.length);
  for (var i = 0; i < slice.length; i++) {
    byteNumbers[i] = slice.charCodeAt(i);
  }

  var byteArray = new Uint8Array(byteNumbers);
  byteArrays.push(byteArray);
}
var blob = new Blob(byteArrays, { type: 'application/octet-stream' });

// Agora você pode usar o objeto Blob como desejar
console.log(blob);