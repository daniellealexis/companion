export default {
    home: () => '/',
    userProfile: ({ username } = {}) => (username ? `/u/${username}` : '/u/:username'),
};
