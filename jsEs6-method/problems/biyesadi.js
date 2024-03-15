const polapain = [
    { name: "mir", job: "sorkari", salary: 17000 },
    { name: "rawfur", job: "besorkari", salary: 25000 },
    { name: "asif", job: "sorkari", salary: 21000 },
    { name: "faycal", job: "besorkari", salary: 47000 },
    { name: "musab", job: "sorkari", salary: 23000 },
    { name: "umami", job: "besorkari", salary: 55000 },
  ];

  const vaggobans = polapain.filter((pola) => (pola.job === "sorkari" && pola.salary >=20000) || (pola.job === 'besorkari' && pola.salary >=40000))
  console.log(vaggobans)
  const number = Math.random();

  console.log(number*vaggobans.length)
  const polaNumber = Math.floor(number*vaggobans.length)
  
  const finalJamai = vaggobans[polaNumber].name;
  console.log(`${finalJamai}, Tumi jitso...!`)

  

