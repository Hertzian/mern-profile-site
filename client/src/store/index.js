import { configureStore, } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

import { frontPageApi } from './apis/frontPageApi'
import { authApi } from './apis/authApi'
import { usersApi } from './apis/usersApi'
import { placesApi } from './apis/placesApi'
import { skillsApi } from './apis/skillsApi'
import { projectsApi } from './apis/projectsApi'

import { authReducer, setLoginCredentials, logout } from './slices/authSlice'
import { usersReducer, updateStateProfile, setStateProfile } from './slices/usersSlice'
import { placesReducer, setStateAllPlaces, setStateNewPlace, updateStatePlace, deleteStatePlace } from './slices/placesSlice'
import { setStateSkills, setStateNewSkill, updateStateSkill, deleteStateSkill, skillsReducer } from './slices/skillsSlice'
import { setStateProjects, setStateNewProject, updateStateProject, deleteStateProject, projectsReducer } from './slices/projectsSlice'

export const store = configureStore({
  reducer: {
    authSlice: authReducer,
    usersSlice: usersReducer,
    placesSlice: placesReducer,
    skillsSlice: skillsReducer,
    projectsSlice: projectsReducer,

    [frontPageApi.reducerPath]: frontPageApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [placesApi.reducerPath]: placesApi.reducer,
    [skillsApi.reducerPath]: skillsApi.reducer,
    [projectsApi.reducerPath]: projectsApi.reducer

  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(frontPageApi.middleware)
      .concat(authApi.middleware)
      .concat(usersApi.middleware)
      .concat(placesApi.middleware)
      .concat(skillsApi.middleware)
      .concat(projectsApi.middleware)
  }
})

setupListeners(store.dispatch)

export {
  setLoginCredentials, logout,
  updateStateProfile, setStateProfile,
  setStateAllPlaces, setStateNewPlace, updateStatePlace, deleteStatePlace,
  setStateSkills, setStateNewSkill, updateStateSkill, deleteStateSkill,
  setStateProjects, setStateNewProject, updateStateProject, deleteStateProject
}
export { useGetGeneralProfileQuery, } from './apis/frontPageApi'
export { useLoginMutation } from './apis/authApi'
export { useGetProfileQuery, useUpdateProfileMutation } from './apis/usersApi'
export { useGetPlacesQuery, useCreatePlaceMutation, useUpdatePlaceMutation, useDeletePlaceMutation } from './apis/placesApi'
export { useGetSkillsQuery, useCreateSkillMutation, useUpdateSkillMutation, useDeleteSkillMutation } from './apis/skillsApi'
export { getProjects, createProject, updateProject, deleteProject } from './apis/projectsApi'