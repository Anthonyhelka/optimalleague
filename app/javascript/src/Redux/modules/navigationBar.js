const initialState = {
  home: false,
  standings: false,
  stats: false,
  about: false,
  dropdown: false
}

const navigationBar = (state = initialState, action) => {
  switch(action.type) {
    case HANDLE_NAVIGATION:
      switch(action.destination) {
        case '/':
          return {...initialState, home: true, dropdown: state.dropdown}
        case '/home':
          return {...initialState, home: true, dropdown: state.dropdown}
        case '/standings':
          return {...initialState, standings: true, dropdown: state.dropdown}
        case '/stats':
          return {...initialState, stats: true, dropdown: state.dropdown}
        case '/about':
          return {...initialState, about: true, dropdown: state.dropdown}
        default:
          return {...initialState, home: true, dropdown: state.dropdown}
      }
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
const handleNavigation = (event, destination) => {
  return {
    type: HANDLE_NAVIGATION,
    destination: destination
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
