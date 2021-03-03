const timeFromNow = (date) => {
  const diff = new Date() - new Date(date);
  const timeEquivalent = [
    { name: "an", inMillisecond: 3.154e10 },
    { name: "mois", inMillisecond: 2.628e9 },
    { name: "semaine", inMillisecond: 6.048e8 },
    { name: "jour", inMillisecond: 8.64e7 },
    { name: "heure", inMillisecond: 3.6e6 },
    { name: "minute", inMillisecond: 60000 },
    { name: "seconde", inMillisecond: 1000 },
  ];

  for (let i = 0; i < timeEquivalent.length; i++) {
    if (Math.round(diff / timeEquivalent[i].inMillisecond) > 0) {
      return `${Math.round(diff / timeEquivalent[i].inMillisecond)} ${
        Math.round(diff / timeEquivalent[i].inMillisecond) > 1 &&
        timeEquivalent[i].name !== "mois"
          ? timeEquivalent[i].name + "s"
          : timeEquivalent[i].name
      }`;
    }
  }
};

export default timeFromNow;
