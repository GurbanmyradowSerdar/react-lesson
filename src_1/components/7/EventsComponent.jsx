export default function EventsComponent() {
  return (
    <div
      className="m-10 w-full h-20 bg-green-50 gap-10 flex "
      onClick={() => {
        alert("You clicked on the toolbar!");
      }}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          alert("Playing! button clicked");
        }}
        className="bg-yellow-700"
      >
        Play Movie
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          alert("Uploading! button clicked");
        }}
        className="bg-purple-600"
      >
        Upload Image
      </button>
    </div>
  );
}
