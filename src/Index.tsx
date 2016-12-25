import * as React from 'react';
import * as ReactDom from 'react-dom';

/** UIコンポーネント */
export class App extends React.Component<{}, {}>{
    render() {
        return (
            <div>
                Hello React!!!
            </div>
        )
    }
}

ReactDom.render(/* UIコンポーネント */<App />, /* 表示させたいDOM要素のid指定 */document.getElementById('app'));
