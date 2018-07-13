const key = 'AIzaSyDz1z_adQRc_kJ9dV5Y8hnhTbQAGZ23BE8';
export const environment = {
  production: true,
  baseUrl: 'https://library-mgt-22339.firebaseio.com/',
  apiKey: key,
  signUpUrl: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + key,
  SignInUrl: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + key
};

// signup and sign in body:
// {"email":"user@example.com1","password":"123456","returnSecureToken":true}
