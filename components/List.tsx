const List = ({ notes }) => {
  return (
    <div>
      {notes.length ? notes.map(doc => (
        <div key={doc.id}>
          <p>Title is: {doc.title}</p>
          <p>Detail is: {doc.details}</p>
          <p>Category is: {doc.category}</p>
          {/*<p>Time is: {doc.createdAt}</p>*/}
          <p>ID is: {doc.id}</p>
        </div>
      )):
        <div>
          <p>Hell Shit</p>
        </div>
      }
    </div>
  );
};

export default List;