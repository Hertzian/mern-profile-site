const Skills = ({ skills }) => {
  let showSkills = {}
  if (skills && skills.length) {
    showSkills = skills
      .filter((skill) => skill.show === true)
      .map((skill) => {
        return (
          <div key={skill.id}>
            <h3>{skill.name}</h3>
            <div className='progressbar'>
              <div className='progressbar-infill' style={{ width: `${skill.value}%` }} />
            </div>
          </div>
        )
      })
  } else {
    showSkills = ''
  }

  return (
    <section className='skills' id='skills'>
      <h2 className='section__title section__title--skills'>Skills</h2>
      {showSkills}
    </section>
  )
}

export default Skills
