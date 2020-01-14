import {
  RECEIVE_PROJECTS,
  RECEIVE_PROJECT,
  RECEIVE_PROJECT_ERROR,
  CLEAR_ERRORS,
  REMOVE_PROJECT
} from '../actions/project_actions';

const projectsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_PROJECTS:
      newState = Object.assign(newState, action.projects);
      return newState;
    case RECEIVE_PROJECT:
      newState[action.project.id] = action.project;
      return newState;
    case RECEIVE_PROJECT_ERROR:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    case REMOVE_PROJECT:
      delete newState[action.projectId];
      return newState;
    default:
      return state;
  }
};

export default projectsReducer;