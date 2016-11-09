var ArticleList = React.createClass({
    render: function () {
        return <section id="zero" className="wrapper style1">
            <div className="inner">
                <Article
                    title="Title value"
                    text="Text value"
                    imgSrc="images/bears/mishka-delovishka_paris.jpg"
                    moreLinkHref="https://www.instagram.com/levoruchka/" />
            </div>
        </section>
    }
});

ReactDOM.render(
    <ArticleList />,
    document.getElementById('zero')
);
