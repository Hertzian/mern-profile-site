const Skills = ({ skills }) => {
  const showSkills =
    skills &&
    skills.map((skill) => (
      <div key={skill.id}>
        <h3>{skill.name}</h3>
        <div className='progressbar'>
          <div className='progressbar-infill' style={{ width: `${skill.value}%` }} />
        </div>
      </div>
    ))

  return (
    <section className='skills' id='skills'>
      <h2 className='section__title section__title--skills'>Skills</h2>
      {showSkills}
    </section>
  )
}

export default Skills
