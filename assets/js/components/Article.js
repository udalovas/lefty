alert('list');
var Article = React.createClass({
    render: function () {
        return <article className="feature left">
            <span className="image"><img src={this.props.imgSrc} alt=""/></span>
            <div className="content">
                <h2>{this.props.title}</h2>
                <p>{this.props.text}</p>
                <ul className="actions">
                    <li>
                        <a href={this.props.moreLinkHref} target="_blank" className="button alt">Еще</a>
                    </li>
                </ul>
            </div>
        </article>
    }
});
