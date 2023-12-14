export default function FormBehavior() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("submited");
      }}
    >
      <input type="text" />
      <button>submit</button>
    </form>
  );
}
