// module.exports = function(api) {
//   api.cache(true);
//   return {
//     presets: ['babel-preset-expo'],
//   };
// };

module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		///This Plugin should be last
		'react-native-reanimated/plugin',
	],
};
