import React, { Component } from 'react';
import classnames from 'classnames';
import { BOOKS_SAVE } from '../mutations/books.mutations';
import { Mutation } from 'react-apollo';

const styleDiv = {
  position: 'relative',
  left: '80px',
  top: '100px',
  color: 'black'
};
export default class About extends Component {
  constructor() {
    super();
    this.state = {
      isbn: '',
      title: '',
      errors: {}
    };
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps(nextProps) {
    // eslint-disable-next-line react/prop-types
    if (nextProps.errors) {
      this.setState({
        // eslint-disable-next-line react/prop-types
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e, createBook) => {
    e.preventDefault();
    const isbn = this.state.isbn;
    const title = this.state.title;
    const newBook = {
      isbn: isbn,
      title: title
    };
    console.log(newBook);

    createBook({ variables: { isbn, title } }).then(data => {
      console.log(data);
    });

    if (title == null) deleteOneBook({ variables: { isbn } });
  };
  render() {
    const { isbn, title, errors } = this.state;
    return (
      <div style={styleDiv}>
        <Mutation mutation={BOOKS_SAVE} variables={{ isbn, title }}>
          {(createBook, { data }) => (
            <form noValidate onSubmit={e => this.onSubmit(event, createBook)}>
              <div className="input-field col s12">
                <label htmlFor="isbn">ISBN</label>
                <input
                  onChange={this.onChange}
                  value={this.state.isbn}
                  error={errors.isbn}
                  id="isbn"
                  type="text"
                  className={classnames('', {
                    invalid: errors.isbn
                  })}
                />
                <span className="red-text">{errors.isbn}</span>
              </div>
              <div className="input-field col s12">
                <label htmlFor="title">Title</label>
                <input
                  onChange={this.onChange}
                  value={this.state.title}
                  error={errors.title}
                  id="title"
                  type="text"
                  className={classnames('', {
                    invalid: errors.title
                  })}
                />
                <span className="red-text">{errors.title}</span>
              </div>
              <div className="col s12" style={{ paddingLeft: '11.250px' }}>
                <button
                  style={{
                    width: '150px',
                    zIndex: 0,
                    borderRadius: '3px',
                    letterSpacing: '1.5px',
                    marginTop: '1rem'
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Create Book
                </button>
              </div>
            </form>
          )}
        </Mutation>
      </div>
    );
  }
}
