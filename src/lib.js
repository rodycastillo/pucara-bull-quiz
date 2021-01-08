const reordenar = (array, index) => {
  const primero = array.slice(0, index);
  const ultimo = array.slice(index, array.length);

  return ultimo.concat(primero);
};

export const calcular = (galones, costos) => {
  for (let i = 0; i < galones.length; i++) {
    let galonesActuales = 0;
    const nueroArray = reordenar(galones, i);
    const nueroArray2 = reordenar(costos, i);

    for (let index = 0; index < nueroArray.length; index++) {
      const numero = nueroArray[index];
      const galonesGastados =
        nueroArray2[index - 1 < 0 ? nueroArray2.length - 1 : index - 1];

      if (galonesGastados > galonesActuales && index !== 0) {
        break;
      }

      if (index === 0) {
        galonesActuales = galonesActuales + numero;
      } else {
        galonesActuales = galonesActuales + numero - galonesGastados;
      }

      if (index === nueroArray.length - 1) {
        galonesActuales = galonesActuales - nueroArray2[nueroArray2.length - 1];

        if (galonesActuales >= 0) {
          return i;
        }
      }
    }
  }

  return -1;
};
