module.exports = {
  "extends":[
    "stylelint-config-recommended-scss",
    "stylelint-config-recess-order",
    "stylelint-prettier/recommended"
  ],
  "plugins": ["stylelint-prettier"],
   rules: {
    'selector-pseudo-element-no-unknown': [true, {
      ignorePseudoElements: ['v-deep'],
    }],
    "prettier/prettier": true,
    'number-leading-zero': 'always',
  }
}
