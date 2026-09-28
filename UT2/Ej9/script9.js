if (-1 || 0) alert("primero"); // Si que se ejecuta ya que -1 || 0 es true
if (-1 && 0) alert("segundo"); // No lo ejecuta ya que -1 && 0 es falso
if (null || (-1 && 1)) alert("tercero"); // Si se ejecuta ya que && prevalece sobre ||
