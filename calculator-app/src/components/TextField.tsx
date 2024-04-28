interface textProps {
  input: string | number;
}

function TextField(props: textProps) {
  return (
    <>
      <div>
        <p className="text-center">{props.input}</p>
      </div>
    </>
  );
}

export default TextField;
