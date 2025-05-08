import { useReducer } from 'react';

const AboutButtons = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'linkedin':
        window.open(action.link, '_blank');
        return state;
      case 'github':
        window.open(action.link, '_blank');
        return state;
      default:
        return state;
    }
  };

  const [_, dispatch] = useReducer(reducer, '');

  const redirectToGitHub = () => {
    dispatch({ type: 'github', link: 'https://github.com/youichiuehara14' });
  };

  const redirectToLinkedIn = () => {
    dispatch({ type: 'linkedin', link: 'https://www.linkedin.com/in/youichiuehara/' });
  };

  return (
    <div className="btn flex mt-5 gap-1 justify-center md:justify-start">
      <button
        className="cursor-pointer flex text-2xl font-secondary text-white bg-gradient-to-r
        from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-3 
        focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 shadow-lg shadow-orange-500/50 
        dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg px-6 py-2.5 text-center me-2 mb-2"
        onClick={redirectToGitHub}
      >
        <i className="bx bxl-github text-3xl m-auto"></i>
        <div>Github</div>
      </button>
      <button
        className="cursor-pointer flex self-center justify-center text-2xl font-secondary text-white 
        bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-3 
        focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 shadow-lg shadow-orange-500/50 
        dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg px-6 py-2.5 text-center me-2 mb-2"
        onClick={redirectToLinkedIn}
      >
        <i className="bx bxl-linkedin-square text-3xl m-auto"></i>
        <div>LinkedIn</div>
      </button>
    </div>
  );
};

export default AboutButtons;
