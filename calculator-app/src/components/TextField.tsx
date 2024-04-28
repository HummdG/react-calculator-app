interface textProps {
  input: string;
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
