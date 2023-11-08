import { createSlice } from "@reduxjs/toolkit"

const initialState = { projects: '' }

const projectsSlice = createSlice({
  name: 'projectsSlice',
  initialState,
  reducers: {
    setStateProjects: (state, { payload }) => {
      state.projects = payload
    },

    setStateNewProject: (state, { payload }) => {
      state.projects.push(payload.project)
    },

    updateStateProject: (state, { payload }) => {
      state.projects = state.projects.map((project) => {
        if (project.id === payload.project.id) {
          return payload.project
        }
        return project
      })
    },

    deleteStateProject: (state, { payload }) => {
      state.projects = state.projects.filter((project) => {
        return project.id !== payload.project
      })
    },

  }
})

export const { setStateProjects, setStateNewProject, updateStateProject, deleteStateProject } = projectsSlice.actions
export const projectsReducer = projectsSlice.reducer