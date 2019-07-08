module.exports = {
    "extends": ["airbnb", "plugin:prettier/recommended", "prettier/react"],
    "parser": "babel-eslint",
    "env": {
	   "browser": true,
	   "node": true
	  },
    "rules": {
        "import/extensions": ["off", "never"],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
         "no-bitwise": ["error", { "allow": ["~"] }],
         "react/destructuring-assignment": 0
    },
};