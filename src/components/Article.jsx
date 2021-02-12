import React from 'react'
import Button from './Button'

const articles = {
    title:'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet diam ultricies, auctor tellus eget, euismod mauris. Sed finibus ultricies luctus. Donec id justo in leo lobortis tincidunt. Ut fermentum suscipit enim sit amet porttitor. Vivamus rutrum nisi id euismod pulvinar. In odio leo, elementum sit amet tincidunt in, tincidunt a felis. Maecenas venenatis nisi et velit sodales tincidunt.'
}

const Article = () => {

    return (
    <main class="jumbotron m-3">
        <h1 class="text-center">
            {articles.title}
        </h1>
        <p>
            {articles.text}
        </p>
        <div className="p-3 m-3">
          <Button name="More..."/>
        </div>
    </main>
    )
}

export default Article
