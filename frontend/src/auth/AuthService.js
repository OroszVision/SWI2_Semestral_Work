// authService.js

export const logout = async () => {
    // Add logic to clear local storage or remove any stored authentication tokens
    // This can include clearing the access token and refreshing the page or redirecting to the login page
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    window.location.href = '/login'; // Redirect to the login page after logout
};
