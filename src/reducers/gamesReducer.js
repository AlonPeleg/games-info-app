const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  const { payload } = action;
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: payload.popular,
        upcoming: payload.upcoming,
        newGames: payload.newGames,
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
