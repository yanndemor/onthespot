const gerard = (step, endTime) => {
  // =========== Recuperation du prochain creneau dispo ===========
  // Prochain creneau
  const nextTime = new Date();
  // Arrondit de la date au step superieur pour connaitre le premier creneau a afficher
  const nextQuarter = Math.ceil(nextTime.getMinutes() / step) * step;
  // Definition du prochain creneau
  nextTime.setMinutes(nextQuarter);
  // =========== Fin de recuperation du prochain creneau dispo ===========
  // =========== Génération des options ===========
  // Tant que l'heure de fin definit ligne 3 n'est pas atteinte, on continue

  const menVuCa = [];
  while (nextTime.getHours() != endTime) {
    // Boucle de generation des options toutes les X minutes (tel que definit ligne 5)
    for (let i = nextTime.getMinutes(); i < 60; i += step) {
      // On definit les minutes du prochain creneau
      nextTime.setMinutes(i);
      const lisible = `${nextTime
        // On recupere l'heure
        .getHours()
        // On fait en sorte qu'il y ait au mini 2 chiffres
        .toLocaleString('fr-FR', { minimumIntegerDigits: 2 })
        // On rajoute ':' entre l'heure et les minutes
      }:${
        nextTime
        // On recupere les minutes
          .getMinutes()
        // On fait en sorte qu'il y ait au mini 2 chiffres
          .toLocaleString('fr-FR', { minimumIntegerDigits: 2 })}`;

      const obj = {
        complete: nextTime.toISOString(),
        lisible: lisible,
      };

      menVuCa.push(obj);
    }
    // On est sortit de la boucle for, donc c'est que les minutes ont atteint 60
    // Donc on increment l'heure et on remet a 0 les minutes pour la boucle suivante
    nextTime.setHours(nextTime.getHours() + 1);
    nextTime.setMinutes(0);
  }
  // =========== Fin de génération des options ===========
  // console.log(menVuCa);
  return menVuCa;
};
export default gerard;
