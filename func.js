  //не работает var Foooter

  var Badge = React.createClass({
    render: function() {
      return <button className="btn btn-primary" type="button">
        {this.props.title} <span className="badge">{this.props.number}</span>
      </button>
    }
  });

  var Header = React.createClass({
    render: function(){
      return (
              <nav className="navbar navbar-default">
                  <ul className="nav navbar-nav">
                    <li><a href="#">Link1</a></li>
                    <li><a href="#">Link2</a></li>
                    <li><a href="#">Link3</a></li>
                    <li><a href="#">Link4</a></li>
                    <li><a href="#">Link5</a></li>     
                  </ul>
              </nav>
        )
    }
  });

  var Footer = React.createClass({
    render: function() {
      return (
              <footer className="container-fluid text-center foot">
                <div className="copyrights">
                    <p className="white-txt">Изучаем ReactJS</p>
                    <br></br>
                    <img src={this.props.img} alt="картинка"/>
                    <br></br>
                    <hr className="dark-line"></hr>
                    <a className="link" href="https://github.com/alexanderkalinchuk">Мой github</a>
                    <br></br><br></br>

                </div>
              </footer>
        )
    }
  });

  var Thumbnail = React.createClass({
    render: function() {
      return <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <img src={this.props.imageUrl} alt="..."></img>
          <div className="caption">
            <h3>{this.props.header}</h3>
            <p>{this.props.description}</p>
            <p>
              <Badge title={this.props.title} number={this.props.number} />
            </p>
          </div>
        </div>
      </div>
    }
  });

  var ThumbnailList = React.createClass({
    render: function() {
                  var list = this.props.thumbnailData.map(
                    function(item){
                    return <Thumbnail {...item} />
                  });

                  // var list_footer = this.props.footerData.map(
                  //   function(item_footer){
                  //   return <Footer {...item_footer} />
                  // });                 
   
      return  (<div className="wrapper">
                  <Header /> 
                  <div className="list_goods">
                      {list}
                   
                  </div>
                  <Footer />
              </div>
              
            
             
              )
    }
  });

  var options = {
    thumbnailData:  [{
      title: 'Show Courses',
      number: 12,
      header: 'Learn React',
      description: 'React is a fantastic new front end library for rendering web pages. React is a fantastic new front end library for rendering web pages.',
      imageUrl: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png'
    },{
      title: 'Show Courses',
      number: 25,
      header: 'Learn Gulp',
      description: 'Gulp will speed up your development workflow.  Gulp will speed up your development workflow.  Gulp will speed up your development workflow.',
      imageUrl: 'http://brunch.io/images/others/gulp.png'
    },{
      title: 'Show Courses',
      number: 25,
      header: 'Learn Gulp',
      description: 'Gulp will speed up your development workflow.  Gulp will speed up your development workflow.  Gulp will speed up your development workflow.',
      imageUrl: 'http://brunch.io/images/others/gulp.png'
    }],
    headerData: [1,2,3,4],
    footerData: {
      img: 'http://superbotics.com/wp-content/uploads/html-css-js.png',
      link: 'https://github.com/alexanderkalinchuk',
    },
  };

  var element = React.createElement(ThumbnailList, options);
  React.render(element, document.querySelector('.container'));