function makePerson(personDetail) {
  return personDetail;
}
export default function MakeData(personDetails) {
  const generateData = () => {
    return personDetails.map((personDetail, i) => {
      return {
        ...makePerson(personDetail),
      };
    });
  };

  return generateData();
}
