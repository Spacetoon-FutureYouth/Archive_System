import React from 'react';

function NewsSingle () {
  return (
    <section className="news-single section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12">
            <div className="row">
              <div className="col-12">
                <div className="single-main">
                  <NewsHead />
                  <NewsTitle />
                  <Meta />
                  <NewsText />
                  <BlogBottom />
                </div>
              </div>
              <div className="col-12">
                <BlogComments />
              </div>
              <div className="col-12">
                <CommentsForm />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <MainSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

const NewsHead = () => (
  <div className="news-head">
    <img src="img/blog1.jpg" alt="#" />
  </div>
);

const NewsTitle = () => (
  <h1 className="news-title">
    <a href="news-single.html">More than 80 clinical trials launch to test of the coronavirus.</a>
  </h1>
);

const Meta = () => (
  <div className="meta">
    <div className="meta-left">
      <span className="author">
        <a href="#">
          <img src="img/author1.jpg" alt="#" /> Naimur Rahman
        </a>
      </span>
      <span className="date">
        <i className="fa fa-clock-o"></i> 03 Feb 2019
      </span>
    </div>
    <div className="meta-right">
      <span className="comments">
        <a href="#">
          <i className="fa fa-comments"></i> 05 Comments
        </a>
      </span>
      <span className="views">
        <i className="fa fa-eye"></i> 33K Views
      </span>
    </div>
  </div>
);

const NewsText = () => (
  <div className="news-text">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ultricies tortor, nec sollicitudin lorem sagittis vitae. Curabitur rhoncus commodo rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse porttitor nunc a sodales tempor. Mauris sed felis maximus, interdum metus vel, tincidunt diam.
    </p>
    <p>
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse porttitor nunc a sodales tempor. Mauris sed felis maximus, interdum metus vel, tincidunt diam. Nam ac risus vitae sem vehicula egestas. Sed velit nulla, viverra non commod.
    </p>
    <div className="image-gallery">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12">
          <div className="single-image">
            <img src="img/blog2.jpg" alt="#" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="single-image">
            <img src="img/blog3.jpg" alt="#" />
          </div>
        </div>
      </div>
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ultricies tortor, nec sollicitudin lorem sagittis vitae. Curabitur rhoncus commodo rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse porttitor nunc a sodales tempor. Mauris sed felis maximus, interdum metus vel, tincidunt diam.
    </p>
    <blockquote className="overlay">
      <p>
        Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse porttitor nunc a sodales tempor. Mauris sed felis maximus, interdum metus vel, tincidunt diam. Nam ac risus vitae sem vehicula egestas. Sed velit nulla, viverra non commodo et, sodales.
      </p>
    </blockquote>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ultricies tortor, nec sollicitudin lorem sagittis vitae. Curabitur rhoncus commodo rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse porttitor nunc a sodales tempor. Mauris sed felis maximus, interdum metus vel, tincidunt diam. Nam ac risus vitae sem vehicula egestas. Sed velit nulla, viverra non commodo et, sodales id dui.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ultricies tortor, nec sollicitudin lorem sagittis vitae. Curabitur rhoncus commodo rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse.
    </p>
  </div>
);

const BlogBottom = () => (
  <div className="blog-bottom">
    <ul className="social-share">
      <li className="facebook">
        <a href="#">
          <i className="fa fa-facebook"></i>
          <span>Facebook</span>
        </a>
      </li>
      <li className="twitter">
        <a href="#">
          <i className="fa fa-twitter"></i>
          <span>Twitter</span>
        </a>
      </li>
      <li className="google-plus">
        <a href="#">
          <i className="fa fa-google-plus"></i>
        </a>
      </li>
      <li className="linkedin">
        <a href="#">
          <i className="fa fa-linkedin"></i>
        </a>
      </li>
      <li className="pinterest">
        <a href="#">
          <i className="fa fa-pinterest"></i>
        </a>
      </li>
    </ul>
    <ul className="prev-next">
      <li className="prev">
        <a href="#">
          <i className="fa fa-angle-double-left"></i>
        </a>
      </li>
      <li className="next">
        <a href="#">
          <i className="fa fa-angle-double-right"></i>
        </a>
      </li>
    </ul>
  </div>
);

const BlogComments = () => (
  <div className="blog-comments">
    <h2>All Comments</h2>
    <div className="comments-body">
      <SingleComment
        imgSrc="img/author1.jpg"
        name="Afsana Mimi"
        date="March 05, 2019"
        time="03:38 AM"
        comment="Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas"
      />
      <SingleComment
        imgSrc="img/author2.jpg"
        name="Naimur Rahman"
        date="March 05, 2019"
        time="03:38 AM"
        comment="Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas"
        className="left"
      />
      <SingleComment
        imgSrc="img/author3.jpg"
        name="Suriya Molharta"
        date="March 05, 2019"
        time="03:38 AM"
        comment="Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas"
      />
    </div>
  </div>
);

const SingleComment = ({ imgSrc, name, date, time, comment, className = "" }) => (
    <div className={`single-comments ${className}`}>
      <div className="main">
        <div className="head">
          <img src={imgSrc} alt={name} />
        </div>
        <div className="body">
          <h4>{name}</h4>
          <div className="comment-meta">
            <span className="meta">
              <i className="fa fa-calendar"></i> {date}
            </span>
            <span className="meta">
              <i className="fa fa-clock-o"></i> {time}
            </span>
          </div>
          <p>{comment}</p>
          <a href="#">
            <i className="fa fa-reply"></i> reply
          </a>
        </div>
      </div>
    </div>
  );
  const CommentsForm = () => (
    <div className="comments-form">
      <h2>Leave Comments</h2>
      <form className="form" method="post" action="mail/mail.php">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12">
            <div className="form-group">
              <i className="fa fa-user"></i>
              <input type="text" name="first-name" placeholder="First name" required="required" />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="form-group">
              <i className="fa fa-envelope"></i>
              <input type="text" name="last-name" placeholder="Last name" required="required" />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="form-group">
              <i className="fa fa-envelope"></i>
              <input type="email" name="email" placeholder="Your Email" required="required" />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group message">
              <i className="fa fa-pencil"></i>
              <textarea name="message" rows="7" placeholder="Type Your Message Here"></textarea>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group button">
              <button type="submit" className="btn primary">
                <i className="fa fa-send"></i>Submit Comment
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
  
  const MainSidebar = () => (
    <div className="main-sidebar">
      <SingleWidget title="Search" className="search">
        <div className="form">
          <input type="email" placeholder="Search Here..." />
          <a className="button" href="#">
            <i className="fa fa-search"></i>
          </a>
        </div>
      </SingleWidget>
      <SingleWidget title="Blog Categories" className="category">
        <ul className="categor-list">
          <li><a href="#">Men's Apparel</a></li>
          <li><a href="#">Women's Apparel</a></li>
          <li><a href="#">Bags Collection</a></li>
          <li><a href="#">Accessories</a></li>
          <li><a href="#">Sun Glasses</a></li>
        </ul>
      </SingleWidget>
      <SingleWidget title="Recent post" className="recent-post">
        <RecentPost
          imgSrc="img/blog-sidebar1.jpg"
          title="We have announced our new product."
          date="Jan 11, 2020"
          comments="35"
        />
        <RecentPost
          imgSrc="img/blog-sidebar2.jpg"
          title="Top five ways for solving teeth problems."
          date="Mar 05, 2019"
          comments="59"
        />
        <RecentPost
          imgSrc="img/blog-sidebar3.jpg"
          title="We provide highly business solutions."
          date="June 09, 2019"
          comments="44"
        />
      </SingleWidget>
      <SingleWidget title="Tags" className="side-tags">
        <ul className="tag">
          <li><a href="#">business</a></li>
          <li><a href="#">wordpress</a></li>
          <li><a href="#">html</a></li>
          <li><a href="#">multipurpose</a></li>
          <li><a href="#">education</a></li>
          <li><a href="#">template</a></li>
          <li><a href="#">Ecommerce</a></li>
        </ul>
      </SingleWidget>
    </div>
  );
  
  const SingleWidget = ({ title, children, className }) => (
    <div className={`single-widget ${className}`}>
      <h3 className="title">{title}</h3>
      {children}
    </div>
  );
  
  const RecentPost = ({ imgSrc, title, date, comments }) => (
    <div className="single-post">
      <div className="image">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="content">
        <h5>
          <a href="#">{title}</a>
        </h5>
        <ul className="comment">
          <li>
            <i className="fa fa-calendar" aria-hidden="true"></i> {date}
          </li>
          <li>
            <i className="fa fa-commenting-o" aria-hidden="true"></i> {comments}
          </li>
        </ul>
      </div>
    </div>
  );
  
  export default NewsSingle;
    