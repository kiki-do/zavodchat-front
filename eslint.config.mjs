export default {
  root: true,
  env: {
    browser: true,
    es2024: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: [
    "react",
    "simple-import-sort",
    "import"
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  rules: {

    "no-multi-spaces": ["error", {
      ignoreEOLComments: false,
      exceptions: {
        Property: false,
        VariableDeclarator: false,
        ImportDeclaration: false
      }
    }],
    "no-trailing-spaces": "error",
    "no-whitespace-before-property": "error",
    "no-irregular-whitespace": "error",
    "space-in-parens": ["error", "never"],
    "space-before-function-paren": ["error", {
      anonymous: "never",
      named: "never",
      asyncArrow: "always"
    }],
    "keyword-spacing": ["error", { before: true, after: true }],
    "comma-spacing": ["error", { before: false, after: true }],
    "semi-spacing": ["error", { before: false, after: true }],
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing": ["error", "never"],
    "spaced-comment": ["error", "always", { exceptions: ["-", "+"], markers: ["/"] }],
    "padded-blocks": ["error", "never"],
    "no-space-before-semi": "off",
    "space-before-blocks": ["error", "always"],

  
    "import/no-duplicates": "error",
    "import/newline-after-import": ["error", { "count": 1 }],
    "simple-import-sort/imports": ["error", {
      groups: [
   
        ["^node:"],
  
        ["^react", "^@?\\w"],

        ["^(@|src)(/.*|$)"],
 
        ["^\\.\\./"],
    
        ["^\\./"],
       
        ["^.+\\.s?css$"]
      ]
    }],
    "simple-import-sort/exports": "error",
 
    "sort-imports": "off",


    "react/jsx-uses-react": "off", 
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off", 
    "jsx-quotes": ["error", "prefer-double"],

    "eqeqeq": ["error", "always"],
    "no-duplicate-case": "error",
    "no-empty": ["error", { "allowEmptyCatch": false }],
    "no-undef": "error",
    "no-unused-vars": ["error", { "args": "none", "ignoreRestSiblings": true }],
    "curly": ["error", "all"],
    "brace-style": ["error", "1tbs", { "allowSingleLine": false }],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "max-len": ["error", { "code": 120, "ignoreUrls": true, "ignoreStrings": true, "ignoreTemplateLiterals": true }],
    "semi": ["error", "always"],
    "quotes": ["error", "double", { "avoidEscape": true, "allowTemplateLiterals": true }],

    /* ---------- Разрывы между логическими блоками ---------- */
    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": "*", "next": "return" },
      { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*" },
      { "blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"] }
    ]
  },
  overrides: [
    {
      files: ["*.jsx", "*.tsx"],
      rules: {
      
        "react/jsx-curly-spacing": ["error", { "when": "never", "children": true }],
        "react/jsx-tag-spacing": ["error", { "closingSlash": "never", "beforeSelfClosing": "always", "afterOpening": "never", "beforeClosing": "never" }]
      }
    },
    {
      files: ["*.test.js", "*.spec.js"],
      env: { jest: true }
    }
  ]
};
