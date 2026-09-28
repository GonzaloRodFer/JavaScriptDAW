alert(null || 2 || undefined); //Devlovera 2 ya que es el único valor true;
alert(alert(1) || 2 || alert(3)); //Ejecuta el alert 1 que es undefined y luego devuelve 2
alert(1 && null && 2); // Devolvera null ya que es el único valor false
alert(alert(1) && alert(2)); //Devolvera undefined
alert(null || (2 && 3) || 4); // Devolvera 3 porque el AND es preferente al OR y el 3 es mayor que 2
