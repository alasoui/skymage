export default  authHeader = () => {
    let user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.accessToken) {
      return { 'accessToken': user.accessToken };
    } else {
      return {};
    }
  }