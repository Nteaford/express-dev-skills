const skills = [
    {id: 001, skill: 'Nunchuk Skills', learned: true},
    {id: 002, skill: 'Bow Hunting Skills', learned: false},
    {id: 003, skill: 'Computer Hacking Skills', learned: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    return skills.find(skill => skill.id == id);
  }