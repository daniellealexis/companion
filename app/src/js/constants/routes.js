export default {
    home: () => '/',
    userProfile: ({ username } = {}) => (username ? `/u/${username}` : '/u/:username'),
    questionPage: ({ id } = {}) => (id ? `/q/${id}` : '/q/:id'),
};
