let john = { nombre: "John", apellido: "Smith", id: 1 };
let pete = { nombre: "Pete", apellido: "Hunt", id: 2 };
let mary = { nombre: "Mary", apellido: "Key", id: 3 };

let usuarios = [john, pete, mary];
let usuariosMapeados = usuarios.map((usuario) => ({
  id: usuario.id,
  nombreCompleto: `${usuario.nombre} ${usuario.apellido}`,
}));
console.log(usuariosMapeados[0].id);
console.log(usuariosMapeados[0].nombreCompleto);
