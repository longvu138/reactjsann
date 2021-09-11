import './App.css';
import Comment from './Components/Comment';
import FComments from './Components/FComments';

const comment = [
  { id: 1, author: 'Long Vũ Trần', content: 'this is  content long vũ cmt ' },
  { id: 2, author: 'Hoàng Lâm Trần', content: 'this is  content hoang lam cmt' },
  { id: 3, author: 'Giáo Làng', content: 'this is  content giao lang cmt' }

]

function App() {

  const contents = comment.map((item) => {
    return (

      <FComments key={item.id} name={item.author} content={item.content} />

    )
  })

  return (
    <div className="ui container comments">

      <h3>Function Component</h3>
      {contents}

      {/* <FComments name="Long Vũ func" content="this is content func" />
      <FComments name="Hoàng Lâm func" content="this is content ahihih func" />
      <FComments name="Giáo Làng fucn" content="this is content with giao lang func" /> */}

      <h3>Class Component</h3>
      {
        comment.length <= 0 ? <p>No Comments</p>: 
        comment.map((item) => {
          return (
            <Comment key={item.id} name={item.author} content={item.content} />
          )
        })
      }
    <hr/>
      {comment.length >0 && <h3>Total of comment: {comment.length}</h3>}

    </div>
  );
}

export default App;
