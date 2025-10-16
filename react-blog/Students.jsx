function Students({ students }) {
  return (
    <div>
      <h3>Students</h3>
      {
      students.map((student) => (
        <ul>
          <li>Name:{student.name}</li>
        </ul>
      ))}
    </div>
  );
}

export default Students;
