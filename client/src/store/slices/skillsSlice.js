import { createSlice } from "@reduxjs/toolkit"

const initialState = { skills: '' }

const skillsSlice = createSlice({
  name: 'skillsSlice',
  initialState,
  reducers: {
    setStateSkills: (state, { payload }) => {
      state.skills = payload
    },

    setStateNewSkill: (state, { payload }) => {
      state.skills.push(payload.skill)
    },

    updateStateSkill: (state, { payload }) => {
      state.skills = state.skills.map((skill) => {
        if (skill.id === payload.skill.id) {
          return payload.skill
        }
        return skill
      })
    },

    deleteStateSkill: (state, { payload }) => {
      state.skills = state.skills.filter((skill) => {
        return skill.id !== payload.skill
      })
    }

  }
})

export const { setStateSkills, setStateNewSkill, updateStateSkill, deleteStateSkill } = skillsSlice.actions
export const skillsReducer = skillsSlice.reducer