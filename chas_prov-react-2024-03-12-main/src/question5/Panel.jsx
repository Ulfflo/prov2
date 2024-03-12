


export default function Panel( {title, children, collapsible} ) {
 
  return (
    <div>
      <div>{title}</div>

      {collapsible ? (
        <>
          <button onClick={collapsible={false}}>Kollapsa</button>
          <p>{children}</p>{" "}
        </>
      ) : <p>{children}</p>}
    </div>
  );
}
