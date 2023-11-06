# 01

`npx create-react-app react_test_practice1`
`npm install jest --save-dev`
=> script의 테스트 부분을 아래와 같이 변경한다.
`'test' : 'jest --watchAll',`

# npm test and Error

1.  """
    Jest encountered an unexpected token
    This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.
    By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".
    Here's what you can do:
    """
    기본 작성되어 있는 App.test.js를 실행하자 에러 발생함.  
    "test": "react-scripts test --env=jsdom",  
    package.json의 테스트 부분을 위와 같이 수정하니, 해당 에러는 사라짐

2.  """
    [eslint] Plugin "testing-library" was conflicted between ".eslintrc.json" and ".eslintrc.json » eslint-config-react-app/jest".
    ERROR in [eslint] Plugin "testing-library" was conflicted between ".eslintrc.json" and ".eslintrc.json » eslint-config-react-app/jest".
    """
    npm start 시 아래와 같은 에러나옴.  
    package-lock.json의 eslint-config-react-app 부분에서 "eslint-plugin-jest": "^25.3.0", 지워주니 에러 사라짐.

3.  기록용
    """
    .eslintrc.json
    {
    "plugins": ["testing-library", "jest-dom"],
    "extends": [
    "react-app",
    "react-app/jest",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended"
    ]
    }
    """
