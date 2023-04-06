function MyButtonV2({ countV2, onClick }) {
  return (
    <>
      <button onClick={onClick}>Clicked {countV2} times</button>
    </>
  );
}

export default MyButtonV2;
