import ReactDOM from 'react-dom';
import React, {Suspense} from 'react';

const App = React.lazy(()=>import('./components/app/app'))

ReactDOM.render(
    <Suspense fallback={<p>Загрузка...</p>}>
        <App />
    </Suspense>
    ,
    document.getElementById('root')
)



