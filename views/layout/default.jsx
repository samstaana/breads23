const React = require('react')

function Default (html) {
    return (
        <html>
            <head>
                <title>{html.title || 'Default'}</title>
            </head>
            <body>
                <h1>HTML Rendered!</h1>
                <div className='container'>
                    {html.children}
                    {/* When using {}, we are telling React/JSX to stop, evaluate what is inside, and then render the contents. */}
                </div>
            </body>
        </html>
    )
}

module.exports = Default