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
    
  },
  login: (req,res)=> {
    const {email, password} = req.body;
    console.log(email);
    console.log(password);
  }
}