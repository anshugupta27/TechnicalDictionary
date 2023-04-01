import React from 'react'

const Articles = React.lazy(() => import('../screen/subTopicListPage')) 

const PATHS = {
    ARTICLES: {
        url: 'articles',
        component: Articles
    }
}

export default PATHS