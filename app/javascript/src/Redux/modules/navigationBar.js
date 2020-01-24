const initialState = {
  path: '/',
  dropdown: false
}

const navigationBar = (state = initialState, action) => {
  switch(action.type) {
    case HANDLE_NAVIGATION:
      return {...state, path: action.desiredPath}
    case HANDLE_DROPDOWN:
      return {...state, dropdown: !state.dropdown}
    case HANDLE_OUTSIDE_CLICK:
      if (!event.target.className.includes('NavigationBar') && !event.target.id.includes('NavigationBar')) {
        return {...state, dropdown: false}
      }
    default:
      return state;
  }
}

const HANDLE_NAVIGATION = 'HANDLE_NAVIGATION';
const handleNavigation = (event, desiredPath) => {
  return {
    type: HANDLE_NAVIGATION,
    desiredPath: desiredPath
  }
}

const HANDLE_DROPDOWN = 'HANDLE_DROPDOWN';
const handleDropdown = () => {
  return {
    type: HANDLE_DROPDOWN
  }
}

const HANDLE_OUTSIDE_CLICK = 'HANDLE_OUTSIDE_CLICK';
const handleOutsideClick = (event) => {
  return {
    type: HANDLE_OUTSIDE_CLICK,
    id: event.target.id,
    className: event.target.className
  }
}

export {
  navigationBar,
  handleNavigation,
  handleDropdown,
  handleOutsideClick
}
