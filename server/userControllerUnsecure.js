const database = [
  {
    email: 'sallybonnet@yahoo.com',
    password: '1234',
    destiny: 'becoming the new Santa'
  },
]

const destinies = [
  'become a well-respected bartender',
  'cure cancer',
  'become a bear whisperer',
  'become a hoarder',
  'become the lead in a high-budget film, filling in for Henry Cavill when he unexpectedly goes MIA',
  'summit Everest',
  'become the next Bruce Willis',
]
module.exports = {
  signup: (req, res) => {
    const {email, password} = req.body;
    const destiny = destinies[Math.floor(Math.random() * destinies.length)];
    let newDatabaseEntry = {
      email: email,
      password: password,
      destiny: destiny
    };
    console.log("New database entry: ", newDatabaseEntry);
    database.push(newDatabaseEntry);
    res.status(200).send({success: true})
  },
  login: (req,res)=> {
    const {email, password} = req.body;
    let userData;
    for (const user of database){
      if (user.email === email){
        userData = user;
        break;
      }
    }
    if(!userData){
      res.status(200).send({success:false, message:"Invalid email"})
    } else if(password === userData.password){
      res.status(200).send({success:true, destiny: userData.destiny})
    } else{
      res.status(200).send({success:false, message: "Invalid password"})
    }
    console.log("Sending response:", res.statusCode, res._header, res._data);
  }
}