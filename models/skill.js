const skills = [
    {id: 001, skill: 'Nunchuk', learned: true},
    {id: 002, skill: 'Bow Hunting', learned: false},
    {id: 003, skill: 'Computer Hacking', learned: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update,
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    return skills.find(skill => skill.id == id);
  }
  function create(skillObj) {
  
    skillObj.id = Math.floor(Math.random() * 1000);
    skillObj.learned = false;
    skills.push(skillObj);
  
  }

  function deleteOne(id) {
    const deleteIdx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(deleteIdx,1);
  }
  
  function update(skillObj, id) {
    let skill = skills.find(skill => skill.id == id);
    console.log(skillObj);

    skill.skill = skillObj.skill;
    skill.learned = eval(skillObj.learned);
  }